import React from 'react';

import { Card, Popover, OverlayTrigger, Button, ListGroup } from 'react-bootstrap';

import classes from './Order.css';

const Order = props => {
    const items = props.orderData.items;
    const shippingInformation = props.orderData.shippingInformation;
    const paymentInformation = props.orderData.paymentInformation;

    const {Header, Body, Title} = Card;

    const {Item} = ListGroup;

    const total = () => {
        let total = 0;

        for (const key in items)
        {
            // console.log(items[key].item.itemPrice);
            total += items[key].item.itemPrice * items[key].count;
        }

        return total.toFixed(2);
    };

    const itemsPopover = (
        <Popover key="item">
            <ListGroup>
                {items.map(item => (
                    <Item key={item.key} className={classes.ItemGroup}>
                        <p>{item.item.itemName}</p>
                        <p>x{item.count}</p>
                    </Item>
                ))}
                <Item className={classes.ItemGroup}>
                    <p>Total: </p>
                    <p>${total()}</p>
                </Item>
            </ListGroup>
        </Popover>
    );

    return (
        <Card className={classes.Card}>
            <Body>
                <Title>{shippingInformation.fullName} Order Information</Title>
                <ListGroup>
                    <Item>
                        <p>Address: {shippingInformation.address}</p>
                    </Item>
                    <Item>
                        <p>City: {shippingInformation.city}</p>
                    </Item>
                    <Item>
                        <p>Province: {shippingInformation.province}</p>
                    </Item>
                    <Item>
                        <p>Postal Code: {shippingInformation.postalCode}</p>
                    </Item>
                    <Item>
                        <p>Email: {shippingInformation.email}</p>
                    </Item>
                </ListGroup>
                <OverlayTrigger trigger="click" placement="right" overlay={itemsPopover}>
                    <Button variant="primary" className={classes.Button}>Items</Button>
                </OverlayTrigger>
            </Body>
        </Card>
    );
}

export default Order;