import React,{Component} from 'react'
import {View,Text,StyleSheet,DeviceEventEmitter,FlatList} from 'react-native'
import NavBar from '../../components/navbar/NavBar'
import { DefaultBackgroundColor, globalBarStyle } from '../../utils/styles'
import BackBtn from '../../components/navbar/BackBtn'
import WhenRender from '../../components/WhenRender'
import _ from 'lodash'
import Spacer from '../../components/Spacer'
import CstyleRefreshListView from '../../components/CstyleRefreshListView'


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
        this.state = {
            dataList:[],
            refreshing:false
        }
    }

    componentDidMount(){
        this.getFilterData()
    }

    componentWillUnmount(){
        DeviceEventEmitter.emit('changeStatusBarStyle',globalBarStyle)
    }

    renderItem = ({item,index}) => {
        return (
            <View 
                key={index} 
                style={{
                        height:80,
                        justifyContent:'center',
                        alignItems:'flex-start',
                        borderBottomColor:'#EEEEEE',
                        borderBottomWidth:1,
                        paddingLeft:10
                    }}>
                <Text style={{fontSize:15,color:'#333333'}}>姓名：{item.name}，年龄：{item.age}</Text>
            </View>
        )
    }

    getFilterData = () => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                this.setState({
                    dataList:[
                        {id:1,name:'jack',age:21},
                        {id:2,name:'jack1',age:22},
                        {id:3,name:'jack2',age:23},
                        {id:4,name:'jack3',age:24},
                        {id:5,name:'jack4',age:25},
                        {id:6,name:'jack5',age:26},
                        {id:7,name:'jack6',age:27},
                        {id:8,name:'jack8',age:28},
                        {id:9,name:'jac7k',age:29},
                        {id:0,name:'jack9',age:22},
                        {id:10,name:'jack0',age:25}
                    ]
                },() => {
                    resolve('success')
                })
            },600)
        })
    }

    render(){
        const {title} = this.props.navigation.state.params || 'default'
        const {dataList,refreshing} = this.state
        return (
            <View style={styles.container}>
                <NavBar
                    title='PageOne'
                    leftEl={(<BackBtn onBackPress={() => {this.props.navigation.pop(),DeviceEventEmitter.emit('changeStatusBarStyle',globalBarStyle)}}/>)}
                />
                {/* <Text>page1</Text>
                <RenderText whenRender={!_.isEmpty(title)}>{title}</RenderText> */}
                <CstyleRefreshListView
                    dataList={dataList}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={() => {
                        return (
                            <Spacer/>
                        )
                    }}
                    getFilterData={this.getFilterData}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }
}

export default PageOne