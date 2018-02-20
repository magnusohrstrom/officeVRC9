import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  Image
} from 'react-vr';

import Button from './Button';

const LoadingScreen = (props) => {
    return (
        <View style={{flex:1, width:1, height:1, flexDirection: "column"}}>
            <Pano source={asset('/images/skola.jpg')}/>
            <Text style={{
                height:1, 
                width:1,
                color:"red", 
                transform:[{translate: [0, 0, -2]}] 
                }}>
                Cloud Nine VR
            </Text>
            <Button  style= {{
            width: 0.5, 
            height:0.5, 
            backgroundColor:'transparent', 
            borderWidth:0.1,
            borderRadius:100,
            borderColor:'red', 
            transform:[{translate: [0, 0, -10]}]}}
            onClick={props.onClick}/>
        </View>
    );
}

export default LoadingScreen;
