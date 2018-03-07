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
  VrButton,
  Animated
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
    showArtwork:null
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

  toggleShowArtworkState = (x) => {
    this.state.showArtwork === null ? this.setState({ showArtwork: x }) 
    : this.setState({showArtwork:null}); 
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
          
          <Button onClick = {()=>{this.toggleShowArtworkState(0)}} 
            buttonStyle = {{
            width: 3.7,
            height:3.7, 
            borderColor:"#05B2DC",
            borderWidth:0.1,
            transform:[{translate: [-10, 4, -10]},
            {rotateY:"90deg"}]
          }}/>
          { showArtwork === 0 ? 
            <Artwork 
              artworkText = "artwork text" 
              sourceUrl = {asset(tourList[roomCounter].artList[0])}
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
              />:null
          }

          <Button onClick = {()=>{this.toggleShowArtworkState(1)}} 
            buttonStyle = {{
            width: 3.7,
            height:3.7, 
            borderColor:"#05B2DC",
            borderWidth:0.1,
            transform:[{translate: [-10, 4, 10]},
            {rotateY:"90deg"}]
            }}
          />
          { showArtwork === 1 ? 
            <Artwork 
              artworkText = "artwork text" 
              sourceUrl = {asset(tourList[roomCounter].artList[1])}
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
                transform:[{translate:[-10, 6, 10]},{rotateY:"120deg"}]
                }}
              />:null
          }
          <Button onClick = {()=>{this.toggleShowArtworkState(2)}} 
            buttonStyle = {{
            width: 3.7,
            height:3.7, 
            borderColor:"#05B2DC",
            borderWidth:0.1,
            transform:[{translate: [-10, 2, 10]},
            {rotateY:"90deg"}]
            }}
          />
          { showArtwork === 2 ? 
            <Artwork 
              artworkText = "artwork text" 
              sourceUrl = {asset(tourList[roomCounter].artList[2])}
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
                transform:[{translate:[-10, 6, 10]},{rotateY:"120deg"}]
                }}
              />:null
          }
          <Button onClick = {()=>{this.toggleShowArtworkState(3)}} 
            buttonStyle = {{
            width: 3.7,
            height:3.7, 
            borderColor:"#05B2DC",
            borderWidth:0.1,
            transform:[{translate: [-10, 2, 10]},
            {rotateY:"90deg"}]
            }}
          />
          { showArtwork === 3 ? 
            <Artwork 
              artworkText = "artwork text" 
              sourceUrl = {asset(tourList[roomCounter].artList[3])}
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
                transform:[{translate:[-10, 2, 10]},{rotateY:"120deg"}]
                }}
              />:null
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
          <NextRoomButton
            translateCoordinates = {{translate:[0,0,10]}}
            onClick = {this.changeRoomBySetStateOfRoomCounter}
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
          <NextRoomButton
            translateCoordinates = {{translate:[0,0,10]}}
            onClick = {this.changeRoomBySetStateOfRoomCounter}
          />
        </View>
      }
    </View>
    );
  }
};

AppRegistry.registerComponent('officeVRC9', () => officeVRC9);
