import React,{Component} from 'react'
import {View,StyleSheet,Text, Image,Alert} from 'react-native'
import NavBar from '../../components/navbar/NavBar'
import { DefaultBackgroundColor } from '../../utils/styles'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import CstyleTextInput from '../../components/CstyleInput/CstyleTextInput'
import Swiper from 'react-native-swiper'
import { getScreenWidth } from '../../utils/util'
import Carousel from 'react-native-looped-carousel'
import { CalendarManager } from '../../nativeUtils/native-utils'
import CstyleSwiperBanner from '../../components/CstyleSwiperBanner'

const imgList = [
    {
        name:'img1',
        value:require('../resource/images/cx_01.jpg')
    },
    {
        name:'img2',
        value:require('../resource/images/cx_02.jpg')
    },
    {
        name:'img3',
        value:require('../resource/images/cx_03.jpg')
    }
]

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:DefaultBackgroundColor,
        alignItems:'center'
    },
    activityIndictorStyle:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        paddingTop:20
    }
})

class HomeView extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputVal:'',
            inputValLast:'NULL'
        }
        this.input
    }

    componentDidMount(){
        
    }

    render(){
        const {inputValLast} = this.state
        return (
            <View style={styles.container}>
                <NavBar
                    title={'首页'}
                /> 
                {/* 轮播图 */}
                <CstyleSwiperBanner
                    imgList={imgList}
                    delay={2000}
                />
            </View>
        )
    }
}

export default HomeView