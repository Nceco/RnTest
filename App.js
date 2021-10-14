import React,{Component} from 'react'
import {createAppContainer} from 'react-navigation'
import {StyleSheet,View,DeviceEventEmitter, LogBox} from 'react-native'
import {globalBarStyle} from './utils/styles'
import CstyleStatusBar from './components/CstyleStatusBar'
import 'react-native-gesture-handler'

import AppNavigator from './src/route/StackNavigator'
import { getStorage, setStorage } from './utils/storge'


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFFFFF'
  }
})

const NavigatorApp = createAppContainer(AppNavigator)


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      barStyle:globalBarStyle
    }
    this.barListener
  }

  componentDidMount(){
    setStorage('themColor','dsa')
    setTimeout(async () => {
      const val = await getStorage('themColor')
    },3000)
    // 忽略警告
    // console.disableYellowBox = true
    LogBox.ignoreAllLogs()
    // AppState.addEventListener('change',(d) => {
    //   console.log(d)
    // })
    // Keyboard.addListener('keyboardDidShow',() => {
    //   console.log('qi')
    // })
    // Keyboard.addListener('keyboardDidHide',() => {
    //   Alert.alert('走')
    // })
    this.barListener =  DeviceEventEmitter.addListener('changeStatusBarStyle',barStyle => {
      this.setState({
        barStyle
      })
    })
  }

  componentWillUnmount(){
    if(this.barListener){
      this.barListener.remove()
    }
  }

  render(){
    const {barStyle} = this.state
    return (
      <View style={styles.container}>
         <CstyleStatusBar barStyle={barStyle} isNeedAnimated={true}/>  
         <NavigatorApp/>
      </View>
    )
  }
}

export default App

