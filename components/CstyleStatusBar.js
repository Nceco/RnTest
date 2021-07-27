import React,{Component} from 'react'
import {StatusBar} from 'react-native'


class CstyleStatusBar extends Component{
    render(){
        const {barStyle,isNeedAnimated} = this.props
        return(
            <StatusBar barStyle={barStyle} animated={isNeedAnimated}/>
        )
    }
}

export default CstyleStatusBar