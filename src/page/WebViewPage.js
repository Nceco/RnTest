import React,{Component} from 'react'
import { View ,Text, Linking} from 'react-native'
import {WebView} from 'react-native-webview'
import BackBtn from '../../components/navbar/BackBtn'
import NavBar from '../../components/navbar/NavBar'
import CstylBtn from '../../components/btnCom/CstylBtn'
import {getThemColor} from '../../utils/styles'

class WebViewPage extends Component{
    constructor(props){
        super(props)
    }

    onShouldStartLoadWithRequest = (request) => {
        console.log(request)

        return true
    }

    render(){
        return (
            <View style={{flex:1}}>
                <NavBar
                    title={'webview'}
                    leftEl={<BackBtn onBackPress={() => {this.props.navigation.pop()}}/>}
                />
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginVertical:20}}>
                    <Text>
                        Linking type
                    </Text>
                    <CstylBtn 
                        title={'show'} 
                        titleStyle={{color:'#FFFFFF'}} 
                        btnStyle={{width:100,backgroundColor:getThemColor(),borderRadius:0}}
                        onPress={() => {
                            Linking.openURL('https://www.baidu.com')
                        }}
                    />
                </View>
                <WebView
                    source={{uri:'https://www.baidu.com'}}
                    style={{flex:1}}
                    startInLoadingState={true}
                    originWhitelist={['*']}
                    onLoad={() => {
                        console.log('onLoad')
                    }}
                    onLoadEnd={() => {
                        console.log('onLoadEnd')
                    }}
                    onLoadStart={() => {
                        console.log('onLoadStart')
                    }}
                    onNavigationStateChange={() => {
                        console.log('onNavigationStateChange')
                    }}
                    onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                />
            </View>
        )
    }
}

export default WebViewPage