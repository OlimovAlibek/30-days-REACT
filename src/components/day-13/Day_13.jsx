import React, { Component } from 'react';
import Weather from './Weather';
import Form from './Form';
import City from './Cities';
import Titles from '../day-11/Titles';

export default class Day_13 extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    description: undefined,
    dataLoaded: false,
    urls: [
      'http://api.openweathermap.org/data/2.5/weather?q=auckland,nz&units=metric&appid=00bfc99b6c27236554f7ce710824818f',
      'http://api.openweathermap.org/data/2.5/weather?q=wellington,nz&units=metric&appid=00bfc99b6c27236554f7ce710824818f',
      'http://api.openweathermap.org/data/2.5/weather?q=christchurch,nz&units=metric&appid=00bfc99b6c27236554f7ce710824818f',
    ],
  };

  getWeather = async (event) => {
    event.preventDefault();
    const Api_Key = 'e3b2613ad5c1b496e1f0c7535e8e0d83';

    const city = event.target.elements.city.value;
    const country = 'NZ';
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${Api_Key}`);

    const response = await api_call.json();

    this.setState({
      temperature: response.main.temp,
      country: response.sys.country,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      city: response.name,
    });
  };

  fetchStartWeather = async () => {
    const urls = this.state.urls;

    let auckland = {};
    let wellington = {};
    let christchurch = {};

    for (let i = 0; i < urls.length; i++) {
      try {
        const api_call = await fetch(urls[i]);
        const response = await api_call.json();

        if (i === 0) {
          auckland.name = response.name;
          auckland.temp = response.main.temp;
        } else if (i === 1) {
          wellington.name = response.name;
          wellington.temp = response.main.temp;
        } else if (i === 2) {
          christchurch.name = response.name;
          christchurch.temp = response.main.temp;
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    this.setState({ auckland, christchurch, wellington, dataLoaded: true });
  };

  componentDidMount() {
    this.fetchStartWeather();
  }

  render() {
    const check = this.state.temperature;
    let weather;

    if (check !== undefined) {
      weather = (
        <div>
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </div>
      );
    }

    const loaded = this.state.dataLoaded;
    let startWeather;

    if (loaded === true) {
      startWeather = (
        <div>
          <City name={this.state.auckland.name} temp={this.state.auckland.temp} />
          <City name={this.state.wellington.name} temp={this.state.wellington.temp} />
          <City name={this.state.christchurch.name} temp={this.state.christchurch.temp} />
        </div>
      );
    } else {
      startWeather = <p>Loading</p>;
    }

    return (
      <div>
        {/* Replace 'Titles' with the appropriate component or remove if not needed */}
        <Titles />

        {startWeather}

        <h2>Select Another City</h2>

        <Form loadWeather={this.getWeather} />

        {weather}
      </div>
    );
  }
}
