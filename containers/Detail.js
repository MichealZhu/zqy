/**
 * Created by colinambitious on 2017/9/12.
 */
/**
 * Created by tdzl2003 on 12/17/16.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    ActivityIndicator,
    AsyncStorage,
    TouchableOpacity
} from 'react-native';


const api = 'https://api.douban.com/v2/movie/subject';
// 视屏改善 全屏播放
export default class Detail extends Component {

    static navigationOptions = {
      title: '详情页',
      header: null
    };

    state = {

      data: {},
      ready: false,

    }

      // 视频点击
      onPressVideo = () => {
        const {state:{params:{id}}} = this.props.navigation;
        this.props.navigation.navigate('Settings',{
          id: id,
          callback: (data) => {
            // console.log(item,data)
            alert(1)
          }
        })

      }

    

    componentDidMount() {
        
        const {state:{params:{id}}} = this.props.navigation;

        console.log(id,this.props.navigation)

        AsyncStorage.getItem(id).then((response) => {
            console.log(response,'111')
            if (response) {
                const json = JSON.parse(response);
                json.image = json.images.large.replace('webp', 'jpg');
                this.setState({
                    data: JSON.parse(response),
                    ready: true
                });
                return;
            }
            fetch(api + '/' + id)
                .then((response) => response.text())
                .then((responseText) => {
                    console.log(responseText)
                    const json = JSON.parse(responseText);
                    json.image = json.images.large.replace('webp', 'jpg');

                    const textData = JSON.stringify(json);
                    AsyncStorage.setItem(id, textData);

                    this.setState({
                        data: json,
                        ready: true
                    });
                })
                .catch((error) => {
                    console.error(error);
                });
        });

    }

    render() {
        const {data : {title, summary, image}, ready} = this.state;

        console.log(this.state)

        return (
            <View>
            {
              ready ?
              <View>
                <TouchableOpacity onPress={this.onPressVideo}>
                  <ImageBackground source={{uri: image}} style={styles.image}>
                    <Image source={require('../images/play-icon.png')} style={styles.play} />
                  </ImageBackground>
                </TouchableOpacity>
                <Text>{title}</Text>
                <Text>{summary}</Text>
              </View>
              :
              <ActivityIndicator size="large" style={styles.loading}/>
            }
            </View>

        );
    }
}



const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 222,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loading: {
        marginTop: 100,
    },
    play: {
        width: 107,
        height: 107,
    }
});