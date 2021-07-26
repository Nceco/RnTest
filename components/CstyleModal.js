import React,{Component} from 'react'
import { TouchableOpacity ,View , Text , Modal} from 'react-native'

class CstyleModal extends Component{
    render(){
        const {onCancel,visible} = this.props
        const ViewWrapper = onCancel ? TouchableOpacity : View
        return (
            <Modal
                    transparent
                    visible={visible}
                    animationType={'fade'}
                >
                    <ViewWrapper  
                        style={{flex:1,backgroundColor:'rgba(0,0,0,.5)',justifyContent:'center',alignItems:'center'}}
                        onPress={onCancel}
                        activeOpacity={1}
                    >
                        <Text>hello</Text>
                    </ViewWrapper>
            </Modal>
        )
    }
}

export default CstyleModal