/*
* @Author: Administrator
* @Date:   2018-08-30 16:36:58
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-13 14:36:14
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
    ScrollView,
    FlatList
} from 'react-native';

import ListItem from './ListItem'

const {width,height}=Dimensions.get('window');

export default class AssortListSence extends Component {


	constructor(props) {
		super(props);
		this.state = {
			infos: [],
			bannerImage: '../../images/banner/1.png'
		};
	}


	componentDidMount() {

		this.requestFirstPage()
	
	}


	requestFirstPage = async () => {

			let dataList =  await this.requestData()

			console.log(dataList,'assortData')
			
			this.setState({
				infos: dataList,
			})
	}


	requestData = async () => {

		// let response = await fetch(api.recommend)

		// let json = await response.json()

		// console.log(JSON.stringify(json))

		// let dataList = json.data.map((info) => {

		// 	return {
		// 		id: info.id,
		// 		imageUrl: info.imageUrl,
		// 		title: info.title,
		// 	}

		// })
		
  	// return dataList
  	
  	let params = {

  		"classifyOneId": this.props.id,
  		"state": 0

  	};

  	let url = 'http://10.10.10.109:9119/classifyTwo/findByClassifyOneIdAndState';

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
  			imageUrl: info.pictureUrl,
  			title: info.name,
  			key: info.id
  		}

  	})

  		return dataList

    }

    render() {

    		console.log(this.props.page)

        return (

        	<View >

	        	<Image source={require('../../images/banner/1.png')}  style={styles.banner}/>
	        		<ScrollView>

			        	<ListItem	
				        	infos = {this.state.infos}
			        	/>
			        </ScrollView>

        	</View>

        );
    }
}



const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	banner: {
		width: width - 5,
		height: 100,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
	},
		materail: {
		width: width/3 - width/3*0.3,
		height: width/3 -width/3*0.3,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: width/3*0.15,	
		marginRight: width/3*0.15,
	},

});


// 排骨 让你担心了 我和月影散了  我去找她了  带着我的决心  带着我最后的想法   先领证  我留几年  我买房  
// 她否了   她不忍伤父母的心   也舍不得  她父母态度依旧如此   这也是这几个月   我把她推开之后 她看到的更多的东西
// 女孩想和你在一起的时候  你只要在 什么困难 她都会站出来想要和你一起面对     当你不在了 她自己走过了这段日子   她不想了  她也怕了
// 这是在我推的时候就想到的 只是在推的时候  我抱着 我会说服我爸妈的那一线生机   到最后还是没能说服了  当真正面临结局的时候   我太难受了   我后悔 我愧疚  我怨自己 
//  当初对感情的不坚定  做选择时的犹豫不决   考虑问题的不周全    懦弱无能       