import React, {useState} from 'react';
import { Row, Col, InputGroup, Button, FormControl } from 'react-bootstrap';

import classes from './Product.css';


const Product = props => {

    const {pic, productName, details, price} = props;

    const [productCount, setProductCount] = useState(0);

    return (
        <Row className={classes.Product}>
            <Col md={3} className="mt-2">
                <img src={pic} width="70px" height="70px" alt={productName} />
            </Col>
            <Col md={6}>
                <p className={classes.details}>{details}</p>
                <h3>${price}</h3>
            </Col>
            <Col md={3} className="mt-2">
                <InputGroup className="p-2">
                    <FormControl aria-label="Small" 
                        aria-describedby="inputGroup-sizing-sm" 
                        type="number" 
                        value={productCount}
                        onChange={event => {
                            setProductCount(event.target.value < 0 ? 0 : event.target.value);
                        }} />
                    <InputGroup.Prepend className="ml-1">
                        <Button variant="outline-secondary" onClick={() => {
                            if (productCount !== 0)
                            {
                                props.addToCart({itemName: productName, itemPrice: price, itemPic: pic}, productCount);
                            }
                            else
                            {
                                alert("You cannot add a cart that is 0");
                            }
                        }}>Add</Button>
                    </InputGroup.Prepend>
                </InputGroup>
            </Col>
        </Row>
    );
}

export default Product;