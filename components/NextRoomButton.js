import React from 'react';
import { View, asset } from 'react-vr';
import Button from './Button.js';

const NextRoomButton = (props) => {
    return (
       <View>
            <Button 
                buttonStyle = {{
                width: 1.5, 
                height:1.5, 
                backgroundColor:'transparent', 
                position:"absolute",
                transform: props.translateCoordinates 
                }}
                sourceUrl = {asset("images/arrowyellow.png")}
                imageStyle={{width:1.2,height:1.2, position:"absolute"}}
            {...props}/>   
        </View>      
    );
}

export default NextRoomButton;
