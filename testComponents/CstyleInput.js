import React,{Component} from 'react'
import { TextInput , TouchableOpacity, View,Text, Keyboard} from 'react-native'
import { getThemColor } from '../utils/styles'

class CstyleInput extends Component{
    constructor(props){
        super(props)
        this.state = {
            keyFocus:false
        }
    }
    hiddenKeyBoard = () => {
        this.setState({
            keyFocus:false
        })
    }
    render(){
        return(
            <View style={{with:100,height:50,backgroundColor:'#EEEEEE',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <TextInput 
                    style={{flex:1}}
                    placeholder={'请输入'}
                    clearButtonMode={'while-editing'}
                    onFocus={() => {
                        this.setState({
                            keyFocus:true
                        })
                    }}
                />
                <TouchableOpacity 
                    style={{width:50,height:50,backgroundColor:getThemColor()}}
                    onPress={() => {
                        Keyboard.dismiss()
                    }}
                >
                    <Text>hhh</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default CstyleInput