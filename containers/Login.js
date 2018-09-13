/*
* @Author: Administrator
* @Date:   2018-03-02 11:51:01
* @Last Modified by:   Administrator
* @Last Modified time: 2018-08-30 13:22:34
*/
// 完善登录中 
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    Platform, 
    PermissionsAndroid
} from 'react-native';

import {THEME_BACKGROUND, THEME_LABEL, THEME_TEXT} from '../styles/css/color';

import { Button } from 'antd-mobile';

// import { BaiduVoise,SpeechRecognizer } from 'react-native-voise';


const photoWidth = Dimensions.get('window').width;

import SearchItem from '../components/SearchItem';


export default class Me extends Component {




  constructor(props) {
    super(props);
    this.state={
      show: true,
      listData: [],
      postData:'',
      visible:false,
      username:'',
      password:'',

    }
  }

  handleAdd = () => {
    this.setState({
      visible: true
    });
  }


     // 自定义函数

    //登录函数  
      login = () => {
        // debugger;  
        // 使用key来保存数据。这些数据一般是全局独有的，常常需要调用的。  
        // 除非你手动移除，这些数据会被永久保存，而且默认不会过期。  
        // storage.save({  
        //     key: 'loginState',  // 注意:请不要在key中使用_下划线符号!  
        //     data: {  
        //       userid: '1001',  
        //       userName:'userName',  
        //       token: 'token'  
        //     },  
        //     // 如果不指定过期时间，则会使用defaultExpires参数  
        //     // 如果设为null，则永不过期  
        //     // 8个小时后过期  
        //     expires: 1000 * 3600 * 8  
        //   });  

        // global.user.loginState = true;//设置登录状态  

        // global.user.userData = { userid: '1001', userName:'userName', token: 'token'};//保存用户数据  

        setTimeout(()=>{  
            this.props.navigation.navigate('IndexScreen')//跳转到用户页面  
          },2000)  

      }  

      // 登录函数
      voiceLogin = () => {
        this.setState({result:results[0]},() => {
          console.log(this.state.result);
          this.fetchdata(this.state.result)
        });
      }

      //语音输入用户名
      onReceiveUserName = (results) => {
        this.setState({username:results[0]},() => {
        console.log(this.state.username);
          // this.fetchdata(this.state.result)
        });
      }

      //语音输入密码
      onReceivePassWord = (results) => {
        this.setState({password:results[0]},() => {
          console.log(this.state.password);
          // this.fetchdata(this.state.result)
        });
      }
      
      tes = () => {
       
      }

      tesTwo = () => {
        
      }

    getData = () => {

      const values = {
        "astrict": "string",
        "createBy": "string",
        "createDate": {
          "date": 0,
          "day": 0,
          "hours": 0,
          "minutes": 0,
          "month": 0,
          "nanos": 0,
          "seconds": 0,
          "time": 0,
          "timezoneOffset": 0,
          "year": 0
        },
        "delFlag": "string",
        "departid": "string",
        "email": "string",
        "isphoneLogin": "string",
        "loginDate": {
          "date": 0,
          "day": 0,
          "hours": 0,
          "minutes": 0,
          "month": 0,
          "nanos": 0,
          "seconds": 0,
          "time": 0,
          "timezoneOffset": 0,
          "year": 0
        },
        "loginFlag": "string",
        "loginIp": "string",
        "loginName": "string",
        "mobile": "string",
        "password": this.password,
        "phone": "string",
        "qq": "string",
        "remarks": "string",
        "updateBy": "string",
        "updateDate": {
          "date": 0,
          "day": 0,
          "hours": 0,
          "minutes": 0,
          "month": 0,
          "nanos": 0,
          "seconds": 0,
          "time": 0,
          "timezoneOffset": 0,
          "year": 0
        },
        "userType": "string",
        "usercode": "string",
        "userid": "string",
        "username": this.username
      }
    
      fetch('http://127.0.0.1:8090/sysUsers/login',{
        method:"POST",
        mode: "cors",  
        headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)

      }).then((res) => {
        // if (res.ok) {
         
          console.log(res)
        
            // }
      }).catch((res) => {

        this.login()
        
      });

     
    }


    render() {
        console.log('主页面')
        return (
          <View style={styles.loginPage}>

            <View style={styles.loginSection}>

              <Text style={styles.loginTitle}>鼎力智造</Text>

              <View style={styles.loginVoice}>

                <TextInput style={styles.loginInput} placeholder='用户名' 
                defaultValue={this.state.username} autoCapitalize={'none'} maxLength={20}
                onChangeText={(text) =>this.setState({username:text})}/>

               

              </View>

              <View style={styles.loginVoice}>

                <TextInput style={styles.loginInput} placeholder='密码' secureTextEntry={true}
                defaultValue={this.state.password} autoCapitalize={'none'} maxLength={20}
                onChangeText={(text) => this.setState({password:text})}/>

                
                
              </View>
             

              <Button onClick={this.getData}>登录</Button>

              <Text style={{color:"#4A90E2",textAlign:'center',marginTop:30}} >忘记密码？</Text>


            </View>
          </View>


        );
    }
}



 const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
   loginPage: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 20,
        backgroundColor: THEME_BACKGROUND
    },
    loginSection: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20
    },
    loginTitle: {
        fontSize: 28,
        fontWeight: '500',
        color: THEME_LABEL,
        textAlign: 'center',
        marginTop: 32,
        marginBottom: 32
    },
    loginVoice: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    subButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8
    },
    subButtonText: {
        color: THEME_TEXT,
        fontSize: 14
    },
    loginInput: {
      flex:1,
      marginBottom: 15,

    },
    message: {
        marginTop: 16,
        color: THEME_TEXT,
        fontSize: 14
    },
    icon: {
      width:25,
      height:25,
    }
  });