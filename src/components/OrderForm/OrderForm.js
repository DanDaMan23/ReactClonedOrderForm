import React, { useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Products from '../Products/Products';
import Cart from '../Cart/Cart';

import UserInformation from '../UserInformation/UserInformation';

import classes from './OrderForm.css';

const OrderForm = props => 
{
    const [items, setItems] = useState([]);
    const [shippingInformation, setShippingInformation] = useState({fullName: " "});
    const [paymentInformation, setPaymentInformation] = useState({cardType: "visa"});

    const addItemsToCartHandler = (item, count) => {
        setItems([...items, { key: new Date(), item: item, count: count }]);
    };

    const removeItemsToCartHandler = itemId => {
        setItems(items.filter(item => item.key !== itemId));
    };

    const setShippingInformationHandler = shippingInfo =>
    {
        setShippingInformation(shippingInfo);
    };

    const setPaymentInformationHandler = paymentInfo =>
    {
        setPaymentInformation(paymentInfo);
    };

    const submitFormHandler = () => {
        fetch('https://webdevorderformreact.firebaseio.com/orders.json', {
            method: "POST",
            body: JSON.stringify({items: items, shippingInformation: shippingInformation, paymentInformation: paymentInformation}),
            headers: {'Content-Type': 'application/json'}
        }).then(response => response.json());


    };

    return (
        <div className="mt-4 mb-3">
            <Container className={classes.OrderForm}>
                <Row>
                    <Col md={8}>
                        <h3>Order Products</h3>
                        <Products addItemsToCart={addItemsToCartHandler} />
                    </Col>
                    <Col md={4}>
                        <h3>Cart</h3>
                        <Cart items={items} removeItemToCart={removeItemsToCartHandler} />
                    </Col>
                </Row>
            </Container>

            <UserInformation 
                items={items}
                submitForm={submitFormHandler} 
                shippingInformation={shippingInformation} 
                paymentInformation={paymentInformation}
                setShippingInfo={setShippingInformationHandler}
                setPaymentInfo={setPaymentInformationHandler} />

        </div>
    );
};

export default OrderForm;