import React from 'react';
import { StyleSheet, Text, View, MapView } from 'react-native';
import Map from './MapView'
import Clock from './Timer'

export default class App extends React.Component {
  render() {
    console.log('hello world')
    return (
      <View style={styles.container}>
      <Map />
      <Clock />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// <Text>Open up App.js to start working on your app!</Text>
// <Text>Changes you make will automatically reload.</Text>
// <Text>Shake your phone to open the developer menu.</Text>
// <Text>Scan QR code and open link in iphone broser to launch app</Text>




/*
To Do

get map to load location tracker
put timer under it
start and stop timer and 


*/