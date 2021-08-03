import PageOne from "../page/PageOne"
import PageTwo from "../page/PageTwo"
import MainPage from "../page/MainPage"
import WebViewPage from '../page/WebViewPage'

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
    }
}

export default Route