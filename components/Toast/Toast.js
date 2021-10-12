import RootToast from "react-native-root-toast";
import { getScreenHeight} from "../../utils/util";

const centerPosition = getScreenHeight()/2
const topPosition = 100
const bottomPosition = getScreenHeight() - 200

const nativeToast = {
    showShortCenter:(msg) => {
        nativeToast.show(msg,1000,centerPosition)
    },
    showLongCenter:(msg) => {
        nativeToast.show(msg,3000,centerPosition)
    },
    showShortTop:(msg) => {
        nativeToast.show(msg,1000,topPosition)
    },
    showLongTop:(msg) => {
        nativeToast.show(msg,3000,topPosition)
    },
    showShortBottom:() => {
        nativeToast.show(msg,1000,bottomPosition)
    },
    showLongBottom:() => {
        nativeToast.show(msg,3000,bottomPosition)
    },
    show:(message, duration = 1000, position = centerPosition) => {
        const toastModule = RootToast
        if (!toastModule) {
            throw new Error('toast method not impl')
        }
        RootToast.show(message,{duration,position,shadow:false})
    }
}


const Toast = {
    showShortCenter:nativeToast.showShortCenter,
    showLongCenter:nativeToast.showLongCenter,
    showShortTop:nativeToast.showShortTop,
    showLongTop:nativeToast.showLongTop,
    showShortBottom:nativeToast.showShortBottom,
    showLongBottom:nativeToast.showLongBottom
}

export default Toast