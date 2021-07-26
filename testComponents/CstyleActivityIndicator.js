import React,{Component} from 'react'
import {ActivityIndicator} from 'react-native'

class CstyleActivityIndicator extends Component{
    render(){
        const {size,color,isShow} = this.props
        return (
            <ActivityIndicator size={size || 'small'} color={color || '#999999'} animating={isShow || true} />
        )
    }
}

export default CstyleActivityIndicator