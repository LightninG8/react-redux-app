import React from 'react';
import {MainPage, CartPage, ItemPage} from '../pages';
import AppHeader from '../app-header';

import {Route, Switch, Link} from "react-router-dom"

import Background from './food-bg.jpg';



const App = () => {


    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={60}/>

            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/cart" exact component={CartPage}/>
                <Route path="/:id" exact component={ItemPage}/>
               
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

export default App;