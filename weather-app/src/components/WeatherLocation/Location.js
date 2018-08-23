import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.css';

const Location = ({city}) => (
//    console.log(props); 
//    debugger;
// destructuring es poner entre llaves la la constante que va a quedar como propiedad
//    const {city} = props;

    <div className="locationCont" >
        <h4>
            {city}
        </h4>

    </div>

);
Location.proptype = {
    city: PropTypes.string.isRequerid
}
export default Location; 