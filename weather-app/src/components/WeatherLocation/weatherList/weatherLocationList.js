import React from 'react';
import WeatherLocation from './../index';

export const WeatherLocationList = () => {
    return (
        <div>
            
            <WeatherLocation city={'Bogota,co'} />
            {/* <WeatherLocation city={'Bogota, co'} />
            <WeatherLocation city={'Santiago, ch'} /> */}
        </div>
    )

}