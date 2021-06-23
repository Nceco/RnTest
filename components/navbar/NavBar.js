import React,{Component} from 'react'
import {StyleSheet,View,Text} from 'react-native'
import { iosTop } from '../../utils/ios'
import WhenRender from '../WhenRender'
import _ from 'lodash'

import {getScreenWidth} from '../../utils/util'
import { getThemColor } from '../../utils/styles'

const styles = StyleSheet.create({
    container:{
        backgroundColor:getThemColor(),
        height:44 + iosTop,
        width:getScreenWidth(),
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:iosTop,
        paddingHorizontal:10
    },
    textStyle:{
        color:'white',
        fontSize:17
    },
    midViewStyle:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
})

const RenderText = WhenRender(Text)

class NavBar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { 
            navStyle, 
            titleStyle, 
            midElStyle,
            title,
            leftEl,
            rightEl,
            midEl
        } = this.props
        return (
            <View style={[styles.container,navStyle]}>
                {leftEl ? leftEl : null}
                <View style={[styles.midViewStyle,midElStyle]}>
                    <RenderText whenRender={!_.isEmpty(title)} style={[styles.textStyle,titleStyle]}>{title}</RenderText>
                    {midEl ? midEl : null}
                </View>
                {rightEl ? rightEl : null}
            </View>
        )
    }
}

export default NavBar