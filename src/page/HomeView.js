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
    },
    inputViewStyle:{
        height:60,
        backgroundColor:'#FFFFFF',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
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

class HomeView extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputVal:'',
            inputValLast:'NULL'
        }
        this.input
    }

    searchView = () => {
        const {inputVal} = this.state
        return (
            <View style={styles.inputViewStyle}>
                <CstyleTextInput
                    textRef={refs => {
                        this.input = refs
                    }}
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
                        },
                        onSubmitEditing:() => {
                            this.setState({
                                inputValLast:inputVal
                            })
                            this.input.clear()

                        }
                    }}
                />
            </View>
        )
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
                    {this.searchView()}
                    <View>
                        <Text>输入框的值是:{inputValLast}</Text>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        )
    }
}

export default HomeView