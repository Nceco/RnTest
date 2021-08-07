import React,{Component} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Foundation from 'react-native-vector-icons/Foundation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const mapping = {
    Ionicons,
    AntDesign,
    Entypo,
    Foundation,
    MaterialCommunityIcons,
    MaterialIcons,
    SimpleLineIcons,
    EvilIcons,
    Feather,
    FontAwesome
}

class CstyleIcon extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {suite,...etx} = this.props
        const RenderIcon = mapping[suite]
        return (
            <RenderIcon {...etx}/>
        )
    }
}

export default CstyleIcon