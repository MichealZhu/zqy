/*
* @Author: Administrator
* @Date:   2018-03-02 11:51:01
* @Last Modified by:   Administrator
* @Last Modified time: 2018-04-27 11:51:39
*/
import React, {Component} from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Button,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import Video from 'react-native-video';



const videoWidth = Dimensions.get('window').width;


export default class Settings extends Component {


	//构造函数
	constructor(props) {
		super(props);
		this.state = {
			rate:0,
			paused:true
		};
	}

	// 播放视频
	play = () => {
		this.setState({
			paused: !this.state.paused
		})
	}


	// 视频页面 
	// videoMes = () => {
		
	// 	this.props.navigation.navigate('VideoMes')//跳转到用户页面
	// }

	videoError = () => {
		
	}


	
    render() {

    	  const {state:{params:{id}}} = this.props.navigation;
    	  

        return (
        	<View style={styles.container}>

	        

        		<View style={styles.videoBox}>

	        		<TouchableOpacity
	        		style={styles.fullScreen}
	        		onPress={this.play}
	        		>	
			        	<Video
			        	ref={(ref: Video) => {
			        		this.video = ref
			        	}}
			        	/* For ExoPlayer */
			        	/* source={{ uri: 'http://www.youtube.com/api/manifest/dash/id/bf5bb2419360daf1/source/youtube?as=fmp4_audio_clear,fmp4_sd_hd_clear&sparams=ip,ipbits,expire,source,id,as&ip=0.0.0.0&ipbits=0&expire=19000000000&signature=51AF5F39AB0CEC3E5497CD9C900EBFEAECCCB5C7.8506521BFC350652163895D4C26DEE124209AA9E&key=ik0', type: 'mpd' }} */
			        	source={require('../video/tes.mp4')}
			        	style={styles.fullScreen}
						    rate={this.state.rate}    // 控制暂停/播放，0 代表暂停paused, 1代表播放normal.
						    paused={this.state.paused}
						    volume={2}               // 声音的放大倍数，0 代表没有声音，就是静音muted, 1 代表正常音量 normal，更大的数字表示放大的倍数
						    muted={false}                  // true代表静音，默认为false.
						    resizeMode='cover'       // 视频的自适应伸缩铺放行为，
						    onLoad={this.onLoad}                       // 当视频加载完毕时的回调函数
						    onLoadStart={this.loadStart}            // 当视频开始加载时的回调函数
						    onProgress={this.onProgress}   //  进度控制，每250ms调用一次，以获取视频播放的进度
						    onEnd={this.onEnd}             // 当视频播放完毕后的回调函数
						    onError={this.videoError}    // 当视频不能加载，或出错后的回调函数
						    onAudioBecomingNoisy={this.onAudioBecomingNoisy}
						    onAudioFocusChanged={this.onAudioFocusChanged}
						    repeat={false}                            // 是否重复播放
						    />
						    </TouchableOpacity>
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
	holder: {
		flex: 0.25,
		justifyContent: 'center',
	},
	text: {
		fontSize: 16,
	},
	preview: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	capture: {
		flex: 0,
		backgroundColor: '#fff',
		borderRadius: 5,
		padding: 15,
		paddingHorizontal: 20,
		alignSelf: 'center',
		margin: 20
	},
	fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
	},
	videoBox:{
		width:videoWidth,
		height:200,
		backgroundColor:'#000'
	},
});