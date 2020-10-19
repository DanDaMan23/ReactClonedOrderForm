import React from 'react';

import {Navbar, Nav} from 'react-bootstrap';

import NavigationBar from './NavigationBar/NavigationBar';
import OrderForm from '../OrderForm/OrderForm';
import Orders from '../Orders/Orders';
import HomePage from '../HomePage/HomePage';

import {Route, Redirect, Switch} from 'react-router-dom';


const MasterPage = props => 
{
    return (
        <div>
            <NavigationBar />

            {/* <OrderForm /> */}

            <Switch>
                <Route path="/purchaseOrder" component={OrderForm} />
                <Route path="/yourOrders" component={Orders}/>
                <Route path="/home" component={HomePage} />
                <Redirect to="/home" />
            </Switch>
            
        </div>
        
    );
};


export default MasterPage;