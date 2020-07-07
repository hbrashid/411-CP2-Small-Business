import React from 'react'
import { Switch, Route } from 'react-router'
import Listing from './containers/Listing'
import Details from './containers/Details'


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Listing} />
            <Route exact path='/details/:id' component={Details} />
            
        </Switch>
    );
};

export default Router;