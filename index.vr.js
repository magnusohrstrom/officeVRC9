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
import tourData from './static_assets/tourData';
import Button from './components/Button';
import LandingView from './components/LandingView';
import Artwork from './components/Artwork';
import Testy from './components/Testy';
import WelcomeText from './components/WelcomeText';


export default class officeVRC9 extends React.Component {
  state = {
    tourList:[],
    roomCounter:6,
    currentRoom:tourData[6],
    tourIsStarted:false,
    showArtwork:null
  }

  changeRoomBySetStateOfRoomCounter = (x) => {
    if(x==="next"){
      this.setState({
        roomCounter:this.state.roomCounter+1,
        currentRoom:this.state.tourList[this.state.roomCounter+1],
        showArtwork:null,
        tourIsStarted:true
        
      })
    }
    else{
      this.setState({
        roomCounter:this.state.roomCounter-1,
        currentRoom:this.state.tourList[this.state.roomCounter-1],
        showArtwork:null,
        tourIsStarted:true
    });}
  }

  setRoomToCustomByButtonClick = (x) => {
      this.setState({
        currentRoom:this.state.tourList[x],
        roomCounter:x,
        showArtwork:null
      });
  }

  startTour = () => {
    this.setState({
      tourIsStarted:true,
      roomCounter:0
    });
  }

  toggleShowArtworkState = (x) => {
    !this.state.showArtwork === null || this.state.showArtwork === x ? 
    this.setState({showArtwork:null, tourIsStarted:true})  
    :this.setState({ showArtwork: x, tourIsStarted:true }) ; 
  }

  componentWillMount = () => {
    this.setState({
      tourList: tourData
    });  
  }

