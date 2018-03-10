// import React, { Component } from 'react';   
// import PropTypes from 'prop-types';
// import {
//     AppRegistry,
//     asset,
//     Pano,
//     Scene,
//     Text,
//     View,
//     Image, 
//     Box
//   } from 'react-vr';

// class Testy extends Component {
//     render() {
//         return (
// <View>
//     <Pano source = {asset(tourList[roomCounter].sourceUrl)}/>
//     <NextRoomButton
//     translateCoordinates = {{translate:[0,0,-10]}}
//     onClick = {()=>{this.changeRoomBySetStateOfRoomCounter('next')}}
//     />
//     <Testy/>
//     <Button onClick = {()=>{this.toggleShowArtworkState(0)}} 
//     buttonStyle = {{
//     width: 3.7,
//     height:3.7, 
//     position:"absolute",
//     transform:[{translate: [-11, 5, -3]},
//     {rotateY:"90deg"}]
//     }}
//     />
//     { showArtwork === 0 ? 
//     <Artwork 
//         artworkTitle = {tourList[0].artList[0].title} 
//         artworkArtist = {tourList[0].artList[0].artist}
//         textStyleTitle={{color:'white', fontSize:0.3}}
//         textStyleArtist={{color:'white', fontSize:0.2}}  
//         buttonStyle ={{
//         width:7.6,
//         height:7
//         }}
        
//         onClick = {this.toggleShowArtworkState}
//         viewStyle= {{
//         position:'absolute',
//         width:8,
//         height:8,
//         flexDirection:"column", 
//         padding:0.2, 
//         transform:[{translate:[-10, 10, -5]},{rotateY:"70deg"}]
//         }}
//         />:null
//     }

//     <Button onClick = {()=>{this.toggleShowArtworkState(1)}} 
//     buttonStyle = {{
//     width: 5.7,
//     height:6.7, 
//     position:"absolute",
//     transform:[{translate: [-12.5, 3, -10]},
//     {rotateY:"90deg"}]
//     }}/>
//     { showArtwork === 1 ? 
//     <Artwork 
//         artworkTitle = {tourList[0].artList[1].title} 
//         artworkArtist = {tourList[0].artList[1].artist}
//         textStyleTitle={{color:'white', fontSize:0.5}}
//         textStyleArtist={{color:'white', fontSize:0.4}}
//         buttonStyle ={{
//         width:7.6,
//         height:7
//         }}
//         onClick = {this.toggleShowArtworkState}
//         viewStyle= {{
//         position:'absolute',
//         width:8,
//         height:8,
//         flexDirection:"column", 
//         padding:0.2, 
        
//         transform:[{translate:[-10, 6, -10]},{rotateY:"45deg"}]
//         }}
//         />:null
//     }


//     <Button onClick = {()=>{this.toggleShowArtworkState(2)}} 
//     buttonStyle = {{
//     width: 5.7,
//     height:5.7,
//     position:"absolute", 
//     transform:[{translate: [-11, 2, -21]},
//     {rotateY:"90deg"}]
//     }}
//     />
//     { showArtwork === 2 ? 
//     <Artwork 
//         artworkTitle = {tourList[0].artList[2].title} 
//         artworkArtist = {tourList[0].artList[2].artist}
//         textStyleTitle={{color:'white', fontSize:0.8}}
//         textStyleArtist={{color:'white', fontSize:0.7}}
//         buttonStyle ={{
//         width:7.6,
//         height:7
//         }}
//         onClick = {this.toggleShowArtworkState}
//         viewStyle= {{
//         position:'absolute',
//         width:8,
//         height:8,
//         flexDirection:"column", 
//         padding:0.2, 
        
//         transform:[{translate:[-11, 6, -27]},{rotateY:"40deg"}]
//         }}
//         />:null
//     }
//     <Button onClick = {()=>{this.toggleShowArtworkState(3)}} 
//     buttonStyle = {{
//     width: 4.7,
//     height:4.7,
//     position:'absolute', 
//     transform:[{translate: [-3.5, 5.5, -27]}]
//     }}
//     />
//     { showArtwork === 3 ? 
//     <Artwork 
//         artworkTitle = {tourList[0].artList[2].title} 
//         artworkArtist = {tourList[0].artList[2].artist}
//         textStyleTitle={{color:'white', fontSize:0.8}}
//         textStyleArtist={{color:'white', fontSize:0.7}}
//         buttonStyle ={{
//         width:7.6,
//         height:7
//         }}
//         onClick = {this.toggleShowArtworkState}
//         viewStyle= {{
//         position:'absolute',
//         width:8,
//         height:8,
//         flexDirection:"column", 
//         padding:0.2, 
        
//         transform:[{translate:[-2, 8.5, -27]}]
//         }}
//         />:null
//     }      
// </View>
//         )
  
//     }
// }

// export default Testy;
  