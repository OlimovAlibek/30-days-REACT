import React, { Component } from 'react';
import Weather from './Weather';
import Titles from './Titles';
import Form from './Form';

export default class Day_11 extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    description: undefined,
  };

  getWeather = async (event) => {
    event.preventDefault();
    const API_KEY = 'e3b2613ad5c1b496e1f0c7535e8e0d83';

    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`);

    try {
      if (api_call.ok) {
        const response = await api_call.json();
        this.setState({
          temperature: response.main.temp,
          city: response.name,
          country: response.sys.country,
          humidity: response.main.humidity,
          description: response.weather[0].description,
        });
      } else {
        console.error('Error fetching weather data');
        // Handle the error in some way, e.g., update state with an error message.
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: 'No data available',
        });
      }
    } catch (error) {
      console.error('Error parsing weather data', error);
      // Handle the error in some way, e.g., update state with an error message.
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: 'No data available',
      });
    }
  };

  render() {
    return (
      <div>
        <Titles />
        <Form loadweather={this.getWeather}></Form>
        {this.state.temperature !== undefined ? (
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        ) : (
          <p>No data available</p>
        )}
      </div>
    );
  }
}
