import React, { useState, useEffect } from 'react';

import { Form, Row, Col } from 'react-bootstrap';

import amex from '../../../images/amex.gif';
import visa from '../../../images/visa.gif';
import masterCard from '../../../images/mastercard.gif';

import classes from "./PaymentInformation.css";

const PaymentInformation = props => {
    const { Group, Label, Check, Control } = Form;

    const [selectedCardType, setSelectedCardType] = useState("visa");
    const [cardName, setCardName] = useState("");

    const [expirationMonth, setExpirationMonth] = useState("");
    const [expirationYear, setExpirationYear] = useState("");
    const [cardNumber, setCardNumber] = useState("");

    const { paymentInfo, setPaymentInfo, clickedPurchaseItems, setHasErrors } = props;

    useEffect(() => {
        setHasErrors(!expirationMonth || !expirationYear || !validCardNumber(cardNumber) || !cardName);
    }, [expirationMonth, expirationYear, cardNumber, cardName]);

    const validCardNumber = cardNumber =>
    {
        let regexCreditCardNumberLength = new RegExp(/^\d{10}$/); 

		let checkingFactors = [4, 3, 2, 7, 6, 5, 4, 3, 2];

		let multiplyingFactorSum = 0;
		let mod = 0;
		let lastDigitSum = 0;

		let ccLastDigit = cardNumber[cardNumber.length - 1];
		
		for(let i = 0; i < checkingFactors.length; i++)
		{
			multiplyingFactorSum += (cardNumber[i] * checkingFactors[i]);
		}

		mod = multiplyingFactorSum % 11;
        lastDigitSum = 11 - mod;
        
        return regexCreditCardNumberLength.test(cardNumber) || parseInt(ccLastDigit) === lastDigitSum
    }

    const cardType = (
        <div>
            <fieldset>
                <Group as={Row}>
                    <Col sm={4}>
                        <Check
                            type="radio"
                            label={<img src={visa} alt="visa" />}
                            name="cardType"
                            id="1"
                            value="visa"
                            checked={selectedCardType === "visa"}
                            onChange={event => {
                                setSelectedCardType(event.target.value);
                                setPaymentInfo({ ...paymentInfo, cardType: event.target.value })
                            }}
                        />
                    </Col>
                    <Col sm={4}>
                        <Check
                            type="radio"
                            label={<img src={amex} alt="AmEx" />}
                            name="cardType"
                            id="2"
                            value="amex"
                            checked={selectedCardType === "amex"}
                            onChange={event => {
                                setSelectedCardType(event.target.value);
                                setPaymentInfo({ ...paymentInfo, cardType: event.target.value })
                            }}
                        />
                    </Col>
                    <Col sm={4}>
                        <Check
                            type="radio"
                            label={<img src={masterCard} alt="Master Card" />}
                            name="cardType"
                            id="3"
                            value="mastercard"
                            checked={selectedCardType === "mastercard"}
                            onChange={event => {
                                setSelectedCardType(event.target.value);
                                setPaymentInfo({ ...paymentInfo, cardType: event.target.value })
                            }}
                        />
                    </Col>

                </Group>
            </fieldset>
        </div>
    );

    const MONTHS = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const cardInfo = (
        <div>
            <Group as={Row} controlId="nameOnCard">
                <Label as={Col} md={4} >Name on Card</Label>
                <Col md={8}>
                    <Control type="text" value={cardName} onChange={event => {
                        setCardName(event.target.value);
                        setPaymentInfo({ ...paymentInfo, cardName: cardName })
                    }} />
                    {(!cardName && clickedPurchaseItems) && <span className={classes.ErrorMessage}>*Please enter your card name</span>}
                </Col>

            </Group>

            <Group as={Row} controlId="expiryDate">
                <Label as={Col} md={4}>Expiry Date</Label>
                <Col md={8} className={classes.ExpiryDate}>
                    <Control as="select" value={expirationMonth} onChange={event => {
                        setExpirationMonth(event.target.value);
                        setPaymentInfo({ ...paymentInfo, expirationDate: event.target.value })
                    }}>
                        <option key="none">-- month --</option>
                        {MONTHS.map(month => {
                            return (
                                <option key={month}>{month}</option>
                            );
                        })}
                    </Control>

                    <Control as="select" value={expirationYear} onChange={event => {
                        setExpirationYear(event.target.value);
                        setPaymentInfo({ ...paymentInfo, expirationDate: event.target.value })
                    }}>
                        <option key="none">-- year --</option>
                        {[2020, 2021, 2022, 2023, 2024, 2025].map(year => {
                            return (
                                <option key={"year " + year}>{year}</option>
                            );
                        })}
                    </Control>
                </Col>
                {/* {(!expirationMonth && clickedPurchaseItems) && <span className={classes.ErrorMessage}>*Please enter expiration month</span>}
                {(!expirationYear && clickedPurchaseItems) && <span className={classes.ErrorMessage}>*Please enter your expiration year</span>}
                 */}

                {((!expirationMonth && clickedPurchaseItems) || (!expirationYear && clickedPurchaseItems)) && <span className={classes.ErrorCardMessage}>*Please enter expiration Date</span>}


            </Group>

            <Group as={Row} controlId="cardNumber">
                <Label as={Col} md={4} >Card Number</Label>
                <Col md={8}>
                    <Control type="number" value={cardNumber} onChange={event => {
                        setCardNumber(event.target.value);
                        setPaymentInfo({ ...paymentInfo, cardNumber: event.target.value });
                    }} />
                    {(!validCardNumber(cardNumber) && clickedPurchaseItems) && <span className={classes.ErrorMessage}>*Please enter your card number</span>}
                </Col>
            </Group>
        </div>
    );

    return (
        <div>
            <div className={classes.CardType}>
                <h5 className="mb-4">Card Type</h5>
                {cardType}
            </div>
            <div className={classes.CardInfo}>
                <h5 className="mb-4">Card Info</h5>
                {cardInfo}
            </div>
        </div>
    )
};

export default PaymentInformation;