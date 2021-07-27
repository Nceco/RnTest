import React,{Component} from 'react'
import {View,Text,StyleSheet,DeviceEventEmitter} from 'react-native'
import NavBar from '../../components/navbar/NavBar'
import { DefaultBackgroundColor, globalBarStyle } from '../../utils/styles'
import BackBtn from '../../components/navbar/BackBtn'
import WhenRender from '../../components/WhenRender'
import _ from 'lodash'


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:DefaultBackgroundColor
    }
})

const RenderText = WhenRender(Text)

class PageOne extends Component{
    constructor(props){
        super(props)
    }

    componentWillUnmount(){
        DeviceEventEmitter.emit('changeStatusBarStyle',globalBarStyle)
    }

    render(){
        const {title} = this.props.navigation.state.params || 'default'
        return (
            <View style={styles.container}>
                <NavBar
                    title='PageOne'
                    leftEl={(<BackBtn onBackPress={() => {this.props.navigation.pop(),DeviceEventEmitter.emit('changeStatusBarStyle',globalBarStyle)}}/>)}
                />
                <Text>page1</Text>
                <RenderText whenRender={!_.isEmpty(title)}>{title}</RenderText>
            </View>
        )
    }
}

export default PageOne