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
import NextRoomButton from './components/NextRoomButton';
import Room from './components/Room';
import tourData from './static_assets/tourData';
import Button from './components/Button';
import LoadingScreen from './components/LoadingScreen';

export default class officeVRC9 extends React.Component {
  state = {
    tourList:[],
    roomCounter:null,
    roomImageUrl:'images/skola.jpg',
    currentRoom:{},
    tourIsStarted:false
  }

  log = () => {
    this.setState({roomCounter:this.state.roomCounter+1});
    console.log(this.state.tourList[this.state.roomCounter].sourceUrl);
  }

  startTour = () => {
    this.setState({
      tourIsStarted:true,
      roomCounter:0
    });
  }

  componentWillMount = () => {
    this.setState({
      tourList: tourData
    });  
  }
  render() {
    const {roomCounter, tourIsStarted, roomImageUrl, currentRoom, tourList } = this.state;
    return (
    <View>
       {!tourIsStarted && 
        <LoadingScreen onClick={this.startTour}/>
      } 
      {roomCounter === 0 &&
        <View>
          <Pano source={asset(tourList[roomCounter].sourceUrl)}/>
          <NextRoomButton
            translateCoordinates = {{translate:[0,2,-10]}}
            onClick = {this.log}
            /> 
          <Button onClick={()=>{console.log('art pressed')}} style = {{
            width: 2.7,
            height:2.7, 
            //borderColor:"red",
           // borderWidth:1,
            transform:[{translate: [-10, 4, -10]},
            {rotateY:"90deg"}]
          }}/>
        </View>
      }
      {roomCounter === 1 &&
        <View>
          <Pano source={asset(tourList[roomCounter].sourceUrl)}/>
          <NextRoomButton 
            translateCoordinates = {{translate:[0,-2,-10]}}
            onClick = {this.log}
            /> 
            <Button style= {{width: 2.7, 
            transform:[{translate: [-10, 0, -10]},
            {rotateY:"90deg"}]}}
            onClick = {this.log}
            /> 
        </View>
      }
      {roomCounter === 2 &&
        <View>
          <Pano source={asset(tourList[roomCounter].sourceUrl)}/>
          <NextRoomButton 
            translateCoordinates = {{translate:[0,4,-10]}}
            onClick = {this.log}
            /> 
        </View>
      }
      
    </View>
    );
  }
};

AppRegistry.registerComponent('officeVRC9', () => officeVRC9);
