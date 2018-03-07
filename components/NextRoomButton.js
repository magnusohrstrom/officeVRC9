import React from 'react';
import { View } from 'react-vr';
import Button from './Button.js';

const NextRoomButton = (props) => {
    let hej = {transform:[{translate: [0, 0, -10]}]};
    return (
       <View>
            <Button 
                buttonStyle = {{
                width: 0.5, 
                height:0.5, 
                backgroundColor:'transparent', 
                borderWidth:0.1,
                borderRadius:100,
                borderColor:'black',
                position:"absolute",
                transform: [props.translateCoordinates] 
                }}
            {...props}/>   
        </View>      
    );
}

export default NextRoomButton;
