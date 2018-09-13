import React, {PureComponent} from 'react'
import {View, Text, StyleSheet, TouchableOpacity,Image,Dimensions} from 'react-native'
import {Heading2, Heading3, Paragraph,Paragraphs} from '../../widget/Text'
import {screen, system} from '../../common'
import {color} from '../../widget'

type Props = {
    titles: Array<string>,
    selectedIndex: number,
    onSelected: Function,
}

const {width,height}=Dimensions.get('window');

class ProductTypeView extends PureComponent<Props> {

  constructor(props) {
    super(props);
    this.state={
      foundIndex: '',
      data:  [
      ]
    }
  }


    static defaultProps = {
        onSelected: () => {}
    }


    renderCell = () => {


      return  (

       this.props.infos.map(

        (info,i) => (

          console.log(i,'ceshi2'),

          <View  key={i} style={{flex:1,marginBottom:5}}>


            <View style={{flexDirection:'row',justifyContent:'space-between',padding:10}}>
              <Text>{info.title}</Text>
              <Text>{info.time}</Text>
            </View>

            <Text>{info.mes}</Text>

          </View>

          )
        )
       
       )
   
      
      }
    

    render() {
      
        let {infos} = this.props
        let {selectedTitle} = this.props
        let titles = this.props.titles

        return (
          <View style={styles.container}>

            <View style = {styles.wrap}>
            {titles.map((title, i) => (
              console.log(i,this),
              <TouchableOpacity
              key={i}
              style={[{backgroundColor: this.props.selectedIndex == i ? '#FE566D' : 'white'}, styles.item]}
              onPress={() => this.props.onSelected(i,title)}>
              <Paragraphs style={{color: this.props.selectedIndex == i ? 'white' : '#555555'}}>
                {title.title}
              </Paragraphs>
              </TouchableOpacity>

              ))
            }
            </View>


            <View>  

              {
                this.renderCell()
              }

            </View>
          
          </View>
        ) 
    }
}


const styles = StyleSheet.create({

    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    wrap: {
     flexDirection: 'row',
     flexWrap: 'wrap',
    },
    item: {
      width: screen.width / 5 - 10,
      marginLeft: 8,
      marginTop: 5,
      marginBottom: 5,
      height: 25,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      borderWidth: screen.onePixel,
      borderColor: color.border,
    },
    factoryCu: {
      width: width/2 - 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 12,
    },
    orderImage: {
    marginLeft: 12,
    width: width/2 - 20,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 6,
  },
})


export default ProductTypeView
