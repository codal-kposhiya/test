import React, { useState }  from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Button, TextInput, StyleSheet,TouchableOpacity,Text } from 'react-native';
import { mockLogin } from './services/mockLoginServer';
import dash from './src/dash';
import forpass from './src/forpass';
import signup from './signup';

const Login = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    if (email.length > 0 && password.length > 0) {
      await mockLogin(email, password).then(accesToken => {
        setAccesToken(accesToken);
        navigation.navigate(dash);
      });
    }
  };

  const setAccesToken = async (accessToken) => {
    await AsyncStorage.setItem('accessToken', accessToken);
    await AsyncStorage.setItem('email', email);
  };

  return (
    <View style={styles.view}>
      <TextInput
        value={email}
        onChangeText={(newEmail) => setEmail(newEmail)}
        label="Email"
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
        label="Password"
        secureTextEntry={true}
        style={styles.input}
        placeholder="Password"
      />
      <Button
        title={'Login'}
        onPress={login}
      />
         <Button
          title="Signup"
          onPress={() => navigation.navigate(signup)}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: 'gray',
    width: '50%',
    borderWidth: 1,
    padding: 10,
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Login;