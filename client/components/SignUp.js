import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ToastAndroid,
  Button,
} from 'react-native';
import './SignUp.css';
import axios from 'axios';
export default function SignUp({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    console.log('sup');
    navigation.navigate('Dashboard');
  };
  useEffect(() => {
    console.log('useEffect');
  }, []);
  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40 }}
        placeholder="Full Name"
        onChangeText={(newText) => setName(newText)}
        defaultValue={name}
      />
      <TextInput
        style={{ height: 40 }}
        placeholder="Email ID"
        onChangeText={(newText) => setEmail(newText)}
        defaultValue={email}
      />
      <TextInput
        secureTextEntry={true}
        style={{ height: 40 }}
        placeholder="Password"
        onChangeText={(newText) => setPassword(newText)}
        defaultValue={password}
      />
      <TextInput
        secureTextEntry={true}
        style={{ height: 40 }}
        placeholder="Confirm Password"
        onChangeText={(newText) => setConfirmPassword(newText)}
        defaultValue={confirmPassword}
      />
      <Button onPress={handleRegister} title="Register" color="#841584" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
