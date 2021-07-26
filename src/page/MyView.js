import React,{Component} from 'react'
import {View,StyleSheet} from 'react-native'
import NavBar from '../../components/navbar/NavBar'
import {getThemColor} from '../../utils/styles'
import CstylBtn from '../../components/btnCom/CstylBtn'
import Spacer from '../../components/Spacer'
import CstyleModal from '../../components/CstyleModal'

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
            modalVisible:false
        }
    }

    changeModalVisible = () => {
        this.setState({
            modalVisible:!this.state.modalVisible
        })
    }

    render(){
        const {modalVisible} = this.state
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
                <CstyleModal onCancel={this.changeModalVisible} visible={modalVisible} />
            </View>
        )
    }
}

export default MyView