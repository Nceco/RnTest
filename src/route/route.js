import PageOne from "../page/PageOne"
import PageTwo from "../page/PageTwo"
import MainPage from "../page/MainPage"
import WebViewPage from '../page/WebViewPage'
import MapView from "../page/MapView"

const Route = {
    PageOne:{
        screen:PageOne,
        desc:'页面1'
    },
    PageTwo:{
        screen:PageTwo,
        desc:'页面2'
    },
    WebViewPage:{
        screen:WebViewPage,
        desc:'webView'
    },
    MainPage:{
        screen:MainPage,
        desc:'首页界面'
    },
    MapView:{
        screen:MapView,
        desc:'原生地图'
    }
}

export default Route