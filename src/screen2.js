import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class Screen2 extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'pink'}}>
          <Text style={{ fontWeight:"bold",
    fontSize:50,
    color:"#fffff0",
    marginBottom:40}}>Screen2 khilan</Text>
      </View>
    );
  }
}

export default Screen2;