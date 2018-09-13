/*
* @Author: Administrator
* @Date:   2018-03-02 11:51:01
* @Last Modified by:   Administrator
* @Last Modified time: 2018-08-30 13:25:32
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
    ScrollView,
    PermissionsAndroid
} from 'react-native';


const photoWidth = Dimensions.get('window').width;

import { Icon } from 'antd-mobile';

import OrderMenuItem from '../components/Order/OrderMenuItem.js'

import { color, DetailCell, NavigationItem, SpacingView } from '../widget'

import {Heading2, Heading3, Paragraph} from '../widget/Text'


export default class Me extends Component {


	renderCells() {

		let cells = []
		let dataList = this.getDataList()
		for (let i = 0; i < dataList.length; i++) {
			let sublist = dataList[i]
			for (let j = 0; j < sublist.length; j++) {
				let data = sublist[j]
				let cell = <DetailCell image={data.image} title={data.title} subtitle={data.subtitle} key={data.title} />
				cells.push(cell)
			}
			cells.push(<SpacingView key={i} />)
		}

		return (
			<View style={{flex: 1}}>
				{cells}
			</View>
			)

	}

	renderHeader() {
		return (

			<View style={styles.header}>

				<Image style={styles.avatar} source={require('../images/avatar.png')} />

				<View>

					<View style={{flexDirection: 'row', alignItems: 'center',}}>
						<Heading2 style={{color: 'white'}}>用户名：测试</Heading2>
						<Image style={{marginLeft: 4}} source={require('../images/star-full.png')} />
					</View>

					<Paragraph style={{color: 'white', marginTop: 4}}> YO 新晋云端制造家 </Paragraph>

				</View>

			</View>

			)
	}


	renderOrder() {
		return (

			<View style={styles.itemContainer}>
				<OrderMenuItem title='未付款' icon={require('../images/order/order_tab_need_pay.png')} />
				<OrderMenuItem title='已付款' icon={require('../images/order/order_tab_need_use.png')} />
				<OrderMenuItem title='已完成' icon={require('../images/order/order_tab_need_review.png')} />
			</View>

			)
	}

    render() {
        return (
        	<View style={styles.container}>

	        	<ScrollView>
	        	 	{this.renderHeader()}
              {this.renderOrder()}
              <SpacingView />
	        		{this.renderCells()}
	        	</ScrollView>


        	</View>
        );
    }


    getDataList() {
    	return (
    		[
	    		[
		    		{title: '会员中心', image: require('../images/star-full.png')},
		    		{title: '我的晒单', subtitle: '63', image: require('../images/star-full.png')},
		    		{title: '我的收藏', subtitle: '2', image: require('../images/star-full.png')}
	    		],
	    		[
		    		{title: '我的消息', image: require('../images/star-full.png')},
		    		{title: '联系客服', image: require('../images/star-full.png')},
		    		{title: '收货地址', image: require('../images/star-full.png')},
		    		{title: '我的资料', subtitle: 'v15', image: require('../images/star-full.png')},
		    		{title: '账户安全', image: require('../images/star-full.png')}
	    		],
	    		[
		    		{title: '通用设置', image: require('../images/star-full.png')},
		    		{title: '关于云工厂', subtitle: '我要合作', image: require('../images/star-full.png')}
	    		]
    		]
    		)
    }

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	holder: {
		flex: 0.25,
		alignSelf: 'center',
	},
	text: {
		fontSize: 14,
	},
	capture: {
		backgroundColor: '#fff',
		borderRadius: 5,
		padding: 10,
		paddingHorizontal: 20,
		alignSelf: 'center',
		margin: 20
	},
	header: {
		padding:20,
		backgroundColor: '#003C72',
		flexDirection: 'row',
		alignItems: 'center',
	},
	avatar: {
		width: 50,
		height: 50,
		marginRight: 10,
		borderRadius: 25,
		borderWidth: 2,
		borderColor: '#51D3C6'
	},
	itemContainer: {
		flexDirection: 'row',
	},
	
});