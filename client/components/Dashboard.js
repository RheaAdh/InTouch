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
export default function Dashboard({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
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
        placeholder="Age"
        onChangeText={(newText) => setEmail(newText)}
        defaultValue={email}
      />
      <TextInput
        secureTextEntry={true}
        style={{ height: 40 }}
        placeholder="Vision"
        onChangeText={(newText) => setPassword(newText)}
        defaultValue={password}
      />
      <TextInput
        secureTextEntry={true}
        style={{ height: 40 }}
        placeholder="Hearing"
        onChangeText={(newText) => setConfirmPassword(newText)}
        defaultValue={confirmPassword}
      />
      <Button onPress={handleSubmit} title="Submit" color="#841584" />
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
