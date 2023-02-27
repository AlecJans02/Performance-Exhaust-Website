import {Button, Alert,} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar.js'
import 'bootstrap/dist/js/bootstrap.js';
import React from 'react';
import Motorbikedropdown from './Components/Motorbikedropdown.js';
import r6 from './r6test.jpg';
import './Motorbike.css';

function Motorbikes () {
    return (
        <div className="Bikepage">
            <div>
                <Navbar />
            </div>
            <div className="InfoDisplay" style={{backgroundImage: 'url(' + r6 + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                <h1 className="Header" >Please Select Your Motorcycle Model Below</h1>
                <Motorbikedropdown />
            </div>
            <footer className="Footer">Created by github.com/AlecJans02</footer>
        </div>
    )
}

export default Motorbikes;

