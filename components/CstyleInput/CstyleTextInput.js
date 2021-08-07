import React,{Component} from 'react'
import {TextInput,View,TouchableOpacity,StyleSheet,Image, Keyboard} from 'react-native'
import _ from 'lodash'
import CstyleIcon from '../Icon/CstyleIcon'
import whenRender from '../WhenRender'

const RenderCstyleIcon = whenRender(CstyleIcon)


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:45
    },
    clearTouchStyle:{
        width:45,
        height:45,
        justifyContent:'center',
        alignItems:'center'
    },
    clearImgStyle:{
        width:20,
        height:20,
        borderRadius:10
    },
    inputViewStyle:{
        height:45
    }
})

export const ClearBtn = (props) => {
    return (
        <TouchableOpacity 
            activeOpacity={1} 
            onPress={props.clearPress}
            style={styles.clearTouchStyle}
        >
            <CstyleIcon
                suite={'Ionicons'}
                size={20}
                color={'#b5b5b5'}
                name={'ios-close-circle'}
            />
        </TouchableOpacity>
    )
}

class CstyleTextInput extends Component{
    constructor(props){
        super(props)
        const {value,defaultValue} = props.inputProps || {}
        this.state = {
            focusState:false,
            text:_.isEmpty(value) ? defaultValue:value
        }
        this.input
    }

    componentWillReceiveProps(props){
        const {value,defaultValue} = props.inputProps || {}
        if(!_.isUndefined(value)){
            this.setState({
                text:value
            })
        }
        if(!_.isUndefined(defaultValue)){
            this.setState({
                text:defaultValue
            })
        }
    }

    shouldComponentUpdate(nextProps,nextState){
        return !_.isEqual(nextProps,this.props) || !_.isEqual(nextState,this.state)
    }

    cleanText = () => {
        const {onChangeText} = this.props.inputProps || {}
        // Keyboard.dismiss()

        this.setState({
            text:''
        })

        if(this.input){
            this.input.clear()
        }

        if(onChangeText){
            onChangeText('')
        }
    }

    needRenderLeftIcon = () => {
        const {
            leftIconName = 'md-search-outline',
            leftIconSuite = 'Ionicons' , 
            leftIconColor = '#333333',
            leftIconStyle = {},
            leftIconNeedRender = true
        } = this.props

        return (
            <RenderCstyleIcon
                whenRender={leftIconNeedRender}
                suite={leftIconSuite}
                name={leftIconName}
                size={20}
                color={leftIconColor}
                style={[{marginLeft:10,marginTop:2},leftIconStyle]}
            />
        )
    }


    needRenderClearBtn = () => {
        const {focusState,text = ''} = this.state

        const {clearButtonMode = 'never'} = this.props.inputProps || {}

        if(clearButtonMode == 'while-editing' && text.length > 0 && focusState){
            return <ClearBtn clearPress={this.cleanText}/>
        }else if(clearButtonMode == 'unless-editing' && text.length > 0 && !focusState){
            return <ClearBtn clearPress={this.cleanText}/>
        }else if(clearButtonMode == 'always'){
            return <ClearBtn clearPress={this.cleanText}/>
        }else if(clearButtonMode == 'never'){
            return null
        }
    }

    _onFocus = () => {
        const {onFocus} = this.props

        if(onFocus){
            onFocus()
        }

        this.setState({
            focusState:true
        })
    }

    _onBlur = () => {
        const {onBlur} = this.props

        if(onBlur){
            onBlur()
        }

        this.setState({
            focusState:false
        })
    }

    _onChangeText = (val) => {
        const {onChangeText} = this.props.inputProps || {}

        if(onChangeText){
            onChangeText(val)
        }

        this.setState({
            text:val
        })
    }

    _onSubmitEditing = () => {
        const {onSubmitEditing} = this.props.inputProps || {}

        Keyboard.dismiss()

        if(onSubmitEditing){
            onSubmitEditing()
        }

        this.setState({
            focusState:false
        })
    }

    render(){
        const {
            inputProps,
            style,
            inputStyle,
            textRef
        } = this.props
        return (
            <View style={[styles.container,style]}>
                {this.needRenderLeftIcon()}
                <TextInput
                    ref={refs => {
                        if(textRef && _.isFunction(textRef)){
                            textRef(refs)
                        }
                        this.input = refs
                    }}
                    style={[styles.inputViewStyle,inputStyle]}
                    returnKeyType="done"
                    keyboardType="default"
                    {...inputProps}
                    onFocus={this._onFocus}
                    onBlur={this._onBlur}
                    onChangeText={this._onChangeText}
                    onSubmitEditing={this._onSubmitEditing}
                    clearButtonMode={'never'}
                />
                {this.needRenderClearBtn()}
            </View>
        )
    }
}

export default CstyleTextInput