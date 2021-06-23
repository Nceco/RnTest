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
            titleStyle={{color:'#333333',fontSize:17}}
         />
         {/* <CstylBtn
          title='BTN'
          titleStyle={{color:'#FFFFFF',fontSize:17}}
          btnStyle={{width:getScreenWidth() - 30,marginLeft:15}}
          onPress={() => {
            console.log('hello')
          }}
         /> */}
         <NavigatorApp/>
      </View>
    )
  }
}

export default App

