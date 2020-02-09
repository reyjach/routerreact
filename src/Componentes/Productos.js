import React, { Component } from 'react';
import Producto from './Producto';
import Buscador from './Buscador';
import './Productos.css'

class Productos extends Component {
    
    render() { 
        return ( 
            <div className="productos">
                <h2>Nuestros Productos</h2>
                <Buscador busqueda={this.props.busquedaProducto}></Buscador>
                <ul className="lista-productos">
                    {Object.keys(this.props.productos).map(producto =>(
                        <Producto informacion={this.props.productos[producto]} key={producto}></Producto>
                    ))}
                </ul>
            </div>
         );
    }
}
 
export default Productos;