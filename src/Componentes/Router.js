import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Productos from './Productos';
import Nosotros from './Nosotros';
import Navegacion from './Navegacion';
import Error from './Error';
import Header from './Header';
import Contacto from './Contacto'
import SingleProducto from './SingleProducto';
import infoProductos from '../datos/datos.json';


class Router extends Component {

    state = {
        productos:[],
        terminoBusqueda:''
    }

    componentWillMount(){
        this.setState({
            productos:infoProductos
        })
    }

    busquedaProducto =(busqueda) => {
        if(busqueda.length > 3) {
            this.setState({
                terminoBusqueda:busqueda
            })
        }else {
            this.setState({
                terminoBusqueda: ''
            })
        }
    } 
    
    render() {
        
        let productos = [...this.state.productos];
        let busqueda = this.state.terminoBusqueda;
        let resultado;
        

        if(busqueda !== '') {
            console.log(busqueda.toLowerCase())
            resultado=productos.filter(producto => (
                producto.nombre.toLowerCase().indexOf( busqueda.toLowerCase() ) !==-1
            ))
        } else {
            resultado=productos;
        }

        return (
            <div className="contenedor">
                <BrowserRouter>
                    <Header></Header>
                    <Navegacion></Navegacion>
                    <Switch>
                        <Route exact path='/' render={() => (
                            <Productos productos={resultado} busquedaProducto={this.busquedaProducto}></Productos>
                        )} />
                        <Route exact path='/nosotros' component={Nosotros} />
                        <Route exact path='/productos' render={ () => (
                            <Productos productos={resultado} busquedaProducto={this.busquedaProducto}></Productos>
                        )} />
                        <Route exact path='/producto/:productoId' render={(props) => {

                            let idProducto = props.location.pathname.replace('/producto/','');

                            return (
                                <SingleProducto producto={this.state.productos[idProducto]}>

                                </SingleProducto>
                            )

                            }} />

                        <Route exact path="/contacto" component={Contacto}></Route>
                        
                        <Route component={Error} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
            
    }   
}
 
export default Router;