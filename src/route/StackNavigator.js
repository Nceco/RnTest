import {createStackNavigator} from 'react-navigation-stack'
import Route from './route'

const AppNavigator = createStackNavigator(Route,{
    initialRouteName:'MainPage',
    mode:'card',
    headerMode:'none'
})

export default AppNavigator