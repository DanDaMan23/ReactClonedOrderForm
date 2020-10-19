import React, { useEffect, useState } from 'react';

import Order from './Order/Order';

import { Container, Row, Col } from 'react-bootstrap';

const Orders = props => {

    const [orderData, setOrderData] = useState([]);

    useEffect(() => {
        fetch('https://webdevorderformreact.firebaseio.com/orders.json')
            .then(response => response.json())
            .then(responseData => {
                let datas = [];

                for (const key in responseData) {
                    console.log(responseData[key]);
                    datas.push({key: key, orderData: responseData[key]});
                }
                setOrderData(datas);
            });
    }, []);

    return (
        <Container>
            <Row>
                {orderData.map(data => (
                    <Col key={data.key} md={6}>
                        <Order orderData={data.orderData} />  
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Orders;

