import React from 'react';
import {
  asset,
  Text,
  View,
  Image
} from 'react-vr';
import Button from './Button';

const Artwork = (props) => {
    return (
        <View style= {props.viewStyle}>
            <Button {...props} />
            <Text style={{color:'black', fontSize:0.3}}>{props.artworkText}</Text>
        </View>
    );
}

export default Artwork;
