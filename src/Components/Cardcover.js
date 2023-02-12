import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.js';
import './Ghostcard.css';
import {Link} from 'react-router-dom';

class Cardcover extends Component {
    render () {
        return (
            <Card className="glass">
            <Card.Body >
                <Card.Title className="Title">Performance Exhausts</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Text className ="Text">
                        Welcome to Performance Exhusts where we provide you with 
                        the best quality performance exhuasts for your car or
                        motorcycle of choice. please enter your vehicles make
                        model and year on either the car or motorcycle pages.
                    </Card.Text>
                <Link to="/Cars">
                    <Button className="LinkOne">CAR</Button>
                </Link>
                <Link to="/Motorbikes">
                    <Button className="LinkTwo">MOTORCYCLE</Button>
                </Link>
            </Card.Body>
            </Card>
        );
    }
}

export default Cardcover;