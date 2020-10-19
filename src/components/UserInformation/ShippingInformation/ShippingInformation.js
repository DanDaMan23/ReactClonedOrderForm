import React, { useState, useEffect } from 'react';

import { Form, Row, Col } from 'react-bootstrap';

import classes from './ShippingInformation.css';

// const errorType = action => {
//     switch (action.type) {
//         case 'EMPTY_NAME':
//             return "empty name";
//         default:
//             return "other error";
//     }
// };

const ShippingInformation = props => 
{
    // const [errorMessage, dispatch] = useReducer(errorType, []);

    const {Group, Label, Control} = Form;

    const provinces = ["BC", "AB", "SK", "MB", "ON", "QC", "NL", "PE", "NS", "NB", "YT", "NT", "NU"];

    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [email, setEmail] = useState("");

    const {shippingInfo, setShippingInfo, hasErrors, setHasErrors, clickedPurchaseItems} = props;

    useEffect(() => {
        setHasErrors(!fullName || !address || !city || !province || !postalCode || !email);
        // console.log(fullName && address && city && province && postalCode && email ? "Something" : "Nothing");
        console.log("Render has errors");
    }, [fullName, address, city, province, postalCode, email]);

    const validPostalCode = postalCode =>
    {
        const regexPostal = new RegExp(/[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/);
        return regexPostal.test(postalCode);
    }

    const validEmailAddress = email =>
    {
        const regexEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
        return regexEmail.test(email);
    }

    return (
        <div className="p-3">
            <Group as={Row} controlId="fullName">
                <Col sm={3}>
                    <Label>Full name</Label>
                </Col>
                
                <Col sm={9}>
                    <Control 
                        type="text" 
                        name="fullName" 
                        value={fullName} 
                        onChange={event => {
                        setFullName(event.target.value);
                        setShippingInfo({...shippingInfo, fullName: event.target.value});
                    }} />
                    {(!fullName && clickedPurchaseItems) && <span className={classes.ErrorMessage}>*Please enter your Full Name</span>}
                </Col>
            </Group>

            <Group as={Row} controlId="address">
                <Col sm={3}>
                    <Label>Address</Label>
                </Col>
                
                <Col sm={9}>
                    <Control type="text" name="address" value={address} onChange={event => {
                        setAddress(event.target.value);
                        setShippingInfo({...shippingInfo, address: event.target.value});
                    }} />
                    {(!address && clickedPurchaseItems) && <span className={classes.ErrorMessage}>*Please enter your Address</span>}
                </Col>
            </Group>

            <Group as={Row} controlId="city">
                <Col sm={3}>
                    <Label>City</Label>
                </Col>
                
                <Col sm={9}>
                    <Control type="text" name="city" value={city} onChange={event => {
                        setCity(event.target.value);
                        setShippingInfo({...shippingInfo, city: event.target.value});
                    }} />
                    {(!city && clickedPurchaseItems) && <span className={classes.ErrorMessage}>*Please enter your City</span>}
                </Col>
            </Group>

            <Group as={Row} controlId="Province">
                <Col sm={3}>
                    <Label>Province</Label>
                </Col>
                
                <Col sm={9}>
                    <Control as="select" name="province" value={province} onChange={event => {
                        setProvince(event.target.value);
                        setShippingInfo({...shippingInfo, province: event.target.value});
                    }}>
                        <option key="none"></option> 
                        {provinces.map(province => {
                            return (
                                <option key={province}>{province}</option>
                            );
                        })}
                    </Control>
                    {(!province && clickedPurchaseItems) && <span className={classes.ErrorMessage}>*Please enter your Province</span>}
                </Col>
            </Group>

            <Group as={Row} controlId="postalCode">
                <Col sm={3}>
                    <Label>Postal Code</Label>
                </Col>
                
                <Col sm={9}>
                    <Control type="text" name="postalCode" value={postalCode} onChange={event => {
                        setPostalCode(event.target.value);
                        setShippingInfo({...shippingInfo, postalCode: event.target.value});
                    }} />
                    {(!validPostalCode(postalCode) && clickedPurchaseItems) && <span className={classes.ErrorMessage}>*Please enter a valid Postal Code</span>}
                </Col>
            </Group>

            <Group as={Row} controlId="email">
                <Col sm={3}>
                    <Label>Email address</Label>
                </Col>
                
                <Col sm={9}>
                    <Control type="email" name="email" value={email} onChange={event => {
                        setEmail(event.target.value);
                        setShippingInfo({...shippingInfo, email: event.target.value});
                    }} />
                    {(!validEmailAddress(email) && clickedPurchaseItems) && <span className={classes.ErrorMessage}>*Please enter a valid Email</span>}
                </Col>
            </Group>
            
        </div>
    );
}

export default ShippingInformation;