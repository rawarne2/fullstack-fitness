import React from 'react';
import { MapView } from 'expo';

export default class Map extends React.Component {
  render() {
    return (
      <MapView
        style={{ width: 500, height:500 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType='standard'
        showsUserLocation={true}
        followUserLocation={true}
        followsUserLocation={true}
      />
    );
  }
}
