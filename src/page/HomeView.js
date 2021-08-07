import React,{Component} from 'react'
import {View,StyleSheet,Text} from 'react-native'
import NavBar from '../../components/navbar/NavBar'
import { DefaultBackgroundColor } from '../../utils/styles'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
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
    }
})

class HomeView extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputVal:'',
            inputValLast:'NULL'
        }
        this.input
    }
    render(){
        const {inputValLast} = this.state
        return (
            <View style={styles.container}>
                <NavBar
                    title={'首页'}
                /> 
                <KeyboardAwareScrollView 
                    keyboardShouldPersistTaps={'handled'}
                    contentContainerStyle={{
                        backgroundColor:'#FFFFFF',
                        flex:1,
                        paddingHorizontal:10
                    }}
                >
                </KeyboardAwareScrollView>
            </View>
        )
    }
}

export default HomeView