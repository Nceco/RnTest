import React, { Component } from 'react'
import { View , requireNativeComponent } from 'react-native'
import BackBtn from '../../components/navbar/BackBtn'
import NavBar from '../../components/navbar/NavBar'

const RNTMapView = requireNativeComponent('RCTMap')
const region = {
    latitude: 39.56,
    longitude: 116.20,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

class MapView extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={{flex:1}}>
                <NavBar
                    title={'MapView'}
                    leftEl={(<BackBtn onBackPress={() => {this.props.navigation.pop()}}/>)}
                />
                <RNTMapView style={{flex:1}} zoomEnabled={false} region={region}/>
            </View>
        )
    }
}

export default MapView