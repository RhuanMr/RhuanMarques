import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import Contato from './pages/Contato';
import Home from './pages/Home';
import Sobre from './pages/Sobre';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path='/contato' component={Contato} />
                <Route exact path="/sobre" component={Sobre} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;