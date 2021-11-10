import React,{Component} from 'react'
import {View,StyleSheet,Text, Image,Alert, Platform} from 'react-native'
import NavBar from '../../components/navbar/NavBar'
import { DefaultBackgroundColor } from '../../utils/styles'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import CstyleTextInput from '../../components/CstyleInput/CstyleTextInput'
import Swiper from 'react-native-swiper'
import { getScreenWidth } from '../../utils/util'
import Carousel from 'react-native-looped-carousel'
import { CalendarManager } from '../../nativeUtils/native-utils'
import CstyleSwiperBanner from '../../components/CstyleSwiperBanner'
import CstyleBtn from '../../components/btnCom/CstylBtn'
import Toast from '../../components/Toast/Toast'
import {contactUtils,ToastNative} from '../../nativeUtils/native-utils'

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
                <CstyleBtn
                    btnStyle={{width:100,borderRadius:0,marginTop:100}}
                    title={'show'}
                    onPress={async () => {
                        if(Platform.OS == 'ios'){
                            const str = await contactUtils.requestContactAuthorAfterSystemVersion9()
                            if(str == 'true'){
                            contactUtils.addContact("Csty","le","13218023523") 
                            Toast.showLongCenter('添加成功')    
                            }else if(str == 'false'){
                                Toast.showLongCenter('请在iPhone的设置-隐私-通讯录选项中,允许myProject访问你的通讯录')      
                            }
                        }else if(Platform.OS == 'android'){
                            ToastNative.show('hhhhh',1000);
                        }
                    }}
                />
            </View>
        )
    }
}

export default HomeView