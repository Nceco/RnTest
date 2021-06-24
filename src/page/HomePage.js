import React,{Component} from 'react'
import {View, TouchableOpacity,Text,StyleSheet,Image} from 'react-native'
import {Na} from 'react-navigation'
import { DefaultBackgroundColor, getThemColor } from '../../utils/styles'
import {getScreenWidth} from '../../utils/util'
import TabNavigator from 'react-native-tab-navigator'
import { iosBottom } from '../../utils/ios'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:DefaultBackgroundColor,
        paddingTop:30
    },
    btnViewStyle:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    btnStyle:{
        width:getScreenWidth()/2 - 10,
        backgroundColor:'#FFFFFF',
        height:35,
        borderRadius:5,
        borderColor:getThemColor(),
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center'
    },
    btnTextStyle:{
        color:getThemColor()
    }
})

class HomePage extends Component{
    constructor(props){
        super(props)
        this.state = {
            title:'首页'
        }
    }
    render(){
        return (
            <View style={styles.container}>
                <TabNavigator
                    tabBarStyle={{alignItems:'center',height:53+iosBottom,paddingBottom:iosBottom}}
                >
                    <TabNavigator.Item
                        selected={this.state.title === '首页'}
                        title={'首页'}
                        titleStyle={{fontSize:10,color:'#333333'}}
                        selectedTitleStyle={{fontSize:10,color:getThemColor()}}
                        renderIcon={() => <Image source={require('../resource/images/home.png')} style={{width:26,height:26}}/>}
                        renderSelectedIcon={() => <Image source={require('../resource/images/home_selected.png')} style={{width:26,height:26}}/>}
                        onPress={() => {this.setState({title:'首页'})}}
                    >
                        <View>
                            <Text>首页</Text>
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.title === '我的'}
                        title={'我的'}
                        titleStyle={{fontSize:10,color:'#333333'}}
                        selectedTitleStyle={{fontSize:10,color:getThemColor()}}
                        renderIcon={() => <Image source={require('../resource/images/my.png')} style={{width:26,height:26}}/>}
                        renderSelectedIcon={() => <Image source={require('../resource/images/my_selected.png')} style={{width:26,height:26}}/>}
                        onPress={() => {this.setState({title:'我的'})}}
                    >
                        <View>
                            <Text>我的</Text>
                        </View>
                    </TabNavigator.Item>
                </TabNavigator>
                {/* <View style={styles.btnViewStyle}>
                    <TouchableOpacity 
                        style={styles.btnStyle}
                        onPress={() => {
                            this.props.navigation.push('PageOne',{title:'我是上个页面传过来的'})
                        }}
                    >
                        <Text style={styles.btnTextStyle}>GoPageOne</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.btnStyle}
                        onPress={() => {
                            this.props.navigation.push('PageTwo')
                        }}
                    >
                        <Text style={styles.btnTextStyle}>GoPageTwo</Text>
                    </TouchableOpacity> */}
                {/* </View> */}
            </View>
        )
    }
}

export default HomePage