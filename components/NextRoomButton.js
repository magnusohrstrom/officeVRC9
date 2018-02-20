import React from 'react';
import Button from './Button.js';

const NextRoomButton = (props) => {
    let hej = {transform:[{translate: [0, 0, -10]}]};
    return (
        <Button 
        style = {{
            width: 0.5, 
            height:0.5, 
            backgroundColor:'transparent', 
            borderWidth:0.1,
            borderRadius:100,
            borderColor:'black',
            transform: [props.translateCoordinates] 
            }}
        {...props}/>        
    );
}

export default NextRoomButton;
