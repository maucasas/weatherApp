import React, {Component} from 'react';


export class FectchApiService {
key="abeed9a1115ece79d0a35fc1d10e4891";
url = 'https://api.openweathermap.org/data/2.5/';

    constructor (){
    }

getUrlFetch = (typeRequest, city ) =>{
    const url2= `${this.url}${typeRequest}?q=${city}&appid=${this.key}`;
   return `https://api.openweathermap.org/data/2.5/${typeRequest}?q=${city}&appid=${this.key}`;
    }

getRequestByCityAxios(typesRequest, city) {
    const urlApi= this.getUrlFetch(typesRequest, city);
    debugger;
        fetch(urlApi)
       .then(foreCast => {
           return foreCast.json();
        }).then(resp => {
                return resp;
        })
        }
            

getRequestByCityFetch(typesRequest, city) {
const urlApi= this.getUrlFetch(typesRequest, city);
debugger;
    fetch(urlApi)
    .then(foreCast => {
        return foreCast.json();
    }).then(resp => {
        return resp;
    })
}
}
const datatransForecast = dataforTranform =>{
    debugger
    const {country} = dataforTranform.city;
    const { population} = dataforTranform.city;
    const {name} = dataforTranform.city;
    const data ={
        country,
        population,
        name
    }
    return data;
}
export default datatransForecast;