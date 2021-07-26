import React, {Component} from 'react'
import NavBar from '../../components/navbar/NavBar'
import {View} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CstyleSingleLine from '../../components/CstyleSingleLine'
import Spacer from '../../components/Spacer'

class SetView extends Component{
    goPage = () => {
        console.log(this.props)
    }
    render(){
        return (
            <View>
                <NavBar
                    title={'设置'}
                />
                <KeyboardAwareScrollView>
                    <CstyleSingleLine title={'主题色切换'} goPage={this.goPage}/>
                </KeyboardAwareScrollView>
            </View>
        )
    }
}

export default SetView