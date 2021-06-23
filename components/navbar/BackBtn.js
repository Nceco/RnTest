import React,{Component} from 'react'
import { TouchableOpacity , Image , StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    btnStyle:{
        height:'100%',
        width:30,
        justifyContent:'center',
        paddingLeft:10
    }
})

class BackBtn extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {onBackPress} = this.props
        return (
            <TouchableOpacity
                onPress={() => {
                    if(onBackPress){
                        onBackPress()
                    }
                }}
                style={styles.btnStyle}
            >
                <Image source={require('./image/left_arrow.png')} style={{width:8.5,height:15.5}} />
            </TouchableOpacity>
        )
    }
}

export default BackBtn