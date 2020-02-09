import React, { Component } from 'react';
import './Nosotros.css'

class Nosotros extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="contenedor-nosotros">
                <div className="imagen">
                    <img src="/img/camisa_1.png" alt="imagen nosotros"></img>
                </div>
                <div className="contenido">
                    <h2>SObre Nosotros:</h2>
                    <p>hola mundo</p>
                </div>
            </div>
         );
    }
}
 
export default Nosotros;