import React,{Component} from 'react'
import {StyleSheet,View,Text,Image} from 'react-native'

const styles = StyleSheet.create({
    loadingView:{
        height:40,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    normalTextStyle:{
        color:'rgb(169,169,169)'
    }
})

class LoadMoreFooterView extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {
            loadStatus,
            loadingTitle,
            resolvedTitle,
            normalTitle,
            hideResolvedTitle=false
        } = this.props
        if(loadStatus == 'loading'){
            return (
                <View style={styles.loadingView}>
                    <Text style={styles.normalTextStyle}>{loadingTitle || '正在加载数据'}</Text>
                </View>
            )
        }else if(loadStatus == 'noNeedLoad'){
            return (
                <View style={styles.loadingView}>
                    <Text style={styles.normalTextStyle}>
                        {
                            resolvedTitle || (!hideResolvedTitle ? '没有更多数据了':'')
                        }
                    </Text>
                </View>
            )
        }

        return (
            <View style={styles.loadingView}>
                <Image 
                    source={require('./image/top_pull_arrow.png')}
                    resizeMode={'cover'}
                    style={{width:16,height:16}}
                />
                <Text style={styles.normalTextStyle}>
                    {
                        normalTitle || '上拉加载数据'
                    }
                </Text>
            </View>
        )
    }
}

export default LoadMoreFooterView