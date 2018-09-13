import React, {Component} from 'react';
import {
    StyleSheet,
    Alert
} from 'react-native';

import {
    Text,
    Image,
    View,
    ScrollView,
    RefreshControl
} from 'react-native';


export default class Component1 extends Component {

    constructor(props) {
        super(props);
        this.state={
            isRefreshing: false
        }

    }

    onRefresh = ()=> {
        this.setState({isRefreshing: true});
        // Alert.alert('下拉刷新被处罚了')

        const _this=this
        setTimeout(function () {
            _this.setState({isRefreshing: false});
        },3000)
    }


    render() {
        return (
            <View>
                <ScrollView horizontal={false}
                            style={{height: 2000, backgroundColor: 'orange'}}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.isRefreshing}
                                    onRefresh={this.onRefresh}
                                    tintColor="#ff0000"
                                    title="Loading..."
                                    titleColor="#00ff00"
                                    colors={['#ff0000', '#00ff00', '#0000ff']}
                                    progressBackgroundColor="#ffff00"
                                />
                            }
                >
                    <Image source={require('../images/1.jpeg')} style={{height: 200, width: 200}}/>
                    <Text>这是组件1</Text>
                    <Image source={require('../images/1.jpeg')} style={{height: 200, width: 200}}/>
                    <Text>这是组件1</Text>
                    <Image source={require('../images/1.jpeg')} style={{height: 200, width: 200}}/>
                    <Text>这是组件1</Text>
                    <Image source={require('../images/1.jpeg')} style={{height: 200, width: 200}}/>
                    <Text>这是组件1</Text>
                    <Image source={require('../images/1.jpeg')} style={{height: 200, width: 200}}/>
                    <Text>这是组件1</Text>
                    <Image source={require('../images/1.jpeg')} style={{height: 200, width: 200}}/>
                    <Text>这是组件1</Text>
                    <Image source={require('../images/1.jpeg')} style={{height: 200, width: 200}}/>
                    <Text>这是组件1</Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({});

