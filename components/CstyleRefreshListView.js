import React,{Component} from 'react'
import { FlatList } from 'react-navigation'
import {StyleSheet,View,Text} from 'react-native'
import { getScreenHeight, getScreenWidth } from '../utils/util'

const styles = StyleSheet.create({
    emptyViewStyle:{
        width:getScreenWidth(),
        height:getScreenHeight(),
        justifyContent:'center',
        alignItems:'center'
    },
    color_66:{
        color:'#666666'
    }
})

class CstyleRefreshListView extends Component{
    constructor(props){
        super(props)
        this.state = {
            refreshing:false
        }
    }

    getDataList = () => {
        const {getFilterData} = this.props
        this.setState({
            refreshing:true
        },() => {
            getFilterData().then(res => {
                if(res == 'success'){
                    this.setState({
                        refreshing:false
                    })
                }
            })
        })
    }

    _onEndReached = () => {
        
    }

    listComponent = () => {
        return (
            <View style={styles.emptyViewStyle}>
                <Text style={styles.color_66}>暂无数据</Text>
            </View>
        )
    }

    componentDidMount(){
        console.log(this.props)
    }

    render(){
        const {refreshing} = this.state
        const {dataList,ItemSeparatorComponent,renderItem,showsVerticalScrollIndicator,...otherProps} = this.props
        return (
            <FlatList
                data={dataList}
                ListEmptyComponent={this.listComponent}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                ItemSeparatorComponent={ItemSeparatorComponent}
                refreshing={refreshing}
                onRefresh={() => {
                    this.getDataList()
                }}
                onEndReached={() => {
                    this._onEndReached()
                }}
                onEndReachedThreshold={0.1}
                showsVerticalScrollIndicator={showsVerticalScrollIndicator}
                {...otherProps}
            />
        )
    }
}

export default CstyleRefreshListView