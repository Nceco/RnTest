import React,{Component} from 'react'
import { Switch } from 'react-native'

class CstyleSwitch extends Component{
    render(){
        const {value,disabled,trackColor,onValueChange,thumbColor} = this.props
        return(
            <Switch 
                style={{transform:[{ scaleX: 0.8 }, { scaleY: 0.8 }]}} 
                value={value} 
                disabled={disabled} 
                onValueChange={onValueChange} 
                trackColor={trackColor}
            />
        )
    }
}
export default CstyleSwitch