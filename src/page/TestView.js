import React,{Component} from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Animated, View,Text,StyleSheet} from 'react-native'
import NavBar from '../../components/navbar/NavBar'
import CstylBtn from '../../components/btnCom/CstylBtn'
import {getThemColor} from '../../utils/styles'
import Spacer from '../../components/Spacer'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#EEEEEE',
        flex:1
    }
})

class TestView extends Component{
    constructor(props){
        super(props)
        this.state = {
            opacityVal:new Animated.Value(0)
        }
    }
    fadeIn = () => {
        Animated.timing(this.state.opacityVal,{
            toValue:1,
            duration:1000
        }).start()
    }

    fadeOut = () => {
        Animated.timing(this.state.opacityVal,{
            toValue:0,
            duration:1000
        }).start()
    }

    render(){
        const {opacityVal} = this.state
        return(
            <View style={styles.container}>
                <NavBar
                    title='测试'
                />
                <KeyboardAwareScrollView>
                    <Animated.View
                        style={{
                            width:100,
                            height:50,
                            backgroundColor:'#007EFF',
                            opacity:opacityVal
                        }}
                    >
                        <Text>Animated opacity</Text>
                    </Animated.View>
                    <Spacer
                        SpacerStyle={{backgroundColor:'#EEEEEE'}}
                    />
                    <Spacer
                        SpacerStyle={{backgroundColor:'#EEEEEE'}}
                    />
                    <Spacer
                        SpacerStyle={{backgroundColor:'#EEEEEE'}}
                    />
                    <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                        <CstylBtn
                            title='fadeIn'
                            onPress={this.fadeIn}
                            titleStyle={{color:'#FFFFFF'}} 
                            btnStyle={{width:100,backgroundColor:getThemColor(),borderRadius:0}}
                        />
                        <CstylBtn
                            title='fadeOut'
                            onPress={this.fadeOut}
                            titleStyle={{color:'#FFFFFF'}} 
                            btnStyle={{width:100,backgroundColor:getThemColor(),borderRadius:0}}
                        />
                    </View>
                </KeyboardAwareScrollView>
            </View>
        )
    }
}

export default TestView