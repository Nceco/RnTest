import React, { Component } from 'react'
import {Image, TouchableOpacity, View,StyleSheet} from 'react-native'
import { getScreenWidth } from '../utils/util'
import SwiperBanner from './banner/banner'
import _ from 'lodash'

const styles = StyleSheet.create({
    container:{
        width:getScreenWidth() - 30,
        height:100,
        borderRadius:6,
        overflow:'hidden'
    },
    bannerStyle:{
        width:getScreenWidth() - 30,
        height:110
    },
    bulletStyle:{
        backgroundColor:'rgba(0,0,0,.2)',
        width: 11,
        height: 4,
        borderRadius: 2,
        borderWidth:0,
        marginRight:-3
    },
    chosenBulletStyle:{
        backgroundColor:'#FFFFFF',
        width: 11,
        height: 4,
        borderRadius: 2,
        marginRight:-3
    },
    bulletsContainerStyle:{
      bottom:5
    },
    bannerTouchStyle:{
        width:getScreenWidth() - 30,
        height:110
    },
    bannerImageStyle:{
        width:getScreenWidth() - 30,
        height:110
    }
})

const color=['blue','gray','green']


class CstyleSwiperBanner extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {
            imgList,
            container,
            autoplay = true,
            bullets = true,
            delay = 4000,
            swiperBannerStyle,
            bulletStyle,
            chosenBulletStyle,
            bulletsContainerStyle,
            bannerTouchStyle,
            bannerImageStyle
        } = this.props
        return(
            <View style={[styles.container,container]}>
                {
                    _.isArray(imgList) && !_.isEmpty(imgList) ? 
                        <SwiperBanner
                        autoplay={autoplay}
                        bullets={bullets}
                        delay={delay}
                        style={[styles.bannerStyle,swiperBannerStyle]}
                        bulletStyle={[styles.bulletStyle,bulletStyle]}
                        chosenBulletStyle={[styles.chosenBulletStyle,chosenBulletStyle]}
                        bulletsContainerStyle={[styles.bulletsContainerStyle,bulletsContainerStyle]}
                    >
                        {
                            (imgList || []).map((item,index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        activeOpacity={1}
                                        onPress={() => {
                                            console.log(index)
                                        }}
                                        style={[styles.bannerTouchStyle,bannerTouchStyle]}
                                    >
                                        {/* <Image source={item.value} resizeMode={'stretch'} style={[styles.bannerImageStyle,bannerImageStyle]}/> */}
                                        <View style={{width:getScreenWidth() - 30,height:110,backgroundColor:color[index]}}/>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </SwiperBanner>:null
                }
            </View>
        )
    }
}

export default CstyleSwiperBanner