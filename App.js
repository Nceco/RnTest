import React,{Component} from 'react'
import {createAppContainer} from 'react-navigation'
import {StyleSheet,View,Text, NativeModules, Alert} from 'react-native'
import 'react-native-gesture-handler'

import NavBar from './components/navbar/NavBar'
import CstylBtn from './components/btnCom/CstylBtn'
import { getScreenWidth } from './utils/util'
import AppNavigator from './src/route/StackNavigator'

const {StatusBarManager} = NativeModules

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
  }

  componentDidMount(){
    
  }

  render(){
    return (
      <View style={styles.container}>
         <NavBar 
            title={'首页'}
         />
         <NavigatorApp/>
      </View>
    )
  }
}

export default App

