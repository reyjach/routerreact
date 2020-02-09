import React from 'react';
import './Contacto.css';


const Contacto = () => {
    return ( 
        <form>
        <legend>Formualrio de contacto</legend>
        <div className="input-field">
            <label>Nombre</label>
            <input type="text" placeholder="Tu Nombre"></input>
        </div>
        <div className="input-field">
            <label>Email</label>
            <input type="email" placeholder="Tu Email"></input>
        </div>
        <div className="input-field">
            <label>Mensaje</label>
            <textarea></textarea>
        </div>
        <div className="input-field enviar">
            <input type="submit" value="Enviar"></input>
        </div>
    </form>
     );
}
 
export default Contacto;