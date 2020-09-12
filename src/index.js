import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './screens/home';
import Cart from './screens/cart';
import Products from './screens/products';
import Login from './screens/login';
import Register from './screens/register';
import * as serviceWorker from './serviceWorker';
import ForgotPassword from './screens/forgotPassword';

const app = (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/products/:id" component={Products} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/forgotPassword" component={ForgotPassword} />
            <Route exact path="/cart" component={Cart} />
        </div>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
