import React, { useState } from 'react';

import {Row, Col, Button} from 'react-bootstrap';

import classes from './Cart.css';


const Cart = props =>
{
    let totalPrice = 0;

    let itemsInCart = props.items.length !== 0 ? props.items.map(item => {
        let total = (parseFloat(item.item.itemPrice) * parseInt(item.count) ).toFixed(2);
        totalPrice += parseFloat(total);
        return (
            <Row key={item.key} className={classes.Cart}>
                <Col md={6}>
                    <img src={item.item.itemPic} width="70px" height="70px" alt={item.item.itemName} />
                </Col>
                <Col md={6} key={item.key}>
                    <p>{item.item.itemName}</p>
                    <p>Quantity: {item.count}</p>
                    <p>Total: ${total}</p>
                </Col>
                <Button 
                    size="sm" 
                    variant="outline-dark" 
                    className={classes.RemoveButton} 
                    onClick={() => props.removeItemToCart(item.key)}>
                Remove</Button>
            </Row>
        );
    }) : (
        <div className={classes.NoItemsInCart}>
            <p>No items in cart</p>
        </div>
    );

    return (
        <div>
            {itemsInCart}
            <div className={classes.TotalPrice}>
                <p>Total Order Amount: ${totalPrice.toFixed(2)}</p>
            </div>
        </div>
    )
};


export default Cart;
