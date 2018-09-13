/*
* @Author: Administrator
* @Date:   2018-03-02 11:51:01
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-13 13:52:56
*/
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform, 
    PermissionsAndroid,
    ScrollView,
    Dimensions,
    TouchableHighlight
} from 'react-native';


import { Button, WingBlank, WhiteSpace } from 'antd-mobile';

import Icon from 'react-native-vector-icons/Ionicons';

import Swiper from 'react-native-swiper';

import { color, DetailCell, NavigationItem, SpacingView } from '../widget'

import ProductView from '../components/Product/ProductView'

import SecurityView from '../components/Security/SecurityView'

import {Heading2, Heading3, Paragraph} from '../widget/Text'


const {height,width} =Dimensions.get('window');

export default class Home extends Component {

	//构造函数
	constructor(props) {
		super(props);
		this.state = {
			swiperShow:false,
			swiperFactoryShow:false,
			types:[],
			factoryTypes:[],
		  mesBottom: true,
		  Fastentry:[ ],
		  security:[]
		};
	
	}

	componentDidMount () {

		setTimeout(()=>{
			this.setState({
				swiperShow:true,
			});
		},0)	

		setTimeout(()=>{
			this.setState({
				swiperFactoryShow:true,
			});
		},0)

		this.requestFirstPage()
		this.requestProductViewPage()
		this.requestFactorytViewPage()
		this.requestsecurityViewPage()

	}

	// 请求首页数据

	requestFirstPage = async () => {

		let dataList =  await this.requestData()

		console.log(dataList,'datalisttttttttttttttt')

		this.setState({
			Fastentry: dataList,
		})
	}


	requestProductViewPage = async () => {

		let dataList =  await this.requestProductViewData()

		console.log(dataList,'datalisttttttttttttttt')

		this.setState({
			types: dataList,
		})

	}

	requestFactorytViewPage = async () => {

		let dataList =  await this.requestFactorytViewData()

		console.log(dataList,'datalisttttttttttttttt')

		this.setState({
			factoryTypes: dataList,
		})

	}	

	requestsecurityViewPage = async () => {

		let dataList =  await this.requestsecurityViewData()

		console.log(dataList,'datalisttttttttttttttt')

		this.setState({
			security: dataList,
		})

	}


	requestData = async () => {

		let params = {"page":1,"size":5,"state":0};

		let url = 'http://10.10.10.109:9119/homeFunction/findByState';

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

		let dataList = response.map((info) => {

			return {
				id: info.id,
				content1: info.content1,
				content2: info.content2,
				title: info.title,
			}

		})

		return  dataList

  }


