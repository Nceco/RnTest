import React,{Component} from 'react'
import { FlatList } from 'react-navigation'
import {StyleSheet,View,Text} from 'react-native'
import { getScreenHeight, getScreenWidth } from '../utils/util'
import LoadMoreFooterView from './loadMore/LoadMoreFooterView'

const styles = StyleSheet.create({
    emptyViewStyle:{
        width:getScreenWidth(),
        height:getScreenHeight(),
        justifyContent:'center',
        alignItems:'center'
    },
    color_66:{
        color:'#666666'
    },
    container:{
        flex:1
    }
})

class CstyleRefreshListView extends Component{
    constructor(props){
        super(props)
        this.state = {
            refreshing:false,
            isFooterLoading:false
        }
    }

    getDataList = async (page = '1') => {
        const {getFilterData} = this.props
        await getFilterData(page)
    }

    listOnEndReached = () => {
        const {page,needLoad} = this.props
        if(needLoad){
            setTimeout(() => {
                this.setState({
                    isFooterLoading:true
                })
                const requestPage = parseInt(page) + 1
                this.getDataList(requestPage).then(() => {
                    this.setState({
                        isFooterLoading:false
                    })
                })
            },600)
        }

    }

    _onLayout = (event) => {
        console.log(event,'----event----')
    }

    _onRefresh = () => {
        this.setState({
            refreshing:true
        })
        this.getDataList().then(() => {
            this.setState({
                refreshing:false
            })
        })
    }

    handleFootLoadStatus = () => {
        const { isFooterLoading } = this.state
        const { needLoad } = this.props
        if (!needLoad) {
          return 'noNeedLoad'
        }
    
        return isFooterLoading ? 'loading' : 'normal'
      }

      _renderFooter = () => {
        const loadStatus = this.handleFootLoadStatus()
        const footer = (
            <LoadMoreFooterView loadStatus={loadStatus}/>
        )
        return footer
    }

    _listComponent = () => {
        return (
            <View style={styles.emptyViewStyle}>
                <Text style={styles.color_66}>暂无数据</Text>
            </View>
        )
    }


    render(){
        const {refreshing} = this.state
        const {
                dataList,
                ItemSeparatorComponent,
                renderItem,
                showsVerticalScrollIndicator,
                ...otherProps
            } = this.props
        return (
            <FlatList
                data={dataList}
                style={styles.container}
                ListEmptyComponent={this._listComponent}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                ItemSeparatorComponent={ItemSeparatorComponent}
                refreshing={refreshing}
                onRefresh={() => {
                    this._onRefresh()
                }}
                onEndReached={() => {
                    this.listOnEndReached()
                }}
                onEndReachedThreshold={0.1}
                ListFooterComponent={this._renderFooter}
                showsVerticalScrollIndicator={showsVerticalScrollIndicator}
                onLayout={this._onLayout}
                {...otherProps}
            />
        )
    }
}

export default CstyleRefreshListView