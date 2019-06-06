import React, { Component } from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native'

class PlaceInput extends Component {
    state = {
        placeName :'',
      }
    
      handleTextInput = (val) => {
        this.setState({placeName:val})
      }
    
      handlePlacesSubmit = (placeName) => {
        if(this.state.placeName.trim() === ""){
          return
        }
        this.props.onPlaceAdded(this.state.placeName)
      }
    
    render() { 
        return ( 
            <View style={styles.textInputContainer}>
            <TextInput 
             value={this.state.placeName}
            style={[
             styles.textInput,
             {color:'white', borderColor:'black', 
              borderWidth:3,backgroundColor:'grey'
            }
            ]}
            onChangeText={(value) => this.handleTextInput(value)}
            placeholder='Write here...'
           
            />
            <TouchableOpacity
             onPress = {this.handlePlacesSubmit}
            ><Text>Add</Text>
            </TouchableOpacity>
            </View>
         );
    }
}
 
const styles = StyleSheet.create({
    textInputContainer: {
        flexDirection:'row', 
        justifyContent:'space-evenly',
        marginTop:20
      },
      textInput:{
        width:'70%'
      },
})
export default PlaceInput;