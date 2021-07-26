import React,{Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import NavBar from '../../components/navbar/NavBar'
import { DefaultBackgroundColor } from '../../utils/styles'
import BackBtn from '../../components/navbar/BackBtn'
import WhenRender from '../../components/WhenRender'
import _ from 'lodash'


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:DefaultBackgroundColor
    }
})

const RenderText = WhenRender(Text)

class PageOne extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {title} = this.props.navigation.state.params || 'default'
        return (
            <View style={styles.container}>
                <NavBar
                    title='PageOne'
                    leftEl={(<BackBtn onBackPress={() => {this.props.navigation.pop()}}/>)}
                />
                <Text>page1</Text>
                <RenderText whenRender={!_.isEmpty(title)}>{title}</RenderText>
            </View>
        )
    }
}

export default PageOne