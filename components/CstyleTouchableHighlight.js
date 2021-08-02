import React,{Component} from 'react'
import { TouchableHighlight , View , Text, Pressable} from 'react-native'

class CstyleTouchableHighlight extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <Pressable 
                onPress={() => {
                    console.log('onPress')
                }}
                onPressIn={() => {
                    console.log('onPressIn')
                }}
                onPressOut={() => {
                    console.log('onPressOut')
                }}
            >
                <Text>
                    i am pressable
                </Text>
            </Pressable>
        )
    }
}

export default CstyleTouchableHighlight