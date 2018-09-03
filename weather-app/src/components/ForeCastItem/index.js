import React from 'react';
import { PropTypes } from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData/index';



const ForeCastItem = ({weekDay, hour, data}) => {
    return (
        <div>
            <div>{weekDay}  Hora: {hour} </div>
            <WeatherData data={data}/>
        </div>
    )
}

ForeCastItem.prototypes = {
    weekDay: PropTypes.string.isRequired,
    hora: PropTypes.string.isRequired,
}
export default ForeCastItem;