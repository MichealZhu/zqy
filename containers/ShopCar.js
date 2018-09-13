/*
* @Author: Administrator
* @Date:   2018-03-02 11:51:01
* @Last Modified by:   Administrator
* @Last Modified time: 2018-08-28 21:35:27
*/
import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  Button,
} from 'react-native'
import Swiper from 'react-native-swiper'

const {width,height}=Dimensions.get('window')

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: 'grey' }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  )
}


export default class ShopCar extends Component {


    toDz = () => {

    }

    render() {

        return (

          <View style={styles.container}>

            <View style={{height:height*0.08,backgroundColor:'#56688A',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

              <Text style={styles.colorWhite}>购物车</Text>

            </View>

            <View style={styles.shopCarContanier}>

              <Image source={require('../images/banner/1.png')} style={styles.shopCar}/>
              <Text>购物车还没有商品</Text>
              <View style={styles.dz}>
                <Button 
                onPress={this.toDz}
                title="马上定制"
                />
              </View>
             
            </View>

          </View>
        
      )

    }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  shopCarContanier: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shopCar: {
    width:200,
    height:200,
  },
  dz: {
    marginTop:50,
  }

});