  render() {
  const {roomCounter, tourIsStarted, currentRoom, tourList, showArtwork } = this.state;
    
    return (
    <View>
        {!tourIsStarted && <WelcomeText onClick={this.startTour}/>}
        {roomCounter !== null && <View>
           <Pano source = {asset(currentRoom.sourceUrl)}/>
          {roomCounter !== 9 && <NextRoomButton
            arrowColor = "images/Resurs4.png"
            translateCoordinates = {currentRoom.nextButtonPosition}
            onClick = {()=>{this.changeRoomBySetStateOfRoomCounter('next')}}
            />
          }
          {roomCounter !== 0 && <NextRoomButton
            arrowColor = "images/Resurs6.png"
            translateCoordinates = {currentRoom.backButtonPosition}
            onClick = {this.changeRoomBySetStateOfRoomCounter}
          />}
          {roomCounter === 3 && 
            <NextRoomButton
            arrowColor = "images/Resurs4.png"
            translateCoordinates = {currentRoom.shortcutButtonPosition}
            onClick = {()=>{this.setRoomToCustomByButtonClick(5)}}
          />
          }

          {roomCounter === 9 && <NextRoomButton
            arrowColor = "images/Resurs6.png"
            translateCoordinates = {currentRoom.nextButtonPosition}
            onClick = {()=>{this.setRoomToCustomByButtonClick(6)}}
            />}
          { currentRoom.artList[0] && <Button onClick = {()=>{this.toggleShowArtworkState(0)}} 
            buttonStyle = {{
            width: currentRoom.artList[0].buttonWidth,
            height:currentRoom.artList[0].buttonHeight,
            position:"absolute",
            transform: currentRoom.artList[0].buttonPosition
            }}
          />}
          { showArtwork === 0 ? 
            <Artwork 
              artworkTitle = {currentRoom.artList[0].title} 
              artworkArtist = {currentRoom.artList[0].artist}
              textStyleTitle={{color:'white', fontSize:0.5,
              fontWeight:"600"}}
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
                transform: currentRoom.artList[0].artworkPosition
                }}
              />:null
          }

          {currentRoom.artList[1] && <Button onClick = {()=>{this.toggleShowArtworkState(1)}} 
            buttonStyle = {{
            width: currentRoom.artList[1].buttonWidth,
            height:currentRoom.artList[1].buttonHeight,

            position:"absolute",
            transform:currentRoom.artList[1].buttonPosition
          }}/>
          }
          { showArtwork === 1 ? 
            <Artwork 
              artworkTitle = {currentRoom.artList[1].title} 
              artworkArtist = {currentRoom.artList[1].artist}
              textStyleTitle={{color:'white', fontSize:0.5,
              fontWeight:"600"}}
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
                 
                transform:currentRoom.artList[1].artworkPosition
                }}
              />:null
          }

          
          { currentRoom.artList[2] && <Button onClick = {()=>{this.toggleShowArtworkState(2)}} 
            buttonStyle = {{
            width: currentRoom.artList[2].buttonWidth,
            height:currentRoom.artList[2].buttonHeight,
            
            position:"absolute", 
            transform:currentRoom.artList[2].buttonPosition
            }}
          />}
          { showArtwork === 2 ? 
            <Artwork 
              artworkTitle = {currentRoom.artList[2].title} 
              artworkArtist = {currentRoom.artList[2].artist}
              textStyleTitle={{
                color:'white', 
                fontSize:0.8,
                fontWeight:"600"
              }}
              textStyleArtist={{
                color:'white', 
                fontSize:0.7
              }}
              buttonStyle ={{
                width:7.6,
                height:7,
                
              }}
              onClick = {this.toggleShowArtworkState}
              viewStyle= {{
                position:'absolute',
                width:8,
                height:8,
                flexDirection:"column", 
                padding:0.2,
                transform:currentRoom.artList[2].artworkPosition
                }}
              />:null
          }
          { currentRoom.artList[3] && <Button onClick = {()=>{this.toggleShowArtworkState(3)}} 
            buttonStyle = {{
            width: currentRoom.artList[3].buttonWidth,
            height:currentRoom.artList[3].buttonHeight,
            
            position:'absolute', 
            transform:currentRoom.artList[3].buttonPosition
            }}
          />}
          { showArtwork === 3 ? 
            <Artwork 
              artworkTitle = {currentRoom.artList[3].title} 
              artworkArtist = {currentRoom.artList[3].artist}
              textStyleTitle={{color:'white', fontSize:0.8,
              fontWeight:"600"}}
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
                
                transform:currentRoom.artList[3].artworkPosition
                }}
              />:null
          }
          { currentRoom.artList[4] && <Button onClick = {()=>{this.toggleShowArtworkState(4)}} 
            buttonStyle = {{
            width: currentRoom.artList[4].buttonWidth,
            height:currentRoom.artList[4].buttonHeight,
            
            position:'absolute', 
            transform:currentRoom.artList[4].buttonPosition
            }}
          />}
          { showArtwork === 4 ? 
            <Artwork 
              artworkTitle = {currentRoom.artList[4].title} 
              artworkArtist = {currentRoom.artList[4].artist}
              textStyleTitle={{color:'white', fontSize:0.8,
                fontWeight:"600"}}
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
                
                transform:currentRoom.artList[4].artworkPosition
                }}
              />:null
          }
          { currentRoom.artList[5] && <Button onClick = {()=>{this.toggleShowArtworkState(5)}} 
            buttonStyle = {{
            width: currentRoom.artList[5].buttonWidth,
            height:currentRoom.artList[5].buttonHeight,
            
            position:'absolute', 
            transform:currentRoom.artList[5].buttonPosition
            }}
          />}
          { showArtwork === 5 ? 
            <Artwork 
              artworkTitle = {currentRoom.artList[5].title} 
              artworkArtist = {currentRoom.artList[5].artist}
              textStyleTitle={{color:'white', fontSize:0.8,
                fontWeight:"600"}}
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
                
                transform:currentRoom.artList[5].artworkPosition
                }}
              />:null
          }
          { currentRoom.artList[6] && <Button onClick = {()=>{this.toggleShowArtworkState(6)}} 
            buttonStyle = {{
            width: currentRoom.artList[6].buttonWidth,
            height:currentRoom.artList[6].buttonHeight,
            
            position:'absolute', 
            transform:currentRoom.artList[6].buttonPosition
            }}
          />}
          { showArtwork === 6 ? 
            <Artwork 
              artworkTitle = {currentRoom.artList[6].title} 
              artworkArtist = {currentRoom.artList[6].artist}
              textStyleTitle={{color:'white', fontSize:0.8,
                fontWeight:"600"}}
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
                
                transform:currentRoom.artList[6].artworkPosition
                }}
              />:null
          }
          { currentRoom.artList[7] && <Button onClick = {()=>{this.toggleShowArtworkState(7)}} 
            buttonStyle = {{
            width: currentRoom.artList[7].buttonWidth,
            height:currentRoom.artList[7].buttonHeight,
            
            position:'absolute', 
            transform:currentRoom.artList[7].buttonPosition
            }}
          />}
          { showArtwork === 7 ? 
            <Artwork 
              artworkTitle = {currentRoom.artList[7].title} 
              artworkArtist = {currentRoom.artList[7].artist}
              textStyleTitle={{color:'white', fontSize:0.8,
                fontWeight:"600"}}
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
                
                transform:currentRoom.artList[7].artworkPosition
                }}
              />:null
          }
           { currentRoom.artList[8] && <Button onClick = {()=>{this.toggleShowArtworkState(8)}} 
            buttonStyle = {{
            width: currentRoom.artList[8].buttonWidth,
            height:currentRoom.artList[8].buttonHeight,
             
            position:'absolute', 
            transform:currentRoom.artList[8].buttonPosition
            }}
          />}
          { showArtwork === 8 ? 
            <Artwork 
              artworkTitle = {currentRoom.artList[8].title} 
              artworkArtist = {currentRoom.artList[8].artist}
              textStyleTitle={{color:'white', fontSize:0.8,
                fontWeight:"600"}}
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
                
                transform:currentRoom.artList[8].artworkPosition
                }}
              />:null
          }
          { currentRoom.artList[9] && <Button onClick = {()=>{this.toggleShowArtworkState(9)}} 
            buttonStyle = {{
            width: currentRoom.artList[9].buttonWidth,
            height:currentRoom.artList[9].buttonHeight,
            
            position:'absolute', 
            transform:currentRoom.artList[9].buttonPosition
            }}
          />}
          { showArtwork === 9 ? 
            <Artwork 
              artworkTitle = {currentRoom.artList[9].title} 
              artworkArtist = {currentRoom.artList[9].artist}
              textStyleTitle={{color:'white', fontSize:0.8,
                fontWeight:"600"}}
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
                
                transform:currentRoom.artList[9].artworkPosition
                }}
              />:null
          }
          { currentRoom.artList[10] && <Button onClick = {()=>{this.toggleShowArtworkState(10)}} 
            buttonStyle = {{
            width: 4.7,
            height:4.7,
            
            position:'absolute', 
            transform:currentRoom.artList[10].buttonPosition
            }}
          />}
          { showArtwork === 10 ? 
            <Artwork 
              artworkTitle = {currentRoom.artList[10].title} 
              artworkArtist = {currentRoom.artList[10].artist}
              textStyleTitle={{color:'white', fontSize:0.8,
                fontWeight:"600"}}
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
                
                transform:currentRoom.artList[10].artworkPosition
                }}
              />:null
          }
        </View>
      }
    </View>
    );
  }
};

AppRegistry.registerComponent('officeVRC9', () => officeVRC9);
