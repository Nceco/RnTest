import React,{Component} from 'react'
import {TouchableOpacity,StyleSheet,Text} from 'react-native'

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:45,
        borderRadius:20,
        backgroundColor:'#858585'
    }
})

class CstylBtn extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const { btnStyle , titleStyle , onPress , title } = this.props
        return (
            <TouchableOpacity
                style={[styles.container,btnStyle]}
                onPress={() => {
                    onPress()
                }}
            >
                <Text style={titleStyle}>{title ? title:''}</Text>
            </TouchableOpacity>
        )
    }
}

export default CstylBtn