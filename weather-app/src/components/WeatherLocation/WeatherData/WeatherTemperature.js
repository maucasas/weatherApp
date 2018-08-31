import React from 'react';
import WeatherIcons  from 'react-weathericons';
import { SUN, ClOUD, RAIN, SNOW, WINDY, ClOUDY, THUNDER, DRIZZLE} from '../../../constants/weathers';
import { PropTypes } from 'prop-types';

const stateToIconName = weatherState => {
    
        switch (weatherState) {
                case SUN:
                    return "day-sunny";
                case ClOUD:
                    return "cloud";                
                case RAIN:
                    return "rain";                    
                case SNOW:
                    return "snow";
                case WINDY:
                    return "windy";
                case ClOUDY:
                    return "cloudy";
                case THUNDER:
                    return "day-thunderstorm";
                case DRIZZLE: 
                    return "day-showers";        
            default:
                return "day-sunny";
            
        }  
    
}

const getWeatherIcons = weatherState => {
    return (<WeatherIcons className="icon" name={stateToIconName(weatherState)} size ="2x" />)
}  


// funtional component
const WeatherTemperature = ({ temperature, weatherState }) => {
     return(
     <div>
        <div className="weatherTemperatureCont">    
            {getWeatherIcons(weatherState)}
            <span className="temperatureText" >{temperature} °C</span>        
        </div>
    </div>
     );
};
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string
};
export default WeatherTemperature;