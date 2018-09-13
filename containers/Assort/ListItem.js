/*
* @Author: Administrator
* @Date:   2018-08-30 20:59:06
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-13 15:02:17
*/
import React, {PureComponent} from 'react'
import {
	View, 
	Text,
	StyleSheet, 
	TouchableOpacity,
	Dimensions,
	Image,
	ScrollView
} from 'react-native'

const {width,height}=Dimensions.get('window');


class ListItem extends PureComponent<Props> {

    render() {

	    	let {infos} = this.props

	  		console.log(infos,1111)

        return (

	        	<View style={{justifyContent: 'flex-start',flexDirection:'row',flexWrap:'wrap',}}>

		        	{

		        		infos.map((info,i) => (

		        			<View key={i} style={{alignItems: 'center',marginBottom:15}}>

			        			<Image source={{uri:info.imageUrl}} style={styles.materail}/>

			        			<Text>{info.title}</Text>

		        			</View>

		        			))

		        	}

	        	</View>



        

        ) 
    }

}


const styles = StyleSheet.create({

    materail: {
    	width: width/3 - width/3*0.3,
    	height: width/3 -width/3*0.3,
    	marginLeft: width/3*0.15,	
    	marginRight: width/3*0.15,
    },

})


export default ListItem
