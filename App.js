import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, BackHandler, Alert, Platform, Image } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

//COLOR
// Green : #7CBA96
// Ungu : #C1BEF9
// Kuning muda : #FFDC99
// Kuning putih : #FDFAEB
// Merah : #FE7968
// Hijau Tua : #1D796C
// Biru : #0B92B2
// Kuning biasa : #FFDF70

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  

  handleExit = () => {
    Alert.alert(
      'Confirm Exit',
      'Apakah anda yakin ingin keluar?',
      [
        {
          text: 'Tidak',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Keluar', onPress: () => this.exitApp() },
      ],
      { cancelable: false }
    );
  };

  exitApp = () => {
    if (Platform.OS === 'android') {
      BackHandler.exitApp();
    } else {
      console.log('Exiting the app...');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});

export default App;
