import React, {Component} from 'react';
import { PropTypes } from 'prop-types';

import ReactNative, {
  requireNativeComponent,
  View,
  UIManager,
  TouchableOpacity,
  AppRegistry,
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  Platform, 
  PermissionsAndroid
} from 'react-native';


import { BaiduVoise,SpeechRecognizer } from 'react-native-voise';

export default class BaiduVoiseT extends Component {

  constructor(props) {
    super(props);
    this.state={

    }
  }


    render() {
      
      
  
      return (

       <BaiduVoise
         ref={'BaiduVoiseT'}
         style={styles.button}
         api_key={'q0UcNM0glvjekMtBQNWzM92y'} 
         secret_key={'8hRsMQCQGNdwqnyF8GkWBgr6WObZFT5l'} 
         onReceive={this.props.onReceivePassWord}>  
         <Image
         style={styles.icon}
         source={require('../images/voiceLogin.png')}
         />   
       </BaiduVoise>
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
    loginSection: {
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20
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
    loginInput: {
      flex:1,
      marginBottom: 15,

    },
    icon: {
      width:25,
      height:25,
    }
  });