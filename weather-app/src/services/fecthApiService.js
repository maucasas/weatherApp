import React from 'react';



export class FectchApiService {
key="abeed9a1115ece79d0a35fc1d10e4891";

    constructor (){
    }

getUrlFetch = (typeRequest, city ) =>{
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