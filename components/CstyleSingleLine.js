import React,{Component} from 'react'
import {View,StyleSheet, TouchableOpacity, Image,Text} from 'react-native'
import { getScreenWidth } from '../utils/util'

const styles = StyleSheet.create({
    container:{
         width:getScreenWidth(),
         backgroundColor:'#FFFFFF',
         height:50,
         flexDirection:'row',
         justifyContent:'space-between',
         alignItems:'center',
         paddingHorizontal:10   
    }
})

class CstyleSingleLine extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {title,singleStyle,goPage} = this.props
        return(
            <TouchableOpacity 
                style={[styles.container,singleStyle]}
                onPress={goPage}
            >
               <Text>{title}</Text>
               <Image source={require('../src/resource/arrow_right.png')} style={{width:16,height:16}}/>
            </TouchableOpacity>
        )
    }
}

export default CstyleSingleLine