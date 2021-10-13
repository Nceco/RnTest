import {Dimensions} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

export const getScreenWidth = () => {
    return Dimensions.get('window').width
}

export const getScreenHeight = () => {
    return Dimensions.get('window').height
}

// export const setStorage = async (key,obj) => {
//     if(obj === null){
//         await AsyncStorage.setItem(key,'null')
//     }else{
//         await AsyncStorage.setItem(key,obj)
//     }
// }

// export const getStorage = (key) => {
//     return new Promise(async (resolve,reject) => {
//         const value = await AsyncStorage.getItem(key)
//         if(value === null){
//             resolve('null')
//         }else{
//             resolve(value)
//         }
//     })
// }    