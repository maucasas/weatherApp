import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import ForeCastItem from '../ForeCastItem/index'
import  FectchApiService  from './../../services/fecthApiService';


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
export class ForeCastExtended extends Component {
    constructor ( FectchApiService ){
        super();

        this.state = {forecastData : null}
    }
    renderForeCastDays(){
        
        return "render Items";
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
                this.renderForeCastDays() : this.renderProgress()}
            
            </div>
        );
    }
}

ForeCastExtended.proptypes ={
    city: PropTypes.string.isRequerid,
}