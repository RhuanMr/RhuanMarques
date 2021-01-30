import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import Contato from './pages/Contato';
import Home from './pages/Home';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path='/contato' component={Contato} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;