import React from 'react';
import { MapView, Speech } from 'expo';
import { Dimensions, StatusBar, View, Text, StyleSheet, MapViewOverlay} from 'react-native'
import pick from 'lodash/pick'
import haversine from 'haversine'


// const { width, height } = Dimensions.get('window')   //takes up entire width of the phone. figure out how to get the other components to overlap on the top and bottom

export default class Map extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            distanceTravelled: 0,
            routeCoordinates: [], //lat and logitudes 
            prevLatLng: {}
        }
    }
    
    componentDidMount() {
     
        navigator.geolocation.getCurrentPosition(
          (position) => {},
          (error) => alert(error.message),
          {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        )
        this.watchID = navigator.geolocation.watchPosition((position) => {
          const { routeCoordinates, distanceTravelled } = this.state
          const newLatLngs = {latitude: position.coords.latitude, longitude: position.coords.longitude }
          const positionLatLngs = pick(position.coords, ['latitude', 'longitude'])
          this.setState({
            routeCoordinates: [routeCoordinates, ...positionLatLngs],
            distanceTravelled: distanceTravelled + this.calcDistance(newLatLngs),
            prevLatLng: newLatLngs
          })
        });
      }
    
      componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
      }
    
      calcDistance(newLatLng) {
        const { prevLatLng } = this.state
        return (haversine(prevLatLng, newLatLng) || 0)
      }
    

    render() {
    return (
    <View>
      <MapView
        style={{ width: 400, height: 500 }}
        initialRegion={{
          latitude: 41.8952660,
          longitude: -87.6390350,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType='standard'
        showsUserLocation={true}
        followUserLocation={true}
        followsUserLocation={true}
        // showsCompass={true}
      />
      <View>
        <Text style={{ fontSize: 25 }}>{parseFloat(this.state.distanceTravelled).toFixed(2)} km</Text>
      </View>
      </View>
    )
  }
}
