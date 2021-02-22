import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Screen1 from './screen1';
import Screen2 from './screen2';
const Tab = createMaterialTopTabNavigator()

export default class kh extends React.Component {
  
    
  render(){
    return (
      
        <NavigationContainer independent={true}>
            
           <Tab.Navigator  
           tabBarOptions={{
               activeTintColor:'green',
               
           }}
           >
              <Tab.Screen name="Screen1" component={Screen1} />
              <Tab.Screen name="Screen2" component={Screen2} />
            </Tab.Navigator>
        </NavigationContainer>
        
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"blue",
    marginBottom:40
  },
  
  forgot:{
    color:"white",
    fontSize:11
  },
 
});