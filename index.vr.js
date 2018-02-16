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
import Room from './components/Room';
import tourData from './static_assets/tourData';

export default class officeVRC9 extends React.Component {
  state = {
    tourList:[],
    roomCounter:0,
    roomImageUrl:'images/skola.jpg',
    currentRoom:{}
  }

  log = () => {
    this.setState({roomCounter:this.state.roomCounter+1});
    console.log(this.state.tourList[this.state.roomCounter].sourceUrl);
    
  }
  componentWillMount = () => {
    this.setState({
      tourList: tourData
    });
    
  }
  render() {
    const {roomCounter, roomImageUrl, currentRoom, tourList } = this.state;
    return (
    <View>
      {roomCounter === 0 &&
        <View>
          <Pano source={asset(tourList[roomCounter].sourceUrl)}/>
          <Button style= {{width: 2.7, 
            transform:[{translate: [-10, 0, -10]},
            {rotateY:"90deg"}]}}
            onClick = {this.log}
            sourceUrl = 'images/magnus2.jpg'
            /> 
        </View>
      }
      {roomCounter === 1 &&
        <View>
          <Pano source={asset(tourList[roomCounter].sourceUrl)}/>
          <Button style= {{width: 2.7, 
            transform:[{translate: [0, 0, -10]},
            {rotateY:"90deg"}]}}
            onClick = {this.log}
            sourceUrl = 'images/magnus2.jpg'
            /> 
        </View>
      }
      {roomCounter === 2 &&
        <View>
          <Pano source={asset(tourList[roomCounter].sourceUrl)}/>
          <Button style= {{width: 2.7, 
            transform:[{translate: [-10, 0, -10]},
            {rotateY:"90deg"}]}}
            onClick = {this.log}
            sourceUrl = 'images/magnus2.jpg'
            /> 
        </View>
      }
      
    </View>
    );
  }
};

AppRegistry.registerComponent('officeVRC9', () => officeVRC9);
