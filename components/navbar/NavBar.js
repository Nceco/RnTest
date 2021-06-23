import React,{Component} from 'react'
import {StyleSheet,View,Text} from 'react-native'

import {getScreenWidth} from '../../utils/util'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'yellow',
        height:44 + 47,
        width:getScreenWidth(),
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:47
    }
})

class NavBar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { navStyle , titleStyle , title } = this.props
        return (
            <View style={[styles.container,navStyle]}>
                <Text style={titleStyle}>{title ? 'hhh':'react-native'}</Text>
            </View>
        )
    }
}

export default NavBar