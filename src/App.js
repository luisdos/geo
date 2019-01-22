import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mensaje: "",
      soportado: true,
      lat: 0,
      lon: 0,
      userAgent: ""
    }
  }

  componentWillMount() {
    let state = {...this.state};

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((posicion) => {
        state.lat = posicion.coords.latitude;
        state.lon = posicion.coords.longitude;
        state.userAgent = navigator.userAgent;
        this.setState(state);
      });
    } else {
      state.soportado = false;
      state.mensaje = "Geolocalización no es soportado por este navegador.";
      this.setState(state);
    }


  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          {
            this.state.soportado 
            ? (
              <div>
                <p>Latitud: {this.state.lat}</p> 
                <p>Longitud: {this.state.lon}</p> 
                <p>User Agent: {this.state.userAgent}</p> 
              </div> 
              )
            : ( <div>this.state.mensaje</div> )
          }
          
        </header>
      </div>
    );
  }
}

export default App;
