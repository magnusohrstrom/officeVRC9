import React from 'react';
import {
  asset,
  Text,
  Image,
  Animated,
  VrButton
} from 'react-vr';
import Button from './Button';

const WelcomeText = (props) => {
    return (
        <VrButton style={{
            width:3,
            height:2.3,
            backgroundColor:'white',
            borderRadius:0.1,
            padding:0.3,
            position:'absolute',
            transform:[{translate:[-1.5,1.5,-5]}]
            }} onClick={props.onClick}>
            <Text style = {{fontSize:0.20, fontWeight:"500", marginBottom:0.07, color:"black"}}>Varmt välkommen till ..... kontor och ...... konstsamling. </Text>
            <Text style = {{fontSize:0.16, fontWeight:"300", marginBottom:0.2, color:"black"}}>Klicka på de blå pilarna för att navigera dig genom rummen. Klicka på konsten för att visa titel och konstnär. </Text>
            
            <Text style = {{fontSize:0.16, fontWeight:"500", borderWidth:2, borderColor:"white",marginLeft:1.8,color:"black"}}>Stäng</Text>
        </VrButton>
    );
}

export default WelcomeText;
