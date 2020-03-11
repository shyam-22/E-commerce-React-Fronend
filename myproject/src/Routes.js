import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
//BrowserRouter is Component that wrap rest of the Routes
//BrowserRouter makes Props  available to other nested components

import Signup from "./USER/Signup"
import Signin from "./USER/Signin"
import Home from "./core files/Home";


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component = {Home} />
                <Route path = "/signin" exact component = {Signin} />
                <Route path = "/signup" exact component = {Signup} />

            </Switch>
        </BrowserRouter>
    )
}

export default Routes;