  requestProductViewData = async () => {

		let params = {"page":1,"size":10,"state":0};

		let url = 'http://10.10.10.109:9119/homeProduct/findPage';

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
				title: info.title,
			}

		})

		return  dataList

  }

   requestFactorytViewData = async () => {

		let params = {"page":1,"size":10,"state":0};

		let url = 'http://10.10.10.109:9119/homeTechnology/findPage';

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
				title: info.title,
			}

		})

		return  dataList

  }

   requestsecurityViewData = async () => {

		let params = {"page":1,"size":10,"state":0};

		let url = 'http://10.10.10.109:9119/homeGuarantee/findPage';

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
				title: info.title,
				number:info.number
			}

		})

		return  dataList

  }


	// 回到顶部
	
	getPrevious(){
		console.log(11111)
 		//这里是控制页面的初始位置的方法,相当于html中利用id的锚点连接方法,totop相当于类名,组件的ref相当于锚点id,refs指同一类方法.
 		this.refs.totop.scrollTo({x:0,y: 0,animated:true});
 		//需要三个参数,x轴的起始点,y轴的起始点.anmated是指是否有动画效果
	}

	// 滑到底部
	_contentViewScroll(e: Object){

    var offsetY = e.nativeEvent.contentOffset.y; //滑动距离
    var contentSizeHeight = e.nativeEvent.contentSize.height; //scrollView contentSize高度
    var oriageScrollHeight = e.nativeEvent.layoutMeasurement.height; //scrollView高度
    console.log(offsetY,oriageScrollHeight,contentSizeHeight)
    if (offsetY + oriageScrollHeight >= contentSizeHeight-200){
    	console.log('上传滑动到底部事件')
    }
  }

  // 底部
   rendermesBottom () {
   	if(this.state.mesBottom) {
   		return (

   			<View style={styles.mesBottom}>
   				<TouchableOpacity onPress={() =>
   			 {this.getPrevious()}}> 

                  <View style={styles.bottomType}>

                  <Text>回到顶部</Text>

                  </View>
                  </TouchableOpacity>

                  <TouchableOpacity onClick={() => {
                    this.getPrevious()//点击调用的方法
                  }}>  

                  <View style={styles.bottomType}>
                  <Text>在线客服</Text>
                  </View>

                  </TouchableOpacity>         

                  <TouchableOpacity onClick={() => {
                    this.getPrevious()//点击调用的方法
                  }}>  

                  <View style={styles.bottomType}>
                  <Text>分享</Text>
                  </View>

                  </TouchableOpacity>
   			

          </View>
   			)
   	}
   }

   // 轮播图
	renderSwiper () {

		if(this.state.swiperShow) {
			return(

				<View style={styles.container}>

					<Swiper
						style={styles.wrapper}
						height={150}
						horizontal={true}
						autoplay={true} 
						paginationStyle={{bottom: 10}}
						showsButtons={false}>
						<Image source={require('../images/banner/1.png')} style={styles.img}/>
						<Image source={require('../images/banner/2.png')} style={styles.img}/>
						<Image source={require('../images/banner/1.png')} style={styles.img}/>
					</Swiper>

				</View>

				)
		}

	}
	// 工厂轮播信息
	renderFactorySwiper () {

		if(this.state.swiperFactoryShow) {

			return(

				<View style={styles.container}>

					<Swiper
						style={styles.wrapper}
						height={250}
						horizontal={true}
						renderPagination={this.renderPagination}
						autoplay={false} 
						paginationStyle={{bottom: 10}}
						showsButtons={false}>

						<View style={styles.slide}>

							<Image source={require('../images/banner/1.png')} style={styles.img}/>
							<Text numberOfLines={1}>AAAAAAAAAAAAAAAAAAAAAAAAA</Text>
							
						</View>

						<View style={styles.slide} >

							<Image source={require('../images/banner/2.png')} style={styles.img}/>
							<Text numberOfLines={1}>BBBBBBBBBBBBBBBBBBBBBBBBB</Text>

						</View>


						<View style={styles.slide }>

							<Image source={require('../images/banner/1.png')} style={styles.img}/>
							<Text numberOfLines={1}>CCCCCCCCCCCCCCCCCCCCCCCCCC</Text>

						</View>


						
					</Swiper>

				</View>

				)
		}

	}

	// 工厂轮播对应信息
	// renderPagination = (index, total, context) => {
	// 	console.log(context)
	// 	return (
	// 		<View style={styles.paginationStyle}>
	// 			<Text style={{ color: 'grey' }}>
	// 				<Text style={styles.paginationText}>{index + 1}</Text>
	// 			</Text>
	// 		</View>
	// 		)
	// }
	// 
	
	renderFastentryView () {

		return (

			this.state.Fastentry.map(

				(info,i) => (

					<View key = {i} style={styles.factory}>

						<Text>{info.title}</Text>
						<Text>{info.content1}</Text>
						<Text>{info.content2}</Text>

					</View>

					)
				)

      )
		
	}

	renderProductView () {

		return (
        <ProductView
        	titles={this.state.types}
        />
      )

	}

	renderFactorytView () {

		return (
        <ProductView
        	titles={this.state.factoryTypes}
        />
      )

	}

	renderSecurityView () {

		return (

			this.state.security.map(

				(info,i) => (

					<View key = {i} style={styles.security}>

						<Text>{info.number}</Text>
						<Text style={styles.securityText}>{info.title}</Text>

					</View>

				)

			)

			)

}

    render() {

        return (
        	
       		<View style={styles.container}>

	       		<View style={{height:height*0.08,backgroundColor:'#56688A'}}>

		       		<View style={{flex:1,flexDirection:'row'}}>

		       			<View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

		       			<Text style={styles.colorWhite}>鼎力智造</Text>

		       			</View>

		       		<View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>

		       			<Icon onPress={() =>  this.props.navigation.navigate('DrawerOpen')} name="md-menu" color="#FAFAFA" size={30} style={{paddingRight:5}}></Icon>

		       		</View>

		       	</View>

	       		</View>
	       		<ScrollView 
	       		onScrollEndDrag = {this._contentViewScroll}
	       		ref='totop'>
	       			{this.renderSwiper()}
	       			<SpacingView></SpacingView>
	       			<Text>在 线 加 工 入 口 Fast entry</Text>
	       			<SpacingView></SpacingView>

	       			<View style={{flex:1,flexDirection:'row', flexWrap: 'wrap',}}>

	       					{this.renderFastentryView()}

	       			</View>


	       			<View style={{height:50,flex:1,flexDirection:'row',backgroundColor:'#0f4e84',justifyContent:'center',alignItems:'center'}}>
	       				<Text style={{color:"#FFFFFF"}}>马上开启你的云制造之旅</Text>	       				
	       			</View>

	       			<SpacingView></SpacingView>
	       			<Text>服 务 内 容 Service Content</Text>

	       			<View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
	       				<Text>产品</Text>	       				
	       			</View>	

	       			{this.renderProductView()}

	       			<View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
	       				<Text>工艺</Text>	       				
	       			</View>	
	       			{this.renderFactorytView()}


	       			<SpacingView></SpacingView>
	       			<Text>为 您 保 障 For your security</Text>

	       			<View style={{flex:1,flexDirection:'row', flexWrap: 'wrap',}}>

	       				{this.renderSecurityView()}

	       			</View>
	       			

	       		

	       			<SpacingView></SpacingView>
	       			<Text>典 型 客 户 Typical customers</Text>

	       			<View style={{flex:1,flexDirection:'row',marginBottom:5}}>

	       				<Image source={require('../images/banner/1.png')} style={styles.customer}/>
	       				<Image source={require('../images/banner/1.png')} style={styles.customer}/>
	       				<Image source={require('../images/banner/1.png')} style={styles.customer}/>
	       				<Image source={require('../images/banner/1.png')} style={styles.customer}/>

	       			</View>

	       			<View style={{flex:1,flexDirection:'row',marginBottom:5}}>

	       				<Image source={require('../images/banner/1.png')} style={styles.customer}/>
	       				<Image source={require('../images/banner/1.png')} style={styles.customer}/>
	       				<Image source={require('../images/banner/1.png')} style={styles.customer}/>
	       				<Image source={require('../images/banner/1.png')} style={styles.customer}/>

	       			</View>

	       			<View style={{flex:1,flexDirection:'row',marginBottom:5}}>

	       				<Image source={require('../images/banner/1.png')} style={styles.customer}/>
	       				<Image source={require('../images/banner/1.png')} style={styles.customer}/>
	       				<Image source={require('../images/banner/1.png')} style={styles.customer}/>
	       				<Image source={require('../images/banner/1.png')} style={styles.customer}/>

	       			</View>

	       			<View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
	       				<Text>点击查看全部客户</Text>	       				
	       			</View>	

	       			<SpacingView></SpacingView>
	       			<Text>精 选 晒 单 Select bask in single</Text>

	       			<View style={styles.header}>

	       			  <Image style={styles.avatar} source={require('../images/avatar.png')} />

	       					<View>

			       				<View style={{flexDirection: 'row', alignItems: 'center',}}>
				       				<Heading2>Could Lina</Heading2>
				       				<Text >08-17-2018</Text>
				       			</View>

			       				<Paragraph style={{color: 'white', marginTop: 4}}> 
			       					内容评价手板加工的整个流程中，在选择合适加工方法(CNC加工或者3D打印)加工完成后，大多数手板都是需要进行表面处理的。
			       				</Paragraph>

			       				<View style={{flex:1,flexDirection:'row',marginBottom:5}}>

				       				<Image source={require('../images/banner/1.png')} style={styles.user}/>
				       				<Image source={require('../images/banner/1.png')} style={styles.user}/>
				       				<Image source={require('../images/banner/1.png')} style={styles.user}/>

			       				</View>

	       					</View>

	       			</View>

	       			<View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
	       				<Text>更多精选菜单 >> </Text>	       				
	       			</View>	

	       			<SpacingView></SpacingView>
	       			<Text>案 例 实 例 Case instance</Text>

	       			<View style={{flex:1,flexDirection:'row'}}>

	       				<View style={styles.instance}>

	       					<Text>机加工</Text>
	       					<Text>CNC加工自动报价</Text>
	       					<Text>1小时内上机生产</Text>

	       				</View>

	       				<View style={styles.instance}>
	       					<Text>机加工</Text>
	       					<Text>CNC加工自动报价</Text>
	       					<Text>1小时内上机生产</Text>
	       				</View>

	       			</View>

	       			<View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
	       				<Text>更多案例 >> </Text>	       				
	       			</View>	 

	       			<SpacingView></SpacingView>

	       			<Text>全 国 实 体 制 造 车 间 National physical production</Text>

	       			{this.renderFactorySwiper()}
	       			<SpacingView></SpacingView>

	       			

	       			<View style={styles.idmMes} >

	       					<Text>机加工 | 云工厂</Text>
	       					<Text>全球领先的在线制造服务商</Text>
	       					<Text>400-852-8980</Text>
	       					<Text>ICP备案</Text>

	       					{this.rendermesBottom()}

	       			</View>
   			
	       			

	       		</ScrollView>
        			
        	
        	</View>


        );
    }

}

