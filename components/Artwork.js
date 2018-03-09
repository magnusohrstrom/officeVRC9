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
            <Text style={props.textStyleTitle}>{props.artworkTitle}</Text>
            <Text style={props.textStyleArtist}>{props.artworkArtist}</Text>  
        </AnimatedView>
    );
}

export default Artwork;

