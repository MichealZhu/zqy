/**
 * Created by colinambitious on 2017/9/7.
 */
/**
 * Created by tdzl2003 on 12/17/16.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    AppRegistry,
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    TextInput
} from 'react-native';

const {width, height} = Dimensions.get('window');

const thirdWidth = width;

const imageWidth = thirdWidth / 3 - 10 * 2;
const imageHeight = imageWidth * 0.7 ;

export default class SearchItem extends Component {


    constructor(props) {
        super(props);
        this.state={
          mesData: false,
        }
    }

    tes = () => {
      const {onPresss} = this.props;
      onPresss()
    }


    render() {
       
       

        return (
            <TouchableOpacity style={styles.root} onPress={this.tes}> 

              <Text style={styles.title} numberOfLines={1}>123</Text>

              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => console.log(this.props.onPresss)}
              />

            </TouchableOpacity>
        );
    }
}

const renderStars = (stars) => {
    const total = 5;
    let full, half, empty;
    full = stars[0];
    if (stars[1] === '5') {
        full++;
        half = 0;
        empty = total - full;
    } else {
        half = 1;
        empty = total - full - half;
    }
    const results = [];
    let i;
    for (i = 0; i < full; i++) {
        results.push(
            <Image
                key={i}
                style={styles.stars}
                source={require("../images/star-full.png")}
            />);
    }
    if (half) {
        results.push(
            <Image
                key={i}
                style={styles.stars}
                source={require("../images/star-half.png")}
            />);
        i++;
    }
    for (let j = 0; j < empty; j++) {
        results.push(
            <Image
                key={i+j}
                style={styles.stars}
                source={require("../images/star-empty.png")}
            />);
    }
    return (
        <View style={styles.starsWrapper}>
            {results}
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: imageWidth,
        marginRight: 15,
        marginTop: 10,
    },
    image: {
        height: imageHeight,
        width: imageWidth,
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    starsWrapper: {
        flexDirection: 'row',
    },
    stars: {
        width: 10,
        height: 10
    }
});