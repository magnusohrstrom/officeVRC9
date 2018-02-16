import React from 'react';
import PropTypes from 'prop-types';
import {
    AppRegistry,
    asset,
    Pano,
    Scene,
    Text,
    View,
    Image, 
    Box
  } from 'react-vr';

const Room = (props) => {
    return (
        <View style={props.style}>
            <Pano style={{marginBottom:60}} onLoad = {()=>{console.log('loadyd');
            }}source={asset(props.sourceUrl)}/>
            <View style={{
                flex: 1,
                flexDirection: 'column',
                width: 2,
                alignItems: 'stretch',
                transform: [{translate: [-1, 1, -5]}],
                }}>
            </View>
        </View> 
    );
}

export default Room;




Room.propTypes = {
    style: PropTypes.object.isRequired,
    sourceUrl:PropTypes.string.isRequired
}
  