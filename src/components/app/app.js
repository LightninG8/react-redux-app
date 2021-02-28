import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';

import {Route, Switch, Link} from "react-router-dom"

import Background from './food-bg.jpg';

import WithRestoService from "../hoc";



const App = ({RestoService}) => {
    RestoService.getMenuItems()
        .then(res => console.log(res))
        .catch(error => console.log(error));

    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={60}/>

            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/cart" component={CartPage}/>
                <Route path="*" render={() => (
                    <div>
                       <h1>Такой страницы нет</h1> 
                       <Link to="/">На главную</Link>
                    </div>
                )}/>

            </Switch>
            
        </div>
    )
}

export default WithRestoService()(App);