import { WINDY } from './../constants/weathers';
import Converter from 'convert-units/lib/index';

const getConvertTemp = temperature => {
    return  Number(Converter(temperature).from('K').to('C').toFixed(2));    
}

const transformWeather = weather_data => {
const{humidity,temp} = weather_data.main;
const {speed} = weather_data.wind;
const weatherState = WINDY;
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