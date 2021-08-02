import React,{Component} from 'react'
import { Alert, View } from 'react-native'

class CstyleAlert extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {isNeedShow} = this.props
        if(isNeedShow){
            return (
                <View></View>
            )
        }
        return null
    }

}

export default CstyleAlert