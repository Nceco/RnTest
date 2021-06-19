import React,{Component} from 'react'
import {StyleSheet,View,Text, NativeModules, Alert} from 'react-native'

import NavBar from './components/navbar/NavBar'
import CstylBtn from './components/btnCom/CstylBtn'
import { getScreenWidth } from './utils/util'

const {StatusBarManager} = NativeModules

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFFFFF'
  }
})


class App extends Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log('1213')
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
      </View>
    )
  }
}

export default App

