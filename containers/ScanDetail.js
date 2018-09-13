/*
* @Author: Administrator
* @Date:   2018-03-02 11:51:01
* @Last Modified by:   Administrator
* @Last Modified time: 2018-04-16 14:22:47
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
    WebView
} from 'react-native';


const photoWidth = Dimensions.get('window').width;


export default class ScanDetail extends Component {

	constructor(props) {
		super(props);
		this.state = {
			type:'',
			mes:''
		};
	}




    render() {

    	const {state:{params:{mes}}} = this.props.navigation;
    	const {state:{params:{type}}} = this.props.navigation;
    	
    

    	renderCode=()=>{
    		return (
    			<View>
	    			<Text>
	    				{mes}
	    			</Text>
    			</View>
    			)
    	}

    	renderQr=()=>{
    		return (
    			<WebView
    			source={{uri: mes}}
    			/>
    			);
			}

 
    		if( type == 'QR_CODE') {
					return renderQr()
    		} else if( type == 'EAN_13' ){
					return renderCode()
    		} 
    
    }

}



	const styles = StyleSheet.create({

		container: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		},
		icon:{
			width:20,
			height:20
		},
		
	});