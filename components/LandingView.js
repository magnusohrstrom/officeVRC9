import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  Image,
  Box,
  Svg
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
                fontFamily:"Helvetica",
                color:"black",
                borderColor:"black",
                borderWidth:0.1,
                position:'absolute',
                transform:[{translate: [-0.4, 0.5, 0]}] 
                }}>
                Cloud Nine VR
            </Text> 

            <Button buttonStyle={{width:1, 
                height:2, 
                borderWidth:0.1,
                borderColor:'pink', 
                transform:[{translate: [0, -2, -4]}]}}/>
            <Button buttonStyle={{width:1, 
                height:2, 
                borderWidth:0.1,
                borderColor:'green', 
                transform:[{translate: [-5, 0, -3]},{rotateY:"90deg"}]}}/>
            <Button buttonStyle={{width:2, 
                height:3, 
                borderWidth:0.1,
                borderColor:'blue', 
                transform:[{translate: [-5, 6, -4]},{rotateY:"90deg"}]}}/>
            <Button buttonStyle={{width:4, 
                height:2, 
                borderWidth:0.1,
                borderColor:'pink', 
                transform:[{translate: [3, 10, -4]},{rotateY:"-90deg"}]}}/> 
            <Button buttonStyle={{width:4, 
                height:2, 
                borderWidth:0.1,
                borderColor:'blue', 
                transform:[{translate: [3, 5, -4]},{rotateY:"-90deg"}]}}/> 

            <Button  buttonStyle= {{
                width: 5.5, 
                height:5.5, 
                backgroundColor:'transparent', 
                borderWidth:0.5,
                borderRadius:100,
                borderColor:'black',
                position:'absolute', 
                transform:[{translate: [-2, 4, -10]}]
            }}
                onClick={props.onClick}/>
        </View>
    );
}

export default LandingView;

