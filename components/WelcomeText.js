import React from 'react';
import {
  asset,
  Text,
  View,
  Image,
  Animated
} from 'react-vr';
import Button from './Button';

import React from 'react';

const WelcomeText = (props) => {
    return (
        <View>
            <Text>Välkommen till ansfoianoia</Text>
            <Button {...props}/>
        </View>
    );
}

export default WelcomeText;
