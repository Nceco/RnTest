import React,{Component} from 'react'
import {View,StyleSheet,Text} from 'react-native'
import NavBar from '../../components/navbar/NavBar'
import { DefaultBackgroundColor } from '../../utils/styles'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import Spacer from '../../components/Spacer'
import CstyleImage from '../../testComponents/CstyleImage'
import CstyleActivityIndicator from '../../testComponents/CstyleActivityIndicator'
import CstyleImageBackground from '../../testComponents/CstyleImageBackground'
import CstyleTextInput from '../../components/CstyleInput/CstyleTextInput'

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
    },
    inputViewStyle:{
        height:60,
        backgroundColor:'#FFFFFF',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:10
    },
    inputContainerStyle:{
        flex:1,
        backgroundColor:'#EAEAEA',
        borderRadius:20,
        height:40
    },
    inputStyle:{
        paddingVertical:0,
        paddingLeft:5,
        flex:1
    }
})

class HomeViewDemo extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputVal:''
        }
    }
    render(){
        const {inputVal} = this.state
        return (
            <View style={styles.container}>
                <NavBar
                    title={'首页'}
                />
                <Spacer SpacerStyle={{backgroundColor:DefaultBackgroundColor}}/>    
                <KeyboardAwareScrollView keyboardShouldPersistTaps={'handled'}>
                    <View style={styles.inputViewStyle}>
                            <CstyleTextInput
                                leftIconColor={'#999999'}
                                style={styles.inputContainerStyle}
                                inputStyle={styles.inputStyle}
                                inputProps={{
                                    clearButtonMode:'while-editing',
                                    // clearButtonMode:'never',
                                    // clearButtonMode:'unless-editing',
                                    // clearButtonMode:'always',
                                    placeholder:'请输入搜索条件',
                                    placeholderTextColor:'#999999',
                                    value:inputVal,
                                    onChangeText:(val) => {
                                        this.setState({
                                            inputVal:val
                                        })
                                    }
                                }}
                            />
                        </View>
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

export default HomeViewDemo