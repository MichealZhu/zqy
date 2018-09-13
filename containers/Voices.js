/*
* @Author: Administrator
* @Date:   2018-03-02 11:51:01
* @Last Modified by:   Administrator
* @Last Modified time: 2018-08-29 17:29:31
*/
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    Platform, 
    PermissionsAndroid,
    FlatList,
} from 'react-native';


const photoWidth = Dimensions.get('window').width;

// import { BaiduVoise,SpeechRecognizer } from 'react-native-voise';

import Icon from 'react-native-vector-icons/Ionicons';

// import SearchItem from '../components/SearchItem';

import Item from '../components/Item';

const api = 'http://api.douban.com/v2/movie/search';

// const api = 'http://api.douban.com/v2/movie/search?q=张艺谋';



export default class Voices extends Component {

	constructor(props) {
		super(props);
		this.state={
			result: '',
			searchData: [],
			refreshing:'',
			childState:''
		}
	}


	componentDidUpdate(){
		
	}

	// 调用查询接口
  fetchdata = (params) => {
  	fetch(api+'?q='+ params)
  	.then((response) => response.text())
  	.then((responseText) => {

  		const json = JSON.parse(responseText);
  		this.setState({
  			searchData: json.subjects,
  			refreshing: false,
  		});
  		console.log(json)
  	})
  	.catch((error) => {
  		console.error(error);
  	});
  };

  // 语音查询
	onReceive = (results) => {
    //results is a list ,the first one is the best result.
    // this.setState((state)=>{
    // 	state.result=results[0];
    // });
		this.setState({result:results[0]},() => {
			console.log(this.state.result);
			this.fetchdata(this.state.result)
		});

  }

  // 搜索查询
  onSearch = () => {
  	this.fetchdata(this.state.result)
  }


    render() {

    	const {searchData} = this.state;

    	const {navigate} = this.props.navigation;

      return (
        <View style={styles.container}>

        	<View style={styles.search}>

	        	<View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
	        		<Icon name="ios-arrow-dropleft" color="#FAFAFA" size={28} style={{padding:5}}></Icon>
	        	</View>
	        	
	        	<TextInput
	        	style={styles.inputText}
	        	maxLength={40}
	        	onChangeText={(text) => this.setState({result:text})}
	        	value={this.state.result}
	        	underlineColorAndroid="transparent"
	        	/>

	        	<TouchableOpacity onPress={this.onSearch}>
		        	<View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
		        		<Icon name="md-search" color="#FAFAFA" size={28} style={{padding:5}}></Icon>
		        	</View>
		        </TouchableOpacity>

        	</View>

       		<View style={styles.mes}>

        		<View style = {styles.conten}>
	        		<FlatList
	        			numColumns={3}
	        			keyExtractor={item => item.id}
		        		data={searchData}
				       	renderItem={
				       		({item}) =>
				       		<Item
				       		title={item.title}
				       		image={item.images.large}
				       		stars={item.rating.stars}
				       		onPress={() => navigate('Detail',{
				       			id: item.id,
				       			callback: (data) => {
				       				this.setState({
				       					childState: data
				       				})
				       			}
				       		})}/>
				       	}
	        		/>
        		</View>


	       	</View>

        </View>
      );
    }
}

const styles = StyleSheet.create({
	container:{
		flex:1,
	},
	search: {
		flex:1,
		backgroundColor:'#56688A',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection:'row',
	},
	mes: {
		flex:9,
		backgroundColor:'#ffffff',
	},
	conten: {
		flex:3,
		justifyContent: 'center',
		alignItems: 'center',
	},
	voice: {
		flex: 1,
		backgroundColor:'#ffffff',
		justifyContent: 'center',
		alignItems: 'center',
	},
	button:{
		
	},
	inputText: {
		height:40,
		flex:7,
		backgroundColor:'#ffffff',
		padding:5,
	},
	text: {
		justifyContent: 'center',
		alignItems: 'center',
	}
});