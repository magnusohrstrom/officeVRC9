import React from 'react';
import {
  asset,
  Text,
  View,
  Image, 
  VrButton
} from 'react-vr';

const Artwork = (props) => {
    return (
        <View style= {{
            width:6,
            height:6,
            flexDirection:"column", 
            padding:0.1, 
            backgroundColor:"white", 
            transform:[{translate:[-10, 4, -10]},{rotateY:"45deg"}]
            }}>
            <Image   
                style = {{width:6,height:5}}
                source = {asset('images/mountain.jpg')}
            />
            <Text style={{color:'black', fontSize:0.3}}>{props.artworkText}</Text>
        </View>
    );
}

export default Artwork;
