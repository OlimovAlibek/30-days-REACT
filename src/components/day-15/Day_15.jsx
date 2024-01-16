import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class Day_15 extends Component {
  state = {
    address: '',
    windowActive: true,
    location: {
      lat: -1.2884,
      lng: 36.8233
    }
  };

  getLocation = async () => {
    const location = {
      lat: (Math.random() * 180 - 90).toFixed(6),
      lng: (Math.random() * 360 - 180).toFixed(6)
    };
  
    let newAddress = '';
    const apiKey = 'AIzaSyBvfitrVm53VDJE7cQ1ScuTSztoGkfGu1c';
  
    try {
      console.log('Geocoding API Request:', `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${apiKey}`);
      const api_call = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${apiKey}`
      );
      const response = await api_call.json();
  
      if (response.status === 'ZERO_RESULTS' || !response.results || response.results.length === 0) {
        this.getLocation();
      } else {
        newAddress = response.results[0].formatted_address;
        this.setState({ location, address: newAddress });
      }
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.getLocation}>Click ME</button>

        <Map
          google={this.props.google}
          zoom={5}
          initialCenter={this.state.location}
          center={this.state.location}
        >
          <InfoWindow visible={this.state.windowActive} position={this.state.location}>
            <div>
              <h3>You're going to {this.state.address} 🌴</h3>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBvfitrVm53VDJE7cQ1ScuTSztoGkfGu1c'
})(Day_15);
