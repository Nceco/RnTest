import {Dimensions} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

export const getScreenWidth = () => {
    return Dimensions.get('window').width
}

export const getScreenHeight = () => {
    return Dimensions.get('window').height
}   