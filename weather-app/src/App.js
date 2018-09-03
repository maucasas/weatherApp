import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { WeatherLocationList } from './components/WeatherLocation/weatherList/weatherLocationList';


const cities = [
  'Buenos aires,ar',
  'Bogota,co'
]
class App extends Component {
  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
Mauricio Casas
        <WeatherLocationList 
                        cities={cities}
                        onSelectedLocation={this.handleSelectedLocation} />         
      </div>
    );
  }
}

export default App;
