import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from '../pages/Home';
import List from '../pages/List';

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/list" component={List} />
            <Redirect to="/" />
        </Switch>
    </Router>
);