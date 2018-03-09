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
    roomCounter:0,
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
       {/* {!tourIsStarted && 
        <LandingView onClick={this.startTour}/>
      } */}
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
            position:"absolute",
            transform:[{translate: [-11, 5, -3]},
            {rotateY:"90deg"}]
            }}
          />
          { showArtwork === 0 ? 
            <Artwork 
              artworkTitle = {tourList[0].artList[0].title} 
              artworkArtist = {tourList[0].artList[0].artist}
              textStyleTitle={{color:'white', fontSize:0.3}}
              textStyleArtist={{color:'white', fontSize:0.2}}  
              buttonStyle ={{
                width:7.6,
                height:7
              }}
              
              onClick = {this.toggleShowArtworkState}
              viewStyle= {{
                position:'absolute',
                width:8,
                height:8,
                flexDirection:"column", 
                padding:0.2, 
                transform:[{translate:[-10, 10, -5]},{rotateY:"70deg"}]
                }}
              />:null
          }

          <Button onClick = {()=>{this.toggleShowArtworkState(1)}} 
            buttonStyle = {{
            width: 5.7,
            height:6.7, 
            position:"absolute",
            transform:[{translate: [-12.5, 3, -10]},
            {rotateY:"90deg"}]
          }}/>
          { showArtwork === 1 ? 
            <Artwork 
              artworkTitle = {tourList[0].artList[1].title} 
              artworkArtist = {tourList[0].artList[1].artist}
              textStyleTitle={{color:'white', fontSize:0.5}}
              textStyleArtist={{color:'white', fontSize:0.4}}
              buttonStyle ={{
                width:7.6,
                height:7
              }}
              onClick = {this.toggleShowArtworkState}
              viewStyle= {{
                position:'absolute',
                width:8,
                height:8,
                flexDirection:"column", 
                padding:0.2, 
                 
                transform:[{translate:[-10, 6, -10]},{rotateY:"45deg"}]
                }}
              />:null
          }

          
          <Button onClick = {()=>{this.toggleShowArtworkState(2)}} 
            buttonStyle = {{
            width: 5.7,
            height:5.7,
            position:"absolute", 
            transform:[{translate: [-11, 2, -21]},
            {rotateY:"90deg"}]
            }}
          />
          { showArtwork === 2 ? 
            <Artwork 
              artworkTitle = {tourList[0].artList[2].title} 
              artworkArtist = {tourList[0].artList[2].artist}
              textStyleTitle={{color:'white', fontSize:0.8}}
              textStyleArtist={{color:'white', fontSize:0.7}}
              buttonStyle ={{
                width:7.6,
                height:7
              }}
              onClick = {this.toggleShowArtworkState}
              viewStyle= {{
                position:'absolute',
                width:8,
                height:8,
                flexDirection:"column", 
                padding:0.2, 
                
                transform:[{translate:[-11, 6, -27]},{rotateY:"40deg"}]
                }}
              />:null
          }
          <Button onClick = {()=>{this.toggleShowArtworkState(3)}} 
            buttonStyle = {{
            width: 4.7,
            height:4.7,
            position:'absolute', 
            transform:[{translate: [-3.5, 5.5, -27]}]
            }}
          />
          { showArtwork === 3 ? 
            <Artwork 
              artworkTitle = {tourList[0].artList[2].title} 
              artworkArtist = {tourList[0].artList[2].artist}
              textStyleTitle={{color:'white', fontSize:0.8}}
              textStyleArtist={{color:'white', fontSize:0.7}}
              buttonStyle ={{
                width:7.6,
                height:7
              }}
              onClick = {this.toggleShowArtworkState}
              viewStyle= {{
                position:'absolute',
                width:8,
                height:8,
                flexDirection:"column", 
                padding:0.2, 
                
                transform:[{translate:[-2, 8.5, -27]}]
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
      {roomCounter === 3 &&
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
      {roomCounter === 4 &&
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
      {roomCounter === 5 &&
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
      {roomCounter === 6 &&
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
      {roomCounter === 7 &&
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
      {roomCounter === 8 &&
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
      {roomCounter === 9 &&
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
      {roomCounter === 10 &&
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
      {roomCounter === 11 &&
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
      {roomCounter === 12 &&
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
