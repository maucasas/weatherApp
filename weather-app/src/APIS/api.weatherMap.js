
import { Component } from 'react';

const key='abeed9a1115ece79d0a35fc1d10e4891';
const city ='Bogotá, co'
const url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

class ApiWeatherMap extends Component {
    constructor() {
        super();
      fetch(url).then(function(respuesta){
          
        })
    }


    requestApi() {
        // return resp;
    }
}
export default ApiWeatherMap;