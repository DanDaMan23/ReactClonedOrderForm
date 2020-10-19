import React from 'react';

import {Container, Jumbotron, Button} from 'react-bootstrap';

import classes from './HomePage.css';

const HomePage = props =>
{

    return (
        <Container>
            <Jumbotron className={classes.Jumbotron}>
                <h1>Welcome to the new upgraded Order Form</h1>
                <p>
                    In the previous version, the form was prebuilt and all I did in that version is do the form validation using
                    vanilla javascript for part 1, and for part 2, I used Php to use the GET and POST tools to create the receipt. 
                </p>
                <p>
                    This version, I used React.js to create the project itself from frontend to backend. Most of the time, I used react
                    hooks to create components and manage all state. In the backend, I used firebase as my database and used the fetch 
                    api to post data and get data from the database.
                </p>
                <Button variant="primary" href="/purchaseOrder">Create an order</Button>
            </Jumbotron>
        </Container>
    );
};

export default HomePage;