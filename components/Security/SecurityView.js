/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan  
 * @flow
 */
import React, {PureComponent} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Heading2, Heading3, Paragraph} from '../../widget/Text'
import {screen, system} from '../../common'
import {color} from '../../widget'

// type Props = {
//     titles: object,
//     selectedIndex: number,
//     onSelected: Function,
// }


class ProductView extends PureComponent<Props> {

    static defaultProps = {
      onSelected: () => {}
    }

    render() {

        return (
          <View style={styles.container}>

            {this.props.titles.map((title, i) => (
              <View
              key={i}
              style={[{backgroundColor: this.props.selectedIndex == i ? '#FE566D' : 'white'}, styles.item]}
              onPress={() => this.props.onSelected(i)}>

                <Text> {title.num}</Text>
                 
             
              </View>
              ))}
          
          </View>
        ) 
    }
}


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    item: {
      width: screen.width / 3 - 10,
      marginLeft: 8,
      marginTop: 5,
      marginBottom: 5,
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      borderWidth: screen.onePixel,
      borderColor: color.border,
    },
})


export default ProductView
