/*
* @Author: Administrator
* @Date:   2018-03-02 11:51:01
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-13 13:54:06
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
    FlatList,
    Button,
    ScrollView,
} from 'react-native';


import { Icon } from 'antd-mobile';
import Item from '../../components/Item';
import movies from '../../json/movies.json';
import ProductFoundView from '../../components/Product/ProductFoundView'

const {width,height}=Dimensions.get('window');


export default class Found extends Component {

	constructor(props) {
		super(props);
		this.state={
			foundIndex: '',
			foundTitle:'材料介绍',
			refreshing: false,
			childState: '',
			types:[],
			data:[],
			materialtypes:[]
		}
	}

	static navigationOptions = {
		title: '发现',
		header: null
	};
  
	componentDidMount() {

		this.requestIntroduce()

	}

	
	requestFirstPage = async (introduceId) => {

		let dataList = await this.requestData(introduceId)
	
		this.setState({
			materialtypes: dataList,
			data: dataList,
		})

	}

  requestIntroduce = async () => {

  		let dataList = await this.requestIntroduceData()
  
  		this.setState({
  			types: dataList,
  		},() => {
  			this.requestFirstPage( this.state.types[0].id )
  		})

  }


  requestData = async (introduceId) => {

  	let params = {
  		"findOneId": introduceId,
  		"state": 0
  	}

  	let url = 'http://10.10.10.109:9119/findTwo/findByFindOneIdAndState';

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

  	console.log(response,'rrrrrrresssssssssssp')

  	let dataList = response.map((info) => {

  		return {
  			id: info.id,
  			title: info.name,
  			key: info.id,
  			findOneId: info.findOneId
  		}

  	})

  	return dataList

  }


   requestIntroduceData = async () => {

    	let params = {
    		"state": 0
    	};

    	let url = 'http://10.10.10.109:9119/fondOne/findByState';

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

    	let dataList = response.map((info) => {

    		return {
    			id: info.id,
    			title: info.name,
    			key: info.id
    		}

    	})

    	return dataList

    }


	renderProductView () {

		console.log(this.state.materialtypes,'看下变了没父')

		return (

			<ProductFoundView
			titles={this.state.types}
			selectedIndex={this.state.foundIndex}
			selectedTitle={this.state.foundTitle}
			infos = {this.state.data}
			materialtypes = {this.state.materialtypes}
			onSelected={(index,title) => {
				
				if (index != this.state.foundIndex) {
					this.setState({
						foundIndex: index,
						foundTitle: title,
					})

					let introduceId = this.state.types[index].id

					this.requestFirstPage(introduceId)  
				}

			}}
			
			/>
			)

	}

	
  
  refreshing = false;

  fetchdata = () => {

  	if (this.refreshing) {
  		return;
  	}

  	this.setState({
  		refreshing: true
  	});

  	this.refreshing = true;

  	fetch(api)
  	.then((response) => response.text())
  	.then((responseText) => {
  		const json = JSON.parse(responseText);
  		this.setState({
  			movies: json.subjects,
  			refreshing: false,
  		});
  		this.refreshing = false;
  	})
  	.catch((error) => {
  		console.error(error);
  	});

  };




    render() {

    	const {movies, refreshing, childState} = this.state;

    	const {navigate} = this.props.navigation;

    	
    	  
        return (
        	<View style={styles.container}>

	        	<View style={{height:height*0.08,backgroundColor:'#56688A',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

	        		<Text style={styles.colorWhite}>发现</Text>

	        	</View>

	        	<ScrollView>

	        	{this.renderProductView()}


	        	</ScrollView>


        	</View>
        );
    }

 

}
const styles = StyleSheet.create({
	container:{
		flex:1
	},
	button:{
		height:50,
	},
	content:{
		width:width,
		height:height,
		backgroundColor:'yellow',
		justifyContent:'center',
		alignItems:'center'
	},
	cell:{
		height:100,
		backgroundColor:'purple',
		alignItems:'center',
		justifyContent:'center',
		borderBottomColor:'#ececec',
		borderBottomWidth:1

	},
	txt: {
		textAlign: 'center',
		textAlignVertical: 'center',
		color: 'white',
		fontSize: 30,
	},
	row: {
		marginLeft: 15
	},
	colorWhite: {
		color: "#FAFAFA"
	},
	materialImage: {
		width: width - 10,
		height: 150,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 6,
	},
	orderImage: {
		width: width/2 - 20,
		height: 150,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 6,
	},
	factory: {
		borderWidth: 1,  
    borderColor: '#ffffff',
		width: width/2 - 20,
		height: 100,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 12,
	},
	factoryCu: {
		borderWidth: 1,  
    borderColor: '#ffffff',
		width: width/2 - 20,
		height: 250,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 12,
	}
});


