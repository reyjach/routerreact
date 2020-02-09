import React, { Component } from 'react';
import './Buscador.css';

class Buscador extends Component {

    leerDatos = (e) =>{
        const termino = e.target.value

        this.props.busqueda(termino);
    }

    state = {  }
    render() { 
        return ( 
            <form className="buscador">
                <input type="text" placeholder="Búsqueda" onChange={this.leerDatos}></input>
            </form>
         );
    }
}
 
export default Buscador;