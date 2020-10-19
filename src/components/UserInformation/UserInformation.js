import React, { useState } from 'react';

import ShippingInformation from './ShippingInformation/ShippingInformation';
import PaymentInformation from './PaymentInformation/PaymentInformation';
import Checkout from '../Checkout/Checkout';

import { Container, Row, Col, Button, Form } from 'react-bootstrap';

import classes from './UserInformation.css';

const UserInformation = props => {
    const [showCheckout, setShowCheckout] = useState(false);
    const [clickedPurchaseItems, setClickedPurchaseItems] = useState(false);
    const [shippingInfoHasErrors, setShippingInfoHasErrors] = useState(true);
    const [paymentInfoHasErrors, setPaymentInfoHasErrors] = useState(true);

    const onSubmit = data => console.log(data);

    const setShowHandler = isShow => {
        setShowCheckout(isShow);
    };

    const setShippingInfoHasErrorsHandler = error =>
    {
        setShippingInfoHasErrors(error);
    };

    const setPaymentInfoHasErrorsHandler = error =>
    {
        setPaymentInfoHasErrors(error);
    };

    const {
        items,
        submitForm,
        shippingInformation,
        paymentInformation,
        setShippingInfo,
        setPaymentInfo
    } = props;

    return (
        <Container className={classes.UserInformation}>
            <Form>
                <Row>
                    <Col md={6}>
                        <h3>Shipping Information</h3>
                        <ShippingInformation 
                            shippingInfo={shippingInformation} 
                            setShippingInfo={setShippingInfo}
                            hasErrors={shippingInfoHasErrors}
                            clickedPurchaseItems={clickedPurchaseItems}
                            setHasErrors={setShippingInfoHasErrorsHandler} />
                    </Col>
                    <Col md={6}>
                        <h3>Payment Information</h3>
                        <PaymentInformation 
                            paymentInfo={paymentInformation} 
                            setPaymentInfo={setPaymentInfo}
                            hasErrors={paymentInfoHasErrors}
                            clickedPurchaseItems={clickedPurchaseItems}
                            setHasErrors={setPaymentInfoHasErrorsHandler}  />
                    </Col>
                </Row>
                
                <div className="d-flex justify-content-center">
                    <Button className={classes.Buttons}
                        variant="secondary"
                        onClick={() => {
                            setClickedPurchaseItems(true);
                            if (!shippingInfoHasErrors && !paymentInfoHasErrors)
                            {
                                if (items.length !== 0)
                                {
                                    setShowHandler(true);
                                    submitForm();
                                    console.log(items);
                                    console.log(shippingInformation);
                                }
                                else
                                {
                                    alert("You do not have any items");
                                }
                            }
                        }}>Purchase Items</Button>
                    <Button className={classes.Buttons} variant="secondary">Clear Order</Button>
                </div>
            </Form>

            <Checkout
                items={items}
                shippingInfo={shippingInformation}
                showCheckout={showCheckout}
                setShow={setShowHandler} />
        </Container>
    );
};

export default UserInformation;