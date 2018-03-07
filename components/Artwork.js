import React from 'react';
import {
  asset,
  Text,
  View,
  Image,
  Animated
} from 'react-vr';
import Button from './Button';

const AnimatedView = Animated.createAnimatedComponent(View);

const Artwork = (props) => {
    return (
        <AnimatedView style = {props.viewStyle}>
            <Button {...props} />
            <Text style={{color:'black', fontSize:0.3}}>{props.artworkText}</Text>
        </AnimatedView>
    );
}

export default Artwork;

