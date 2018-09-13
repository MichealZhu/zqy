/*
* @Author: Administrator
* @Date:   2018-03-02 11:51:01
* @Last Modified by:   Administrator
* @Last Modified time: 2018-08-30 15:51:22
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
    CameraRoll
} from 'react-native';

import {Heading2, Heading3, Paragraph} from '../widget/Text'

import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view'





const {width,height}=Dimensions.get('window');


export default class Tes extends Component {


	constructor(props) {
		super(props);
		this.state = {
			imagePath:'../images/1.jpg'
		};
	}

	

	

    render() {


	    	let titles = ['成型工艺', '材质/热处理', '表面处理']

        return (
        	<View style={styles.container}>
        	
		        	<View style={{height:height*0.08,backgroundColor:'#56688A',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

			        	<TouchableOpacity style={styles.searchBar}>
				        	<Image source={require('../images/sort/search_icon.png')} style={styles.searchIcon} />
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
			        	renderTabBar={() => <DefaultTabBar />}
			        	>
			        	<View tabLabel='成型工艺'>
			        		<Image source={require('../images/banner/1.png')} style={styles.banner}/>

			        		<View style={{ flexDirection:'row'}}>
			        			<View style={{	justifyContent: 'center',alignItems: 'center',}}>
			        				<Image source={require('../images/banner/1.png')} style={styles.materail}/>
			        				<Text style={{	justifyContent: 'center',}}>车削</Text>
			        			</View>
			        			<View style={{	justifyContent: 'center',alignItems: 'center',}}>
			        				<Image source={require('../images/banner/1.png')} style={styles.materail}/>
			        				<Text>铣削</Text>
			        			</View>
			        			<View style={{	justifyContent: 'center',alignItems: 'center',}}>
			        				<Image source={require('../images/banner/1.png')} style={styles.materail}/>
			        				<Text>线切割工艺</Text>
			        			</View>
			        		</View>

			        		<View style={{ flexDirection:'row'}}>
			        			<View style={{	justifyContent: 'center',alignItems: 'center',}}>
			        				<Image source={require('../images/banner/1.png')} style={styles.materail}/>
			        				<Text style={{	justifyContent: 'center',}}>3D打印工艺</Text>
			        			</View>
			        			<View style={{	justifyContent: 'center',alignItems: 'center',}}>
			        				<Image source={require('../images/banner/1.png')} style={styles.materail}/>
			        				<Text>电火花</Text>
			        			</View>
			        			<View style={{	justifyContent: 'center',alignItems: 'center',}}>
			        				<Image source={require('../images/banner/1.png')} style={styles.materail}/>
			        				<Text>磨削</Text>
			        			</View>
			        		</View>

			        	</View>

			        	<View tabLabel='材质/热处理'>

			        		<Image source={require('../images/banner/1.png')} style={styles.banner}/>

			        		<View style={{ flexDirection:'row'}}>
			        			<View style={{	justifyContent: 'center',alignItems: 'center',}}>
			        				<Image source={require('../images/banner/1.png')} style={styles.materail}/>
			        				<Text style={{	justifyContent: 'center',}}>塑胶</Text>
			        			</View>
			        			<View style={{	justifyContent: 'center',alignItems: 'center',}}>
			        				<Image source={require('../images/banner/1.png')} style={styles.materail}/>
			        				<Text>钢材</Text>
			        			</View>
			        			<View style={{	justifyContent: 'center',alignItems: 'center',}}>
			        				<Image source={require('../images/banner/1.png')} style={styles.materail}/>
			        				<Text>有色金属</Text>
			        			</View>
			        		</View>

			        		<View style={{ flexDirection:'row'}}>
			        			<View style={{	justifyContent: 'center',alignItems: 'center',}}>
			        				<Image source={require('../images/banner/1.png')} style={styles.materail}/>
			        				<Text style={{	justifyContent: 'center',}}>3D打印材料</Text>
			        			</View>
			        			<View style={{	justifyContent: 'center',alignItems: 'center',}}>
			        				<Image source={require('../images/banner/1.png')} style={styles.materail}/>
			        				<Text>有色金属</Text>
			        			</View>
			        		
			        		</View>

			       
			        	</View>

			        	<View tabLabel='表面处理'>

			        		<Image source={require('../images/banner/1.png')} style={styles.banner}/>

			        		<View style={{ flexDirection:'row'}}>
			        			<View style={{	justifyContent: 'center',alignItems: 'center',}}>
			        				<Image source={require('../images/banner/1.png')} style={styles.materail}/>
			        				<Text style={{	justifyContent: 'center',}}>喷漆</Text>
			        			</View>
			        			<View style={{	justifyContent: 'center',alignItems: 'center',}}>
			        				<Image source={require('../images/banner/1.png')} style={styles.materail}/>
			        				<Text>电镀</Text>
			        			</View>
			        			<View style={{	justifyContent: 'center',alignItems: 'center',}}>
			        				<Image source={require('../images/banner/1.png')} style={styles.materail}/>
			        				<Text>物理处理</Text>
			        			</View>
			        		</View>

			        		<View style={{ flexDirection:'row'}}>
			        			<View style={{	justifyContent: 'center',alignItems: 'center',}}>
			        				<Image source={require('../images/banner/1.png')} style={styles.materail}/>
			        				<Text style={{	justifyContent: 'center',}}>打磨</Text>
			        			</View>
			        			<View style={{	justifyContent: 'center',alignItems: 'center',}}>
			        				<Image source={require('../images/banner/1.png')} style={styles.materail}/>
			        				<Text>喷沙</Text>
			        			</View>
			        		
			        		</View>

			    
			        	</View>

		        	</ScrollableTabView>

        	</View>


        );
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
	materail: {
		width: width/3 - width/3*0.3,
		height: width/3 -width/3*0.3,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: width/3*0.15,	
		marginRight: width/3*0.15,
	},
	banner: {
		width: width - 5,
		height: 100,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
	},
	tabBarUnderline: {
		backgroundColor: '#FE566D'
	},

});