import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN, WINDY } from './../../constants/weathers';


const data1 = {
    temperature: 22,
    weatherState: SUN,
    humidity: 20,
    wind: '100/kms'    
};
const data2 = {
    temperature: 24,
    weatherState: WINDY,
    humidity: 20,
    wind: '100/kms'    
};


// Funtion Component-----------------
// const WeatherLocation = () => (
//     <div>
//         <h1>Rain</h1>
//         <Location city={"Bogota D.C  mks1"}></Location>
//         <WeatherData data={data}></WeatherData>

//     </div>
// );

// Class Component-------------------
class WeatherLocation extends Component {
constructor(){
    super();
    this.state = { 
        data : data1,
        city: 'Bogota params state of class'
    };
}
    //metodo handleUpdateClick
    handelUpdateClick = () => {  
// para cambiar this.state usar arrow Function
        // para actualizar el this.state
        this.setState({
            data: data2,
        });
    }

    // esta es la parte que se extrae de esta clase
    render = () => {
        const {city, data}= this.state;
        return (
        <div className="weatherLocationCont">
            <Location city={city}/>
            <WeatherData data={data} />
            
            <button className="buttomUpload" onClick={this.handelUpdateClick}>Upload Weather</button>
            
        </div>
        );
    };
}


export default WeatherLocation;