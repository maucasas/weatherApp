import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather.services';
import { PropTypes } from 'prop-types';

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
                debugger
                return weather.json();
            })
            .then(resp => {
                const data = transformWeather(resp);
                this.setState({ data });
            })
    };
    componentDidMount() {};
    componentWillUpdate() {};
    componentDidUpdate() {  };
    handelUpdateClick = () => {}

    render = () => {
        const {onWeatherLocationClick} = this.props; // esta propiedad es tomada de las propiedades generales. es necesario validado en proptypes
                                                    // ademas esta sera disparada hacia arriba
        const { city, data } = this.state;
        return (
            <div>
                <div className="weatherLocationCont" onClick={onWeatherLocationClick}> 
                    <Location city={city} />
                    {data ? <WeatherData data={data} /> : null}

                </div>
            </div>
        )
    }
}

WeatherLocation.propType = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func
}

export default WeatherLocation;