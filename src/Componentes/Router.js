import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Productos from './Productos';
import Nosotros from './Nosotros';
import Navegacion from './Navegacion';
import Error from './Error';
import Header from './Header';
import SingleProducto from './SingleProducto';
import infoProductos from '../datos/datos.json';


class Router extends Component {

    state = {
        productos:[]
    }

    componentWillMount(){
        this.setState({
            productos:infoProductos
        })
    }
    
    render() { 
        return (
            <div className="contenedor">
                <BrowserRouter>
                    <Header></Header>
                    <Navegacion></Navegacion>
                    <Switch>
                        <Route exact path='/' render={() => (
                            <Productos productos={this.state.productos}></Productos>
                        )} />
                        <Route exact path='/nosotros' component={Nosotros} />
                        <Route exact path='/productos' render={ () => (
                            <Productos productos={this.state.productos}></Productos>
                        )} />
                        <Route exact path='/producto/:productoId' render={(props) => {

                            let idProducto = props.location.pathname.replace('/producto/','');

                            return (
                                <SingleProducto producto={this.state.productos[idProducto]}>

                                </SingleProducto>
                            )

                            }} />

                        <Router exact path={"/contacto"} component={Contacto}></Router>
                        
                        <Route component={Error} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
            
    }   
}
 
export default Router;