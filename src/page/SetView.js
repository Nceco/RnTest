import React, {Component} from 'react'
import NavBar from '../../components/navbar/NavBar'
import {View,DeviceEventEmitter} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CstyleSingleLine from '../../components/CstyleSingleLine'

class SetView extends Component{
    goPage = () => {
        const {navigate} = this.props.navigation
        navigate('PageOne')
        DeviceEventEmitter.emit('changeStatusBarStyle','dark-content')
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