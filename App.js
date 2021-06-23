import React,{Component} from 'react'
import {createAppContainer} from 'react-navigation'
import {StyleSheet,View} from 'react-native'
import 'react-native-gesture-handler'

import AppNavigator from './src/route/StackNavigator'


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
         <NavigatorApp/>
      </View>
    )
  }
}

export default App

