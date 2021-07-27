import React,{Component} from 'react'
import {View,StyleSheet,Text, RefreshControl, StatusBar} from 'react-native'
import NavBar from '../../components/navbar/NavBar'
import {DefaultBackgroundColor, getThemColor} from '../../utils/styles'
import CstylBtn from '../../components/btnCom/CstylBtn'
import Spacer from '../../components/Spacer'
import CstyleModal from '../../components/CstyleModal'
import { ScrollView } from 'react-navigation'
import CstyleSwitch from '../../testComponents/CstyleSwitch'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF'
    }
})

class MyView extends Component{
    constructor(props){
        super(props)
        this.state = {
            modalVisible:false,
            eachArray:[1,2,3,4,5,6,7,8,9,10],
            refreshing:false,
            switchVal:false
        }
    }

    changeModalVisible = () => {
        this.setState({
            modalVisible:!this.state.modalVisible
        })
    }

    onRefresh = () => {
        this.setState({
            refreshing:true
        })
        setTimeout(() => {
            this.setState({
                refreshing:false
            })
        },600)
    }

    valueChange = (status) => {
        this.setState({
            switchVal:status
        })
    }

    render(){
        const {modalVisible,eachArray,refreshing,switchVal} = this.state
        return (
            <View style={styles.container}>
                <NavBar
                    title={'我的'}
                />
                <Spacer/>
                <View style={{alignItems:'center'}}>
                    <CstylBtn 
                        title={'show'} 
                        titleStyle={{color:'#FFFFFF'}} 
                        btnStyle={{width:100,backgroundColor:getThemColor(),borderRadius:0}}
                        onPress={() => {
                            this.setState({
                                modalVisible:true
                            })
                        }}
                    />
                </View>
                <Spacer/>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <CstyleSwitch 
                        value={switchVal} 
                        disabled={false} 
                        trackColor={{ false: "#EFEFEF", true:getThemColor() }}
                        onValueChange={this.valueChange}
                    />
                </View>
                <Spacer/>
                <ScrollView 
                    style={{flex:1}}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={this.onRefresh}
                        />
                    }
                >
                    {
                        eachArray.map((item,index) => {
                            return (
                                <View key={index} style={{height:100,backgroundColor:'#EEEEEE',justifyContent:'center',alignItems:'center'}}>
                                    <Text>{item}</Text>
                                </View>
                            )
                        })
                    }
                </ScrollView>
                <CstyleModal onCancel={this.changeModalVisible} visible={modalVisible} />
            </View>
        )
    }
}

export default MyView