import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  Image,
  Platform, 
  PermissionsAndroid,
} from 'react-native';

import ImagePicker from 'react-native-image-picker';

import { Button } from 'antd-mobile';

export default class Images extends Component  {

  constructor(props) {

    super(props);
    this.state = {
      avatarSource:[],
      imgFileName:[],
      videoSource: null
    };

  }

   // 提交
  submit = () => {

    // this.postUpLoadImage_Attachment()
    console.log(this.state.avatarSource[0], this.state.imgFileName[0])
    // 文件
    let formData = new FormData();//如果需要上传多张图片,需要遍历数组,把图片的路径数组放入formData中
    let file = {uri: this.state.avatarSource[0], type: 'multipart/form-data', name:'image.png'};   
    formData.append("files",file);   //这里的files就是后台需要的key
    // for(var i = 0;i<this.state.avatarSource.length;i++){
    //     let file = {uri: this.state.avatarSource[i], type: 'multipart/form-data', name: 'image.png'};   
    //     formData.append("files",file);  
    // }
    // 上传
    // fetch(uploadURL,{
    //   method:'POST',
    //   headers:{
    //     'Content-Type':'multipart/form-data',
    //   },
    //   body:formData,
    // })
    // .then((response) => response.text() )
    // .then((responseData)=>{
    //   console.log('responseData',responseData);
    // })
    // .catch((error)=>{console.error('error',error)});

  }


  selectPhotoTapped = () => {
    
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

     ImagePicker.launchImageLibrary(options, (response)  => { 
      if (response.didCancel) {
        console.log('用户点击了取消');
      }
      else if (response.error) {
        console.log('ImagePicker 出错: ', response.error);
      }
      else { 
        let source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};  
        if (Platform.OS === 'ios') {
         source = {uri: response.uri.replace('file://', ''), isStatic: true};
       } else {
         source = {uri: response.uri, isStatic: true};
       }
       let imageArray = this.state.avatarSource;
       imageArray.push(source);
       let imgFileNameArray = this.state.imgFileName;
       if (response.fileName!=null) {
        imgFileNameArray.push(response.fileName);
      }
      console.log(imageArray,imgFileNameArray)
      this.setState({
        avatarSource:imageArray,
        imgFileName:imgFileNameArray
      });
    }
  });


  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.selectPhotoTapped}>
          <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
          { this.state.avatarSource.length === 0 ? <Text>添加故障图片</Text> :
            <Image style={styles.avatar} source={this.state.avatarSource[0]} />
          }
          </View>
        </TouchableOpacity>
        <View>
          <Button onClick={this.submit}>提交</Button>
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
    backgroundColor: '#F5FCFF'
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 150,
    height: 150
  }
});


 