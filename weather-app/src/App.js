import React, { Component } from 'react';
import './App.css';
import { WeatherLocationList } from './components/WeatherLocation/weatherList/weatherLocationList';
import {Grid, Col, Row} from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper'
import  AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { ForeCastExtended } from './components/WeatherLocation/foreCastExtended';
import { PropTypes } from 'prop-types';

const cities = [
  'Buenos aires,ar',
  'Bogota,co',
  'Madrid, es'
]
class App extends Component {

constructor(){
  super();
  this.state = { city : null}
}



  handleSelectedLocation = city => {
    this.setState({city: city});
  }
  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
      <Grid >
        <Row>  
            <Col xs={12}>
              <AppBar position="static" color="primary" children='Mi navbar' />                
            </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
             <WeatherLocationList 
                        cities={cities}
                        onSelectedLocation={this.handleSelectedLocation} />         
          </Col>
          <Col xs={12} md={6}>
            <Paper zdepth={50}>
              <div className="detail">
                {!this.state.city ? <h3>No ha seleccionado nuinguna Ciudad</h3> :
                 <ForeCastExtended city={this.state.city}/>}
              </div>

            </Paper>
          </Col>
        </Row>
      </Grid>
      </MuiThemeProvider>
      </div>
    
    );
  }
}

App.proptypes = {
  sendCityForeCast: PropTypes.func,
}
export default App;
