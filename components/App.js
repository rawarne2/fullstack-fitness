import React from 'react';
import { StyleSheet, Text, View, MapView } from 'react-native';
import Map from './MapView'
import Clock from './Timer'
import TopNavBar from './TopNavBar'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container} style={{flex: 1, paddingTop: 20}}>
      <TopNavBar style={{flex: 1}}/>
      <Map style={{flex: 1}}/>
      <Clock style={{flex: 1}}/>
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







/*
To Do

get map to track route
be able to set an amount of time for countdown
allow to play in background?
say time, speed(mph), and pace(min/mile) every 5 min
include a 'go back to location' button
change distance travelled from km (default) to miles
add redux???
save runs to db
add homepage that has motivational quotes and list of previous runs
*/