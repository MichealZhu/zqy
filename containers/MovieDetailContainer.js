/*
 * 电影详细页面
 * */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet
} from 'react-native';

import {
    Text,
    Image,
    Navigator,
    View
} from 'react-native';

export default class MovieDetailContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text>
                        {this.props.name}
                    </Text>
                </View>
                <View style={styles.menu}>
                    <View>
                        <Text
                            onPress={()=>this.props.navigator.pop()}
                        >
                            返回
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#bdb76b'
    },
    header:{
        height:30,
        backgroundColor:'lightblue',
        justifyContent:'center',
        alignItems:'center'
    },
    menu:{
        height:30,
        backgroundColor:'orange',
        flexDirection:'row'
    }
});