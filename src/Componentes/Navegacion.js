import React from 'react';
import { Link } from 'react-router-dom';
import './Navegacion.css';

const Navegacion = () => {
    return ( 
        <nav className="navegacion">
            <Link to='/nosotros'>Nosotros</Link>
            <Link to='/productos'>Productos</Link>
            <Link to='/contacto'>Contactos</Link>
        </nav>
     );
}
 
export default Navegacion;