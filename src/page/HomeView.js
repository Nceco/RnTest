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

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:DefaultBackgroundColor
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
                <View style={{height:110,width:getScreenWidth() - 30,marginLeft:15,borderRadius:10,overflow:'hidden'}}>
                {/* <Carousel
                    delay={2000}
                    style={{with:100,height:110}}
                    autoplay
                    bullets
                    bulletStyle={{
                        backgroundColor:'rgba(0,0,0,.2)',
        width: 11,
        height: 4,
        borderRadius: 2,
        borderColor:'rgba(0,0,0,.2)'
        // marginLeft: 3,
        // marginRight: 3,
        // marginTop: 3,
        // marginBottom: 3
                    }}
                    chosenBulletStyle={{
                        backgroundColor:'#FFFFFF',
        width: 11,
        height: 4,
        borderRadius: 2,
        // marginLeft: 3,
        // marginRight: 3,
        // marginTop: 3,
        // marginBottom: 3
                    }}
                    bulletsContainerStyle={{
                        bottom:0
                    }}
                    // pageInfo
                    // onAnimateNextPage={(p) => console.log(p)}
                >
                    <View style={{ backgroundColor: '#BADA55' ,width:getScreenWidth() - 30,height:110}}><Text>1</Text></View>
                    <View style={{ backgroundColor: 'red' ,width:getScreenWidth() - 30,height:110}}><Text>2</Text></View>
                    <View style={{ backgroundColor: 'blue' ,width:getScreenWidth() - 30,height:110}}><Text>3</Text></View>
                </Carousel> */}
                </View>
                {/* <KeyboardAwareScrollView 
                    keyboardShouldPersistTaps={'handled'}
                    contentContainerStyle={{
                        backgroundColor:'#FFFFFF',
                        flex:1,
                        paddingHorizontal:10
                    }}
                >
                </KeyboardAwareScrollView> */}
            </View>
        )
    }
}

export default HomeView