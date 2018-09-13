import React, {Component} from 'react';

import {
    Text,
    Image,
    Navigator,
    StyleSheet,
    View
} from 'react-native'; 

import Icon from 'react-native-vector-icons/Ionicons';

import { StackNavigator,TabNavigator,NavigationActions } from 'react-navigation';

import {THEME_BACKGROUND, THEME_LABEL, THEME_TEXT} from '../styles/css/color';

import Home from './Home.js';
import Me from './Me.js';
import ShopCar from './ShopCar.js';
import Assort from './Assort/Assort.js';
import Settings from './Settings.js';
import Login from './Login.js';
import Found from './Found/Found.js';


// Tab可抽象函数
export default TabNavigator({
  首页: { 
    screen: Home,
    navigationOptions:({navigation}) => ({    
        tabBarIcon:({focused,tintColor}) => (  
          <Icon name="md-home" color="#FAFAFA" size={28} ></Icon>
        ),
        onNavigationStateChange:(()=> alert("首页"))   
      }), 
  },
  发现: { 
    screen: Found,
    navigationOptions:({navigation}) => ({    
      tabBarIcon:({focused,tintColor}) => (  
        <Icon name="ios-videocam" color="#FAFAFA" size={28} ></Icon>
       )  
    }), 
  },
  分类: { 
    screen:Assort,
    navigationOptions:({navigation}) => ({    
      tabBarIcon:({focused,tintColor}) => (  
       // <Image source={require('../images/1.jpg')}
       // style={[styles.icon,{tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
       // /> 
        <Icon name="md-build" color="#FAFAFA" size={28} ></Icon>
       )  
    }), 
  },
  购物车: { 
    screen: ShopCar,
    navigationOptions:({navigation}) => ({    
       tabBarIcon:({focused,tintColor}) => (  
          <Icon name="md-cart" color="#FAFAFA" size={28} ></Icon>
       )  
     }), 
  },
  我的: { 
    screen: Me,
    navigationOptions:({navigation}) => ({    
     tabBarIcon:({focused,tintColor}) => (  
      <Icon name="ios-happy-outline" color="#FAFAFA" size={28} ></Icon>
      )  
   }), 
  }
 
},
{ 
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#1086D8', // 文字和图片选中颜色
    inactiveTintColor: 'white', // 文字和图片默认颜色
    showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
    indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
    style: {
      backgroundColor: THEME_LABEL, // TabBar 背景色
      height:55
    },
    labelStyle: {
      fontSize: 12, // 文字大小,
      marginTop: 2,
    },
  },
}); 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon:{
    width:20,
    height:20
  }
});

