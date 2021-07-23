import React,{Component} from 'react'
import {View,StyleSheet} from 'react-native'
import NavBar from '../../components/navbar/NavBar'
import { DefaultBackgroundColor } from '../../utils/styles'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:DefaultBackgroundColor
    }
})

class MyView extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <View style={styles.container}>
                <NavBar
                    title={'我的'}
                />
            </View>
        )
    }
}

export default MyView