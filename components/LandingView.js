import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  Image,
  Box
} from 'react-vr';

import Button from './Button';

const LandingView = (props) => {
    return (
        <View style={{flex:1, flexDirection: "column",  transform:[{translate: [0, 0, -4]}]}}>
            <Pano source={asset('/images/landing.jpg')}/>
            <Text style={{
                height:2, 
                width:2,
                fontSize:0.2,
                fontFamily:"Calibre,serif",
                color:"black",
                borderColor:"black",
                borderWidth:0.1,
                position:'absolute',
                transform:[{translate: [-0.5, 0.3, 0]}] 
                }}>
                Cloud Nine VR
            </Text>
            <Button style={{width:1, 
                height:2, 
                borderWidth:0.1,
                borderColor:'blue', 
                transform:[{translate: [0, -2, -4]}]}}/>
            <Button style={{width:1, 
                height:4, 
                borderWidth:0.1,
                borderColor:'blue', 
                transform:[{translate: [-5, 6, -4]}]}}/>

            <Button style={{width:1, 
                height:6, 
                borderWidth:0.1,
                borderColor:'blue', 
                transform:[{translate: [3, 5, -4]}]}}/> 

            <Button  style= {{
                width: 8.5, 
                height:8.5, 
                backgroundColor:'transparent', 
                borderWidth:0.5,
                borderRadius:100,
                borderColor:'black',
                position:'absolute', 
                transform:[{translate: [-4, 8, -10]}]
            }}
                onClick={props.onClick}/>
        </View>
    );
}

export default LandingView;

