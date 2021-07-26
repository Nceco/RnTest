import React,{Component} from 'react'
import {ImageBackground,StyleSheet} from 'react-native'
import { getScreenWidth } from '../utils/util'

const styles = StyleSheet.create({
    imageBackgroundStyle:{
       width:getScreenWidth(),
       height:240
    }
})

class CstyleImageBackground extends Component{
    constructor(props){
        super(props)
        this.state = {
            defaultUrl:'https://zh-hans.reactjs.org/logo-og.png',
            defaultMode:'contain'
        }
    }
    render(){
        const {propsStyle,sourceUrl,modeParams} = this.props
        const {defaultUrl,defaultMode} = this.state
        return (
            <ImageBackground style={[styles.imageBackgroundStyle,propsStyle]} source={{uri:sourceUrl || defaultUrl}} resizeMode={modeParams || defaultMode}>
               {
                   React.Children.map(this.props.children,child => child)
               }
            </ImageBackground>
        )
    }
}

export default CstyleImageBackground