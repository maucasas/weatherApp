import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather.services';
import { PropTypes } from 'prop-types';

// const data1 = {
//     temperature: 22,
//     weatherState: 'sun',
//     humidity: 5,
//     wind: '10/kms'
// };

const key = 'abeed9a1115ece79d0a35fc1d10e4891';


// Class Component-------------------
class WeatherLocation extends Component {
    constructor({ city }) {
        super();
        this.state = {
            city,
            data: null
        };
    }


    componentWillMount() {
        console.log('componentWillMount')

        const { city } = this.state;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
        fetch(url)
            .then(weather => {
                return weather.json();
            })
            .then(resp => {
                const data = transformWeather(resp);

                this.setState({ data });

            })
    };
    componentDidMount() { console.log('componentDidMount') };
    componentWillUpdate() { console.log('componentWillUpdate') };
    componentDidUpdate() { console.log('componentDidUpdate') };

    handelUpdateClick = () => {
        // fetch(url).then(data=>{       
        //     return data.json();
        // }).then(weather_data =>{
        //     const  data = transformWeather(weather_data);
        //     this.setState({data});      
        // });    
    }

    render = () => {
        const { city, data } = this.state;

        return (
            <div>
                <div className="weatherLocationCont">
                    <Location city={city} />
                    {data ? <WeatherData data={data} /> : null}

                </div>
            </div>
        )
    }


}

WeatherLocation.propType = {
    city: PropTypes.string
}

export default WeatherLocation;