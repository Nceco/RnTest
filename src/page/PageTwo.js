import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import BackBtn from '../../components/navbar/BackBtn'
import NavBar from '../../components/navbar/NavBar'
import { DefaultBackgroundColor } from '../../utils/styles'
import CstyleTextInput from '../../components/CstyleInput/CstyleTextInput'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
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

class PageTwo extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputVal:'',
            inputValLast:'null'
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
                    title='TextInput'
                    leftEl={(<BackBtn onBackPress={() => {this.props.navigation.pop()}}/>)}
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

export default PageTwo