
import React, {PureComponent} from 'react'
import {View, Text, StyleSheet, TouchableOpacity,Dimensions,Image} from 'react-native'
import {Heading2, Heading3, Paragraph} from '../../widget/Text'
import {screen, system} from '../../common'
import {color} from '../../widget'
import ProductTypeView from './ProductTypeView'

const {width,height}=Dimensions.get('window');

type Props = {
  titles: Array<string>,
  selectedIndex: number,
  onSelected: Function,
}


class ProductFoundView extends PureComponent<Props> {


  constructor(props) {
    super(props);
    this.state={
      foundIndex: '',
      typeIndex: '',
      refreshing: false,
      childState: '',
      infos: [ ]
    }
  }


  componentDidMount() {
    // this.requestFirstPage()    
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.materialtypes.length,'进入了prrrrrrooooppps')
    if(nextProps.materialtypes.length != 0) {
      console.log('进入了props')
      this.requestFirstPage(nextProps.materialtypes[0])
    }

  }

  requestFirstPage = async (title) => {

    let dataList =  await this.requestData(title)

    console.log(dataList,'foundData')

    this.setState({
      infos: dataList,
    })
    
  }

  requestData = async (title) => {

    console.log(title.findOneId,title.id,title,'iiiiiiiiiiiddddddddddddd')

    let params

    if( title.title == '全部' ) {
      
      params = {"page":1,"size":5,"state":0,"findOneId":title.findOneId}

    } else {

      params = {"page":1,"size":5,"state":0,"findOneId":title.findOneId,"findTwoId":title.id}

    }


    let url = 'http://10.10.10.109:9119/findThree/findPage'

    let response = await fetch(url,{

      method: 'POST',
      body:JSON.stringify(params),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },

    }).then((res) => {

      if( res.ok === true ) {

        return res.json()

      }

    }).catch((error) => {

      console.log(error)

    })

    let dataList = response.content.map((info) => {

      return {
        id: info.id,
        imageUrl: info.pictureUrl,
        title: info.title,
        mes:info.describe
      }

    })

    return  dataList

  }

  static defaultProps = {

    onSelected: () => {}

  }


    renderMaterialView () {

      console.log(this.props.materialtypes,'看下变了没子')

      return (

        <ProductTypeView
          titles = {this.props.materialtypes}
          selectedIndex={this.state.typeIndex}
          selectedTitle={this.props.selectedTitle}
          infos = {this.state.infos}

          onSelected = {(index,title) => {

            console.log(title,'ttttttttttttttttt')

            if (index != this.state.typeIndex) {

              this.setState({typeIndex: index})

              this.requestFirstPage(title) 
            }

          }}
        />

      )

    }

    render() {

      let titlesArr = this.props.titles.map((info) => {

        return info.title

      })

        return (
          <View style={styles.container}>

            <View style= {styles.wrap}>

              {titlesArr.map((title, i) => (
                console.log(i,this),
                <TouchableOpacity
                key={i}
                style={[{backgroundColor: this.props.selectedIndex == i ? '#FE566D' : 'white'}, styles.item]}
                onPress={() => this.props.onSelected(i,title)}>
                <Paragraph style={{color: this.props.selectedIndex == i ? 'white' : '#555555'}}>
                {title}
                </Paragraph>
                </TouchableOpacity>

                ))
              }

            </View>

            {this.renderMaterialView()}


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
      width: screen.width / 4 - 10,
      marginLeft: 8,
      marginTop: 5,
      marginBottom: 5,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      borderWidth: screen.onePixel,
      borderColor: color.border,
    },
    button:{
      height:50,
    },
    content:{
      width:width,
      height:height,
      backgroundColor:'yellow',
      justifyContent:'center',
      alignItems:'center'
    },
    cell:{
      height:100,
      backgroundColor:'purple',
      alignItems:'center',
      justifyContent:'center',
      borderBottomColor:'#ececec',
      borderBottomWidth:1
    },
    txt: {
      textAlign: 'center',
      textAlignVertical: 'center',
      color: 'white',
      fontSize: 30,
    },
    row: {
      marginLeft: 15
    },
    colorWhite: {
      color: "#FAFAFA"
    },
    materialImage: {
      width: width - 10,
      height: 150,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 6,
    },
    orderImage: {
      width: width/2 - 20,
      height: 150,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 6,
    },
    factory: {
      borderWidth: 1,  
      borderColor: '#ffffff',
      width: width/2 - 20,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 12,
    },
    factoryCu: {
      borderWidth: 1,  
      borderColor: '#ffffff',
      width: width/2 - 20,
      height: 250,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 12,
    }
})


export default ProductFoundView
