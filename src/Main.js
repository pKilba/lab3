import {Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Filmmaker from "./components/Filmmaker";
import React from "react";

function Main() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/architects/:id?' component={Filmmaker}/>
            </Switch>
        </main>
    );
}

export default Main;