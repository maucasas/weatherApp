import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import ForeCastItem from '../ForeCastItem/index'


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

    renderForeCastDays(){
        return (days.map(day => (<ForeCastItem  key={day} weekDay = {day} data={data}/>)));
    }
    render (){
        const {city} = this.props;
        return (
            <div>
            <h3 className="forecast-title"> {city} </h3>
            {this.renderForeCastDays()}
            
            </div>
        );
    }
}

ForeCastExtended.proptypes ={
    city: PropTypes.string.isRequerid,
}