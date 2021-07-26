import React,{Component} from 'react'
import {View,StyleSheet,Text} from 'react-native'
import NavBar from '../../components/navbar/NavBar'
import { DefaultBackgroundColor } from '../../utils/styles'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Spacer from '../../components/Spacer'
import CstyleImage from '../../testComponents/CstyleImage'
import CstyleActivityIndicator from '../../testComponents/CstyleActivityIndicator'
import CstyleImageBackground from '../../testComponents/CstyleImageBackground'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:DefaultBackgroundColor
    },
    activityIndictorStyle:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        paddingTop:20
    }
})

class HomeView extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View style={styles.container}>
                <NavBar
                    title={'首页'}
                />
                <Spacer SpacerStyle={{backgroundColor:DefaultBackgroundColor}}/>    
                <KeyboardAwareScrollView>
                    <View>
                        <CstyleImage modeParams={'stretch'} url={"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Fmx11%2F031320193055%2F200313193055-1-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629704789&t=97dddc6b6e7ea108fc248b6ce5be63dd"} />
                    </View>
                    <View style={styles.activityIndictorStyle}>
                        <CstyleActivityIndicator/>
                        <CstyleActivityIndicator size={'large'} color={'#0000ff'}/>
                        <CstyleActivityIndicator size={'large'} color={'#858585'}/>
                    </View>
                    <View>
                        <CstyleImageBackground modeParams={'repeat'} sourceUrl={'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Fmx11%2F031320193055%2F200313193055-1-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629704789&t=97dddc6b6e7ea108fc248b6ce5be63dd'}>
                            <Text style={{color:'#FFFFFF',textAlign:'center',lineHeight:240}}>hello ImageBackground</Text>
                        </CstyleImageBackground>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        )
    }
}

export default HomeView