import React,{Component} from 'react'
import {View, TouchableOpacity,Text,StyleSheet} from 'react-native'
import {Na} from 'react-navigation'
import { DefaultBackgroundColor, getThemColor } from '../../utils/styles'
import {getScreenWidth} from '../../utils/util'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:DefaultBackgroundColor,
        paddingTop:30
    },
    btnViewStyle:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    btnStyle:{
        width:getScreenWidth()/2 - 10,
        backgroundColor:'#FFFFFF',
        height:35,
        borderRadius:5,
        borderColor:getThemColor(),
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center'
    },
    btnTextStyle:{
        color:getThemColor()
    }
})

class HomePage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.btnViewStyle}>
                    <TouchableOpacity 
                        style={styles.btnStyle}
                        onPress={() => {
                            this.props.navigation.push('PageOne',{title:'我是上个页面传过来的'})
                        }}
                    >
                        <Text style={styles.btnTextStyle}>GoPageOne</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.btnStyle}
                        onPress={() => {
                            this.props.navigation.push('PageTwo')
                        }}
                    >
                        <Text style={styles.btnTextStyle}>GoPageTwo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default HomePage