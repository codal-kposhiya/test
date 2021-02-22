import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import Login from './Login';
import Profile from './Profile';
import dash from './src/dash';
 
import signup from './signup';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer independent='true' >
     <Stack.Navigator initialRouteName="Home" 
      screenOptions={{

        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#008080',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}> 
       <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="Profile" component={Profile} />
       <Stack.Screen name="signup" component={signup} />
       <Stack.Screen name="dash" component={dash} options={{ headerShown: false}}/>
     </Stack.Navigator>
     
   </NavigationContainer>
  );
}
export default App;