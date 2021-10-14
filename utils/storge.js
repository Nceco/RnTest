import AsyncStorage from "@react-native-community/async-storage";
import _ from 'lodash'

setItem = async (key,value) => {
    await AsyncStorage.setItem(key,value)
}

getItem = async (key) => {
    await AsyncStorage.getItem(key)
}

export const setStorage = async(key,object) => {
    const data = _.isString(object) ? {wrapValue:object}:object
    await setItem(key,JSON.stringify(data))
}

export const getStorage = async (key) => {
    const val = await getItem(key)
    try{
       const data = JSON.parse(val)
       if(data && _.has(data,'wrapValue')){
           return data.wrapValue
       }
       return data     
    }catch (e){
        return null
    }
}