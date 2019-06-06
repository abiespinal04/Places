import React, { Component } from 'react';
import {View, Text} from 'react-native'



const PlaceList = (props) => {
    return ( 
        <View>
          
                {props.placeList}
           
        </View>
     );
}
 
export default PlaceList;