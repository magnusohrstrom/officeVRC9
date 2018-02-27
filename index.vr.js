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
import LandingView from './components/LandingView';
import Artwork from './components/Artwork';

export default class officeVRC9 extends React.Component {
  state = {
    tourList:[],
    roomCounter:null,
    roomImageUrl:'images/skola.jpg',
    currentRoom:{},
    tourIsStarted:false,
    showArtwork:false
  }

  changeRoomBySetStateOfRoomCounter = (x) => {
    x==="next" ? this.setState({roomCounter:this.state.roomCounter+1})
    :this.setState({roomCounter:this.state.roomCounter-1});
  }

  loggy = () => {
    console.log('loggy');    
  }

  startTour = () => {
    this.setState({
      tourIsStarted:true,
      roomCounter:0
    });
  }

  toggleShowArtworkState= () => {
    !this.state.showArtwork ? this.setState({ showArtwork:true }) 
    : this.setState({showArtwork:false}); 
  }

  componentWillMount = () => {
    this.setState({
      tourList: tourData
    });  
  }
  render() {
    const {roomCounter, tourIsStarted, roomImageUrl, currentRoom, tourList, showArtwork } = this.state;
    return (
    <View>
       {!tourIsStarted && 
        <LandingView onClick={this.startTour}/>
      }
      {roomCounter === 0 &&
        <View>
          <Pano source = {asset(tourList[roomCounter].sourceUrl)}/>
          <NextRoomButton
            translateCoordinates = {{translate:[0,0,-10]}}
            onClick = {()=>{this.changeRoomBySetStateOfRoomCounter('next')}}
            />
            <NextRoomButton
            translateCoordinates = {{translate:[0,0,10]}}
            onClick = {this.changeRoomBySetStateOfRoomCounter}
            />  
          <Button onClick = {this.toggleShowArtworkState} 
            buttonStyle = {{
            width: 3.7,
            height:3.7, 
            borderColor:"#05B2DC",
            borderWidth:0.1,
            transform:[{translate: [-10, 4, -10]},
            {rotateY:"90deg"}]
          }}/>
          { showArtwork && 
            <Artwork 
              artworkText = "artwork text" 
              sourceUrl = {asset('images/mountain.jpg')}
              buttonStyle ={{
                width:7.6,
                height:7
              }}
              imageStyle={{width:7.6, height:7}}
              onClick = {this.toggleShowArtworkState}
              viewStyle= {{
                position:'absolute',
                width:8,
                height:8,
                flexDirection:"column", 
                padding:0.2, 
                backgroundColor:"white", 
                transform:[{translate:[-10, 6, -10]},{rotateY:"45deg"}]
                }}
              />
          } 
        </View>
      }
      {roomCounter === 1 &&
        <View>
          <Pano source={asset(tourList[roomCounter].sourceUrl)}/>
          <NextRoomButton 
            translateCoordinates = {{translate:[0,-2,-10]}}
            onClick = {()=>{this.changeRoomBySetStateOfRoomCounter('next')}}
            /> 
            <Button buttonStyle= {{width: 2.7, 
            transform:[{translate: [-10, 0, -10]},
            {rotateY:"90deg"}]}}
            onClick = {this.changeRoomBySetStateOfRoomCounter}
            /> 
        </View>
      }
      {roomCounter === 2 &&
        <View>
          <Pano source={asset(tourList[roomCounter].sourceUrl)}/>
          <NextRoomButton 
            translateCoordinates = {{translate:[ 0, 4, -10]}}
            onClick = {()=>{this.changeRoomBySetStateOfRoomCounter('next')}}
            /> 
        </View>
      }
      
    </View>
    );
  }
};

AppRegistry.registerComponent('officeVRC9', () => officeVRC9);
