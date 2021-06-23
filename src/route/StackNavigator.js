import {createStackNavigator} from 'react-navigation-stack'
import Route from './route'

const AppNavigator = createStackNavigator(Route,{
    initialRouteName:'HomePage'
})

export default AppNavigator