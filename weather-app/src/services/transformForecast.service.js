import moment from 'moment';
import transformWeather from './transformWeather.services';
const mm=0;
const datatransForecast = dataTranform => (
  
    dataTranform.list.filter(item=> {
        
        moment.unix(item.dt_txt).utc().hour() === 6 ||
        moment.unix(item.dt_txt).utc().hour() === 12 ||
        moment.unix(item.dt_txt).utc().hour() ===18
        console.log(item);
    }).map(item =>(
        { 
            weekDay: moment.unix(item.dt).format('ddd'),
            hour: moment.unix(item.dt).hour(),
            data: transformWeather(item)    
        }
    )) 
);

export default datatransForecast;