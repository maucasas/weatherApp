import React from 'react';
import WeatherLocation from './../index';
import { PropTypes } from 'prop-types';





export const WeatherLocationList = ({cities, onSelectedLocation}) => {
    const handleWeatherLocationClick = city => {
        console.log('handleWeatherLocationClick');
        onSelectedLocation(city);
    };

    const citiesArray = cities => (
        cities.map(city => (<WeatherLocation 
                                            key={city}
                                            city={city}
                                            onWeatherLocationClick =  {() =>handleWeatherLocationClick(city)} />))
    )
    return (
        <div>  
           {citiesArray(cities)}
        </div> 
    )
};
WeatherLocationList.prototypes = {
    cities: PropTypes.array.isRequerid,
    onSelectedLocation: PropTypes.func,
}