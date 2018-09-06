import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import ForeCastItem from '../ForeCastItem/index';
import datatransForecast from '../../services/transformForecast.service';
// import  FectchApiService  from './../../services/fecthApiService';


const days = [
    'lunes',
    'martes',
    'miercoles',
    'jueves', 
    'viernes'
]

 const data ={
    temperature: 30,
    weatherState: "ninguno",
    humidity: 5,
    wind: "100 kmñlñlñlñlñ",
};



    const key="abeed9a1115ece79d0a35fc1d10e4891"; 
    const url = `https://api.openweathermap.org/data/2.5/forecast`;

export class ForeCastExtended extends Component {
    constructor ( ){
        super();

        this.state = {
            forecastData : null,
        }
    }

    componentDidMount(){
        const urlforecast = `${url}?q=${this.props.city}&appid=${key}`;
      fetch(urlforecast)      
            .then(resp=>{ 
                console.log(resp); return resp.json();})            
            .then(datatransform=>{
                console.log(datatransform);
                debugger
            const forecast = datatransForecast(datatransform);
            console.log(forecast);
            this.setState({forecastData: forecast});
      })
      debugger
      
    }
    renderForeCastDays(forecastData){
        return forecastData.map(forecast=> (
            <ForeCastItem 
            key={forecast.hour}
           weekDay={forecast.weekDay} 
           hour= {forecast.hour}
           data={forecast.data}>
           </ForeCastItem>
        ))
     
        // return (days.map(day => (<ForeCastItem  key={day} weekDay = {day} data={data}/>)));
    }

    renderProgress(){
        
        return "cargando Pronostico extendido..... wait a moment.....";
    }



    render (){
        const {city} = this.props;
        const {forecastData} = this.state;
        return (
            <div>
            <h3 className="forecast-title"> {city} </h3>
            
            {forecastData ?
                this.renderForeCastDays(forecastData) : this.renderProgress()}
            
            </div>
        );
    }
}

ForeCastExtended.proptypes ={
    city: PropTypes.string.isRequerid,
    forecastData: PropTypes.object,
}