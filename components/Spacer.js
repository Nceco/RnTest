import React,{Component} from 'react'
import {View,StyleSheet} from 'react-native'
import {getScreenWidth} from '../utils/util'

const styles = StyleSheet.create({
    defaultStyle:{
        width:getScreenWidth(),
        height:10,
        backgroundColor:'#FFFFFF'
    }
})

class Spacer extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {SpacerStyle} = this.props
        return (
            <View style={[styles.defaultStyle,SpacerStyle]}/>
        )
    }
}

export default Spacer