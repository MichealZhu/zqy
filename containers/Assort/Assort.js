/*
* @Author: Administrator
* @Date:   2018-03-02 11:51:01
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-13 15:53:42
*/
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    Platform, 
    PermissionsAndroid,
    CameraRoll,
    ScrollView,
} from 'react-native';

import {Heading2, Heading3, Paragraph} from '../../widget/Text'

import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view'

import AssortListSence from './AssortListSence'

const {width,height}=Dimensions.get('window');

export default class Assort extends Component {

	constructor(props) {
		super(props);
		this.state = {
			page: 0,
			titles:[]
		};
	}

	componentDidMount() {

		this.requestFirstPage()
	
	}


	requestFirstPage = async () => {

			let dataList =  await this.requestData()

			console.log(dataList,'datalisttttttttttttttt')
			
			this.setState({
				titles: dataList,
			})
	}


	requestData = async () => {

  		   let params = {"page":1,"size":3,"state":0};
  		   let url = 'http://10.10.10.109:9119/classifyOne/findPage';

  		   let response = await fetch(url,{
  		   	method: 'POST',
  		   	body:JSON.stringify(params),
  		   	headers: {
  		   		Accept: "application/json",
  		   		"Content-Type": "application/json"
  		   	},

  		   }).then((res) => {
  		   	
  		   	if( res.ok === true ) {

  		   		return res.json()

  		   	}

  		   }).catch((error) => {

  		   	console.log(error)

  		   })

  		   let dataList = response.content.map((info) => {

  		   	return {
  		   		id: info.id,
  		   		imageUrl: info.pictureUrl,
  		   		title: info.name,
  		   	}

  		   })

  		  	return  dataList
    }




    render() {

	    	let titles = this.state.titles
	    	
	    	if(titles.length == 0) {

	    		return (

	    			<Text>loading...</Text>

	    		);

	    	} else  {
	    		return (

        	<View style={styles.container}>
        	
		        	<View style={{height:height*0.08,backgroundColor:'#56688A',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

			        	<TouchableOpacity style={styles.searchBar}>
				        	<Image source={require('../../images/sort/search_icon.png')} style={styles.searchIcon} />
				        	<Paragraph>机加工</Paragraph>
			        	</TouchableOpacity>

		        	</View>


		        	<ScrollableTabView
			        	tabBarBackgroundColor='white'
			        	tabBarActiveTextColor='#006599'
			        	tabBarInactiveTextColor='#555555'
			        	tabBarUnderlineStyle={styles.tabBarUnderline}
			        	style={{marginTop: 5,}}
			        	initialPage={0}
			        	onChangeTab={(obj) => {
			        		this.setState(
			        				{
			        					page: obj.i
			        				}
			        			)
			        	} }
			        	>

			        	{ titles.map((title, i) => (
			        		console.log(titles[i].title,'1111111111111111'),
			        		<AssortListSence
			        		tabLabel={ titles[i].title }
			        		key={i}
			        		id={titles[i].id}
			        		page = {this.state.page}
			        		/>

			        		)) 
			        	}

		        	</ScrollableTabView>

        	</View>


        );
	    	}
        
    }
}




const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	icon:{
		width:20,
		height:20
	},
	item:{
		margin:15,
		height:30,
		borderWidth:1,
		padding:6,
		borderColor:'#ddd',
		textAlign:'center'
	},
	searchBar: {
		width: width * 0.7,
		height: 30,
		borderRadius: 19,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		alignSelf: 'center',
	},
	searchIcon: {
		width: 20,
		height: 20,
		margin: 5,
	},
	tabBarText: {
		fontSize: 14,
		marginTop: 13,
	},
	tabBarUnderline: {
		backgroundColor: '#FE566D'
	},
	banner: {
		width: width - 5,
		height: 100,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
	},


});