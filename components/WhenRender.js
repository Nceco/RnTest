import React,{Component} from 'react'

const WhenRender = (WrapedComponent) => {
    class newComponent extends Component{
        render(){
            const { whenRender = true, replaceView , renderCallback , ...ext } = this.props
            if(renderCallback){
                renderCallback(whenRender)
            }
            if(!whenRender){
                if(!replaceView){
                    return null
                }
                const ReplaceView = replaceView
                return <ReplaceView/>
            }
            return <WrapedComponent {...ext}/>
        }
    }

    return newComponent
}

export default WhenRender