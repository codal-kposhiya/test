import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default class forpass extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Codal</Text>
         
         
        <TouchableOpacity 
          onPress = {()=> alert('reset password succeesfully')}
        >
          <Text style={styles.forgot}>reset your Password here </Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => this.props.navigation.navigate('login')}>
          <Text style={styles.forgot}> Successfully reset your Password </Text>
        </TouchableOpacity>
  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9FA8DA',
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