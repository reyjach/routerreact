import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Inicio from './Inicio';
import Nosotros from './Nosotros';
import Error from './Error';

class Router extends Component {
    
    render() { 
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Inicio} />
                    <Route exact path='/nosotros' component={Nosotros} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        )
            
    }   
}
 
export default Router;