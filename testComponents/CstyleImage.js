import React,{Component} from 'react'
import {Image,StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    ImageStyle:{
        width:50,
        height:50
    }
})

class CstyleImage extends Component{
    render(){
        const {url,modeParams} = this.props
        return (
            <Image source={{uri:url}} style={styles.ImageStyle} resizeMode={modeParams || 'contain'}/>
        )
    }
}

export default CstyleImage