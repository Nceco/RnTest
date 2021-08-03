import React,{Component} from 'react'
import { View ,Text} from 'react-native'
import {WebView} from 'react-native-webview'
import BackBtn from '../../components/navbar/BackBtn'
import NavBar from '../../components/navbar/NavBar'

class WebViewPage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View style={{flex:1}}>
                <NavBar
                    title={'webview'}
                    leftEl={<BackBtn onBackPress={() => {this.props.navigation.pop()}}/>}
                />
                <WebView
                    source={{uri:'https://www.baidu.com'}}
                    style={{flex:1}}
                />
            </View>
        )
    }
}

export default WebViewPage