const styles = StyleSheet.create({

	container: {
		flex: 1,
	},
	f1: {
		flex: 1,
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
	securityText: {
		fontSize: 12,
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
	progressText: {
		paddingTop: 10,
		paddingLeft:20,
		fontSize:15,
		color: "red"
	},
	colorWhite: {
		color: "#FAFAFA"
	},
	wrapper: {
	},
	slide1: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#9DD6EB',
	},
	slide2: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#97CAE5',
	},
	slide3: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#92BBD9',
	},
	text: {
		color: '#fff',
		fontSize: 30,
		fontWeight: 'bold',
	},
	img: {
		width: width,
		height: 150,
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
	instance: {
		borderWidth: 1,  
    borderColor: '#ffffff',
		width: width/2 - 20,
		height: 150,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 12,
	},
	mesBottom: {
		width: width/6,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		bottom: 15,
		right:5,
	},
	bottomType: {
		height: 50,
		width: width/6,
		backgroundColor: '#003B71',
		marginBottom:5,

	},
	idmMes: {
		flex:1,
		borderColor: '#F5F5F5',
		width: width,
		height: 200,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 12,
		position:'relative',
	},
	security: {
		width: width/3 - 15,
		height: 70,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 12,
	},
		customer: {
		width: width/4 - 10,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 12,
	},
		user: {
		width: width/3 - 45,
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 12,
	},
	header: {
		padding:5,
		flexDirection: 'row',
		alignItems: 'center',
	},
	avatar: {
		width: 50,
		height: 50,
		marginRight: 10,
		borderRadius: 25,
		borderWidth: 2,
		borderColor: '#51D3C6'
	},
	slide: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'transparent'
	},

});