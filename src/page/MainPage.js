import React,{Component} from 'react'
import {View, TouchableOpacity,Text,StyleSheet,Image} from 'react-native'
import { DefaultBackgroundColor, getThemColor } from '../../utils/styles'
import {getScreenWidth} from '../../utils/util'
import TabNavigator from 'react-native-tab-navigator'
import { iosBottom } from '../../utils/ios'
import MyView from './MyView'
import HomeView from './HomeView'
import SetView from './SetView'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:DefaultBackgroundColor
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
    },
    tabBarStyle:{
        alignItems:'center',
        height:53+iosBottom,
        paddingBottom:iosBottom
    },
    titleStyle:{
        fontSize:10,
        color:'#333333'
    },
    selectedTitleStyle:{
        fontSize:10,
        color:getThemColor()
    },
    iconStyle:{
        width:26,
        height:26
    }
})

const tabItemArray = [
    {title:'首页',component:HomeView,key:'HomeView'},
    {title:'我的',component:MyView,key:'MyView'},
    {title:'设置',component:SetView,key:'SetView'}
]

const tabItemImages = [
    {
        renderIcon: require('../resource/images/home.png'),
        renderSelectedIcon: require('../resource/images/home_selected.png')
    },
    {
        renderIcon:require('../resource/images/my.png'),
        renderSelectedIcon:require('../resource/images/my_selected.png')
    },
    {
        renderIcon:require('../resource/images/setting.png'),
        renderSelectedIcon:require('../resource/images/setting_selected.png')
    }
]

const getIcon = (index = 0,type = 'renderIcon') => {
    if(type == 'renderIcon'){
        return <Image source={tabItemImages[index].renderIcon} style={styles.iconStyle}/>
    }else{
        return <Image source={tabItemImages[index].renderSelectedIcon} style={styles.iconStyle}/>
    }
}

class MainPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            title:'首页'
        }
    }
    tabBarPress = (title) => {
        console.log(this.props)
        this.setState({title})
    }
    render(){
        const {title} = this.state
        return (
            <View style={styles.container}>
                <TabNavigator
                    tabBarStyle={styles.tabBarStyle}
                >
                    {
                        tabItemArray.map((item,index) => {
                            return (
                                <TabNavigator.Item
                                    selected={title == item.title} 
                                    key={item.key}
                                    title={item.title}
                                    titleStyle={styles.titleStyle}
                                    selectedTitleStyle={styles.selectedTitleStyle}
                                    renderIcon={() => getIcon(index,'renderIcon')}
                                    renderSelectedIcon={() => getIcon(index,'renderSelectedIcon')}
                                    onPress={() => {this.tabBarPress(item.title)}}
                                >
                                    <item.component navigation={this.props.navigation}/>
                                </TabNavigator.Item>
                            )
                        })
                    }
                </TabNavigator>
            </View>
        )
    }
}

export default MainPage