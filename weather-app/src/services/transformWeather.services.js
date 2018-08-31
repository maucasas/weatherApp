import { RAIN, SNOW, ClOUDY, THUNDER, DRIZZLE } from './../constants/weathers';
import Converter from 'convert-units/lib/index';

const getConvertTemp = temperature => {
    return  Number(Converter(temperature).from('K').to('C').toFixed(2));    
}

const getWeatherstate = weather => {
const { id } =  weather[0]; 
if ( id  < 300) {return THUNDER}
else if ( id  < 400 ){return DRIZZLE}
else if ( id  < 500 ) { return RAIN}
else if ( id < 600 ) { return  SNOW}
else  { return ClOUDY}
}

const transformWeather = weather_data => {
    const { weather } = weather_data;  
    debugger
const{humidity,temp} = weather_data.main;
const {speed} = weather_data.wind;
const weatherState = getWeatherstate(weather);
const temperature = getConvertTemp(temp);
    const data = {
        humidity,
        temperature,
        wind: `${speed} m/s`,
        weatherState
    }
   
    return (data);
}
export default transformWeather;