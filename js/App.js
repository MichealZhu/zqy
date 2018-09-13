
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet
} from 'react-native';

import {
    Text,
    StatusBar,
    Image,
    View,
    TextInput
} from 'react-native';

import { Button } from 'antd-mobile';

import {THEME_BACKGROUND, THEME_LABEL, THEME_TEXT} from '../styles/css/color';

//导入stack导航组件
import { StackNavigator,DrawerNavigator } from 'react-navigation';

import Login from '../containers/Login.js';
import Me from '../containers/Me.js';
import Voices from '../containers/Voices.js';
import Found from '../containers/Found/Found.js';
import Detail from '../containers/Detail.js';
import Settings from '../containers/Settings.js';
import Scan from '../containers/Scan.js';
import ScanDetail from '../containers/ScanDetail.js';
import Images from '../containers/ImagePicker.js';
import TabNavigator from '../containers/HomeContainer.js';

    
    const stack = StackNavigator({  
      IndexScreen: {  
        screen: TabNavigator,  
        // initialRouteName: 'IndexScreen'  
      },  
      MeScreen: {screen: Me},  
      Login:{screen: Login},  
      Voices:{screen: Voices},  
      Found:{screen: Found},  
      Detail:{screen:  Detail},  
      Settings:{screen:  Settings},  
      Scan:{screen:  Scan},  
      ScanDetail:{screen:  ScanDetail},  
      Images:{screen:  Images},  

    }, {  
    initialRouteName: 'Login', // 默认显示界面  
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)  
        headerStyle:{elevation: 0,shadowOpacity: 0,height:48,backgroundColor:"#2196f3"},  
        headerTitleStyle:{color:'#fff',fontSize:16}, //alignSelf:'center'  文字居中  
        headerBackTitleStyle:{color:'#fff',fontSize:12},  
        // headerTintColor:{},  
        gesturesEnabled:true,//是否支持滑动返回收拾，iOS默认支持，安卓默认关闭  
        header:null
      },  
    mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)  
    headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏  
    onTransitionStart: (Start)=>{console.log('导航栏切换开始');},  // 回调  
    onTransitionEnd: ()=>{ console.log('导航栏切换结束'); }  // 回调  
  }); 


  const IDMApp = DrawerNavigator({

    Home: {
        screen: stack,
        navigationOptions: {
            drawerLabel: '图纸识别',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('../images/star-full.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Wallet: {
        screen: Me,
        navigationOptions: {
            drawerLabel: '机加工',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('../images/star-full.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    CardCoupons: {
        screen: Me,
        navigationOptions: {
            drawerLabel: '手板加工',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('../images/star-full.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Modul: {
        screen: Me,
        navigationOptions: {
            drawerLabel: '模具',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('../images/star-full.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    threeD: {
      screen: Me,
      navigationOptions: {
        drawerLabel: '3D打印',
        drawerIcon: ({tintColor}) => (
          <Image
          source={require('../images/star-full.png')}
          style={[styles.icon, {tintColor: tintColor}]}
          />
          ),
    }
  },
  Invite: {
        screen: Me,
        navigationOptions: {
            drawerLabel: '钣金加工',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('../images/star-full.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
  },

}, {
    drawerWidth: 200, // 展示的宽度
    drawerPosition: 'right', // 抽屉在左边还是右边
    // contentOptions: {
    //     // activeTintColor: 'black',  // 选中文字颜色
    //     activeBackgroundColor: '#fff', // 选中背景颜色
    //     inactiveTintColor: '#EB3695',  // 未选中文字颜色
    //     inactiveBackgroundColor: '#fff', // 未选中背景颜色
    //     style: {  // 样式
    //
    //     }
    // },
});


// const defaultGetStateForAction = IDMApp.router.getStateForAction;  

// IDMApp.router.getStateForAction = (action, state) => {  
//     //页面是MeScreen并且 global.user.loginState = false || ''（未登录）  
//     if (action.routeName ==='IndexScreen'&& !global.user.loginState) {  
//       this.routes = [  
//       ...state.routes,  
//       {key: 'id-'+Date.now(), routeName: 'Login', params: { name: 'name1'}},  
//       ];  
//       return {  
//         ...state,  
//         routes,  
//         index: this.routes.length - 1,  
//       };  
//     }  
//     return defaultGetStateForAction(action, state);  
//   };  
  






export default class App extends Component {  
    render() {  
        return (  
            <IDMApp />  
        );  
    }  
}  


const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    }
});