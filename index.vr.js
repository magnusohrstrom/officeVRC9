import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Scene,
  Text,
  View,
  Image, 
  Box,
  VrButton
} from 'react-vr';
import Button from './components/Button';

export default class officeVRC9 extends React.Component {
  state = {
    room:1
  }

  log = () => {
    console.log('hejsy');
  }


  render() {
    return (
   
     
     <View style={{display:'flex', flexDirection:'column', height:"200px", width:"200px"}}>
      <Pano style={{marginBottom:60}} onLoad = {()=>{console.log('loadyd');
      }}source={asset('skola.jpg')}/>
        <View style={{
            flex: 1,
            flexDirection: 'column',
            width: 2,
            alignItems: 'stretch',
            transform: [{translate: [-1, 1, -5]}],
          }}>

          <View pointerEvents = 'auto' onPress = {this.log} style={{ margin: 0.1, height: 0.3, backgroundColor: 'red'}}>
            <Text pointerEvents = 'auto'   style={{fontSize: 0.2, textAlign: 'center'}}>Red</Text>
          </View>

        </View>
        <Button style= {{width: 2.7, 
                transform:[{translate: [-10, 0, -10]},
                {rotateY:"90deg"}]}}
                onClick = {this.log}
                sourceUrl = 'magnus2.jpg'
                /> 
        <Text onPress = {this.log}
          style={{
            backgroundColor: '#777879',

            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'left',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -7]}],
          }}>
          hello
        </Text>
      </View> 

    );
  }
};

AppRegistry.registerComponent('officeVRC9', () => officeVRC9);
