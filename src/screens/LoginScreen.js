import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  StyleSheet,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}) => {
  const [name, setName] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem('UserName').then(value => {
        if (value != null) {
          navigation.navigate('Home#');
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setData = async () => {
    if (name.length == 0) {
      Alert.alert('Warning!', 'Please write your name');
    } else {
      try {
        await AsyncStorage.setItem('UserName', name);
        navigation.navigate('Home#');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.view}>
      <Image
        style={styles.image}
        source={require('../assets/images/asyncstorage.png')}
      />
      <Text style={styles.title}>Async Storage</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your Name"
        placeholderTextColor={'#999'}
        onChangeText={value => setName(value)}
      />
      <TouchableOpacity style={styles.touchableOpacity} onPress={setData}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#0ff',
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 35,
  },
  title: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 32,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    fontSize: 24,
    textAlign: 'center',
    width: 300,
    backgroundColor: '#fff',
    marginTop: 100,
    color: '#000',
  },
  touchableOpacity: {
    backgroundColor: '#1eb900',
    paddingHorizontal: 10,
    paddingVertical: 15,

    marginTop: 24,
    width: 150,
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
  },
});

export default LoginScreen;
