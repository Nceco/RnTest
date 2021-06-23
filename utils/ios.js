import {Platform,Dimensions} from 'react-native'

const isIphoneX = () => {
   const dimensions = Dimensions.get('window')

   return (
       Platform.OS === 'ios' && 
       !Platform.isPad  && 
       !Platform.isTV  && 
       !Platform.isTVOS && 
       [812,926,844,896].includes(dimensions.height)
   )

}
export const iosTop = isIphoneX() ? 44:20
export const iosBottom = isIphoneX() ? 34:0