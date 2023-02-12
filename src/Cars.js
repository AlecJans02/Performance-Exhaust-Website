import {Button, Alert,} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar.js'
import 'bootstrap/dist/js/bootstrap.js';
import CarDropdown from './Components/CarDropdown.js';
import './Cars.css'
import Audir8 from './Audir8.png'
import Raect from 'react';
import Carexhaustdisplays from './Components/Carexhaustdisplays.js';

function Cars () {
    return (
        <div className="Carpage">
            <div>
                <Navbar />
            </div>
            <div className="InfoDisplay" style={{backgroundImage: 'url(' + Audir8 + ')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                <h1 className="Header" >Please Select Your Car Model Below</h1>
                <CarDropdown />
            </div>
            <footer className="Footer">Created by github.com/AlecJans02</footer>
        </div>
    )
}

export default Cars;