import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather.services';

// const data1 = {
//     temperature: 22,
//     weatherState: SUN,
//     humidity: 5,
//     wind: '10/kms'    
// };

const key='abeed9a1115ece79d0a35fc1d10e4891';
// const city ='Bogota, co'
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

// Class Component-------------------
class WeatherLocation extends Component {
constructor( {city} ){
    super();
    this.state = { 
        data : null,
        city
    };
    debugger
}
componentWillMount(){console.log('componentWillMount')
const {city} = this.state;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

fetch(url).then(weather => {return weather.json();}).then(resp=> {
    const data = transformWeather(resp);
    console.log('aadfasdfasd', data);
    this.setState({data});
})

};
componentDidMount(){console.log('componentDidMount')};
componentWillUpdate(){console.log('componentWillUpdate')};
componentDidUpdate(){console.log('componentDidUpdate')};

 handelUpdateClick = () => {       
    // fetch(url).then(data=>{       
    //     return data.json();
    // }).then(weather_data =>{
    //     const  data = transformWeather(weather_data);
    //     this.setState({data});      
    // });    
}
    // esta es la parte que se extrae de esta clase
    render = () => {
        console.log('render')
        const {city, data}= this.state;
        return (
        <div className="weatherLocationCont">
            <Location city={city}/>
            <WeatherData data={data} />            
            <button className="buttomUpload" onClick={this.handelUpdateClick}>Upload Weather</button>            
        </div>
        );
    };
}


export default WeatherLocation;