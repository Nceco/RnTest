import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import BackBtn from '../../components/navbar/BackBtn'
import NavBar from '../../components/navbar/NavBar'
import { DefaultBackgroundColor } from '../../utils/styles'


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:DefaultBackgroundColor
    }
})

class PageTwo extends Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return (
            <View style={styles.container}>
                <NavBar
                    title='PageTwo'
                    leftEl={(<BackBtn onBackPress={() => {this.props.navigation.pop()}}/>)}
                />
                <Text>page2</Text>
            </View>
        )
    }
}

export default PageTwo