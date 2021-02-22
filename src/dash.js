import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
 

import kh from './kh';
import contact from './contact';
import info from './info';
 
import App from '../App';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=> {
    //Structure for the navigatin Drawer
    const toggleDrawer = () => {
      //Props to open/close the drawer
      props.navigationProps.toggleDrawer();
    };
  
    return (
        
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={()=> toggleDrawer()}>
          {/*Donute Button Image */}
          <Image
            source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
            style={{
              width: 25,
              height: 25,
              marginLeft: 5
            }}
          />
        </TouchableOpacity>
      </View>
      
    );
  }

  function khScreenStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="kh">
        
          <Stack.Screen
            name="kh"
            component={kh}
            options={{
              title: 'Home Page', //Set Header Titlex
              headerLeft: ()=>
                <NavigationDrawerStructure
                  navigationProps={navigation}
                />,
                
              headerStyle: {
                backgroundColor: '#9FA8DA', //Set Header color
                
              },
              
              headerTintColor: '#fff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
            }}
          />
        </Stack.Navigator>
    );
  }
  function ContactScreenStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="ContactPage">
        
          <Stack.Screen
            name="contactPage"
            component={contact}
            options={{
              title: 'contact Page', //Set Header Title
              headerLeft: ()=>
                <NavigationDrawerStructure
                  navigationProps={navigation}
                />,
              headerStyle: {
                backgroundColor: '#9FA8DA', //Set Header color
              },
              headerTintColor: '#fff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
            }}
          />
        </Stack.Navigator>
    );
  }
  function infoScreenStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="infoPage">
        
          <Stack.Screen
            name="infoPage"
            component={info}
            options={{
              title: 'info Page', //Set Header Title
              headerLeft: ()=>
                <NavigationDrawerStructure
                  navigationProps={navigation}
                />,
              headerStyle: {
                backgroundColor: '#9FA8DA', //Set Header color
              },
              headerTintColor: '#fff', //Set Header text color
              headerTitleStyle: {
                fontWeight: 'bold', //Set Header text style
              },
            }}
          />
        </Stack.Navigator>
    );
  }
  function logoutScreenStack({ navigation }) {
    return (
    
        <Stack.Navigator initialRouteName="logout"    >
           
          <Stack.Screen
          
            name="logout"
            component={App}
            options={{ headerShown: false , independent:'true', headerLeft: null,
             gestureEnabled:false
             
          }}
          
           
            
          />  
          
        </Stack.Navigator>
    );
  }
  
 

export default class dash extends React.Component {
 
    
  
 
  render(){
    return (
        <NavigationContainer independent='true'  style={{backgroundColor:'black'} }>
      
      <Drawer.Navigator
      
        drawerContentOptions={{
          activeTintColor: 'blue',   
          
          itemStyle: { marginVertical: 5, maxHeight:50},
          swipeEnabled:false,
          gestureEnabled:false

          
        }}>
          
          
        <Drawer.Screen
          name="kh"
          options={{ drawerLabel: 'Home page Option' }}
          component={khScreenStack} />
        <Drawer.Screen
          name="Contact"
          options={{ drawerLabel: 'Contact page Option' }}
          component={ContactScreenStack} />
        <Drawer.Screen
          name="INFO"
          options={{ drawerLabel:'INFORMATION'}}
          component={infoScreenStack} />
          <Drawer.Screen
          name="Logout"
          options={{ drawerLabel:'Logout', swipeEnabled: false}}
          component={logoutScreenStack}  />
         
     
      </Drawer.Navigator>
     
    
    </NavigationContainer>
      
    );
  }
}

 