import React from 'react';
import WeatherLocation from './../index';

export const WeatherLocationList = () => {
    return (
        <div>
            
            <WeatherLocation city={'Bogota,co'} />
            <WeatherLocation city={'Caracas, ve'} />
            {/* <WeatherLocation city={'Santiago, ch'} /> */}
        </div>
    )

}