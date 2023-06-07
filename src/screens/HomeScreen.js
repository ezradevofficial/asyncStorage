import {
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import GlobalStyles from '../utils/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}) => {
  const [name, setName] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem('UserName').then(value => {
        if (value != null) {
          setName(value);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async () => {
    if (name.length == 0) {
      Alert.alert('Warning!', 'Please write your name');
    } else {
      try {
        await AsyncStorage.setItem('UserName', name);
        Alert.alert('Success!', 'Name updated successfuly...');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('UserName');
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={GlobalStyles.CenterContent}>
      <Text style={[GlobalStyles.BlackText, styles.mainText]}>Welcome {name}!</Text>

      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={value => setName(value)}
      />
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={updateData}>
        <Text style={styles.text}>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.touchableOpacity, {backgroundColor: '#f40100'}]} onPress={removeData}>
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    fontSize: 24,
    textAlign: 'center',
    width: 300,
    backgroundColor: '#fff',
    marginTop: 100,
  },
  touchableOpacity: {
    backgroundColor: '#ff7f00',
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
  mainText: {
    fontSize: 48,
    fontWeight: 'bold',
    fontStyle: 'italic'
  }
});

export default HomeScreen;
