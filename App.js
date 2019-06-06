/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text,TextInput,TouchableOpacity, View} from 'react-native';
import ListItem from './src/components/ListItem/ListItem'
import PlaceInput from './src/components/PlaceInput/PlaceInput'
import PlaceList from './src/components/PlaceList/PlaceList'

export default class App extends Component {
  state = {
    places:[]
  }

  handlePlacesSubmit = (placeName) => {

    this.setState(prevState => {
      return{
        places: prevState.places.concat(placeName)
      }
    })
  }

  render() {
    const placesList = this.state.places.map((place, index) => (
      <ListItem key={index} placeName={place}/>
    ))
    return (
      <View style={styles.container}>
        <PlaceInput
        onPlaceAdded={this.handlePlacesSubmit}
        />
       <PlaceList
       placeList={placesList}
       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  button:{
    width:'30%'
  },
  listContainer:{
    width:'100%',
    alignSelf:'center'
  }
  
});
