import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import Country from './Country'
import TravelInfo from './TravelInfo'


export class Day_16 extends Component {

  state = {

  //controls whether map is visible
    mapActive: true,
  
  //all the values we will use to set display data
    currentCountry: '',
    location: { lat: 58.595378, lng: 25.013634 },
 
  //our 'database' of countries
    countries: [
     { name: 'Sweden', latlng: { lat: 60.128242, lng: 18.643540 }, key: 1 },
     { name: 'Norway', latlng: { lat: 60.472091, lng: 8.468940 }, key: 2 },
     { name: 'Finland', latlng: { lat: 61.924178, lng: 25.748244 }, key: 3 },
     { name: 'Iceland', latlng: { lat: 65.13548, lng: -19.89541 }, key: 4 },
     { name: 'Denmark', latlng: { lat: 56.263991, lng: 9.501856 }, key: 5 },
     { name: 'Estonia', latlng: { lat: 58.595391, lng: 25.013638 }, key: 6 },
    ],
  }


//FINDS OUR TARGET COUNTRY

findCountryByKey = (keyToSearch) => {
   let countries = this.state.countries
  
  //Filters through countries 'database' and saves the one that was clicked
   let targetcountry = countries.filter(country => {
   return country.key === keyToSearch
   });

  //declaring some variables and using them to hold name and latlng
   const location = {}
   let currentCountry;
    
   location.lat = targetcountry[0].latlng.lat
   location.lng = targetcountry[0].latlng.lng
   currentCountry = targetcountry[0].name
  
  //Set these variables as state
   this.setState({ location: location, currentCountry: currentCountry });
   
  //Then we execute next function  
   this.getCountryInfo(currentCountry)
};




// FETCHES COUNTRY INFO FOR USE
getCountryInfo = async (currentCountry) => {

//Call api based on the curentCountry passed through
    const api_call = await fetch(`https://restcountries.eu/rest/v2/name/${currentCountry}`)
    const countryInfo = await api_call.json();

//Set as state
    this.setState({ countryInfo: countryInfo })
};



render() {

// ------  RENDER BLOCK  ------ //


// Declaring countries 'buttons'
   let countries = (
       <div>
        {this.state.countries.map((country) => {
 
  // This if/else checks for currentCountry and passes styling 'white'
          if (this.state.currentCountry === country.name) {

          return <Country
          name={country.name}
          key={country.key}
          color='white'
          click={() => this.findCountryByKey(country.key)}/>

        } else {

          return <Country
          name={country.name}
          key={country.key}
          color='pink'
          click={() => this.findCountryByKey(country.key)}/>
           
        }
        })} 
      </div> 
    );



//Declaring the country info section
let countryInfoSection;

if (this.state.countryInfo !== undefined) {
  countryInfoSection = (
      
  <div className="travel-info">
    <TravelInfo 
     name={this.state.currentCountry}
     capital={this.state.countryInfo[0].capital}
     language={this.state.countryInfo[0].languages[0].nativeName}
     flag={this.state.countryInfo[0].flag}
     currency={this.state.countryInfo[0].currencies[0].name}/>
    </div>) 

} else {

//Otherwise it passes some plain ol' HTML
  countryInfoSection = (
      
  <div className="travel-info">
    <div className="travel-info-inner">
      <h1>
        Northern Europe
      </h1>
      <h5>
        Northern Europe is the general term for the geographical region in Europe that is approximately north of the southern coast of the Baltic Sea. Nations usually included within this region are Denmark, Estonia, the Faroe Islands, Finland, Iceland, Latvia, Lithuania, Norway and Sweden, and less often the United Kingdom, the Republic of Ireland, northern Germany, northern Belarus and northwest Russia.
      </h5>
      <img src='/iceland.jpg'/>
    </div>

  </div>) 

}

// ------  THE RETURN BLOCK  ------ //


return (
  <div className="App">


{/* HEADER */}

       

{/* COMPONENTS */}
  

  {countries}


{/* Library component from google-maps-react */}

<div>
      <Map
        google={this.props.google}
        zoom={4}
        className="map-style"
        initialCenter={this.state.location}
        position={this.state.location}
      >

{/* Library component from google-maps-react */}       
       <InfoWindow
          visible={this.state.mapActive}
          position={this.state.location}
          >
            <div>
              <h5>{this.state.currentCountry}</h5>
            </div>
        </InfoWindow>

    </Map>
 </div>


  {countryInfoSection}
 
   </div>
  );
 }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBvfitrVm53VDJE7cQ1ScuTSztoGkfGu1c'
})(Day_16);