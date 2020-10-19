import React, {useEffect, useState} from 'react';

import { Modal, Button, Container, Col, Row } from 'react-bootstrap';

import classes from './Checkout.css';

const Checkout = props => {
    const { showCheckout, setShow, shippingInfo, items } = props;

    const { Header, Title, Body, Footer } = Modal;

    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        setTotalCost(() => {
            let total = 0;

            for (let i = 0; i < items.length; i++)
            {
                total += items[i].item.itemPrice * items[i].count;
            }

            return total;
        })
    }, [items]);

    const addressInformation = shippingInfo => (
        <Container className={classes.Container}>
            <Row className={classes.Title}>
                <h4>Address Information</h4>
            </Row>
            <Row>
                <Col md={3} className={classes.ColumnTitle}>
                    <p>Address:</p>
                </Col>
                <Col md={3} className={classes.Columns}>
                    <p>{shippingInfo.address}</p>
                </Col>
                <Col md={3} className={classes.ColumnTitle}>
                    <p>City:</p>
                </Col>
                <Col md={3} className={classes.Columns}>
                    <p>{shippingInfo.city}</p>
                </Col>
            </Row>
            <Row>
                <Col md={3} className={classes.ColumnTitle}>
                    <p>Province:</p>
                </Col>
                <Col md={3} className={classes.Columns}>
                    <p>{shippingInfo.province}</p>
                </Col>
                <Col md={3} className={classes.ColumnTitle}>
                    <p>Postal Code:</p>
                </Col>
                <Col md={3} className={classes.Columns}>
                    <p>{shippingInfo.postalCode}</p>
                </Col>
            </Row>
            <Row>
                <Col md={9} className={classes.ColumnTitle}>
                    <p>Email:</p>
                </Col>
                <Col md={3} className={classes.Columns}>
                    <p>{shippingInfo.email}</p>
                </Col>
            </Row>
        </Container>
    );

    const orderInformation = items => (
        <Container className={classes.Container}>
            <Row className={classes.Title}>
                <h4>Order Information</h4>
            </Row>
            <Row>
                <Col md={4} className={classes.Label}>
                    <p>Quantity</p>
                </Col>
                <Col md={4} className={classes.Label}>
                    <p>Description</p>
                </Col>
                <Col md={4} className={classes.Label}>
                    <p>Cost</p>
                </Col>
            </Row>
            {items.map(item => (
                <Row key={item.key}>
                    <Col md={4} className={classes.Columns}>
                        <p>{item.count}</p>
                    </Col>
                    <Col md={4} className={classes.Columns}>
                        <p>{item.item.itemName}</p>
                    </Col>
                    <Col md={4} className={classes.Columns}>
                        <p>${(item.item.itemPrice * item.count).toFixed(2)}</p>
                    </Col>
                </Row>
            ))}
            {totalCostShow(totalCost)}
        </Container>
    );

    const totalCostShow = total => {
        // for (let item in allItems)
        // {
        //     total += (item.item.itemPrice * item.count);
        // }

        return (
            <Row>
                <Col className={classes.ColumnTitle} md={8}>
                    <p>Total:</p>
                </Col>
                <Col className={classes.Columns} md={4}>
                    <p>${total.toFixed(2)}</p>
                </Col>
            </Row>
        );
    }

    return (
        <Modal size="xl" scrollable centered show={showCheckout} onHide={() => setShow(false)}>
            <Header closeButton>
                <Title>Thanks for your order {shippingInfo.fullName}</Title>
            </Header>
            <Body>
                <h6>Here's a summary of your order: </h6>
                {addressInformation(shippingInfo)}
                {orderInformation(items)}
            </Body>
            <Footer>
                <Button variant="primary" href="/yourOrders" onClick={() => setShow(false)}>
                    Go to your orders
                </Button>
            </Footer>
        </Modal>
    );
};

export default Checkout;

