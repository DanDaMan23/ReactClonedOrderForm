import React from 'react';

import {Navbar, Nav} from 'react-bootstrap';

const NavigationBar = props =>
{
    const {Brand, Toggle, Collapse} = Navbar;

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Brand href="/home">Web Dev Upgraded Order Form</Brand>
            <Toggle aria-controls="basic-navbar-nav" />
            <Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/purchaseOrder">Purchase Order</Nav.Link>
                    <Nav.Link href="/yourOrders">Your Orders</Nav.Link>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default NavigationBar;