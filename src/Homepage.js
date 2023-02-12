import React from 'react';
import './Homepage.css';
import {Button, Alert,} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar.js'
import 'bootstrap/dist/js/bootstrap.js';
import Videobackground from './Components/Videobackground.jsx';
import Cardcover from './Components/Cardcover';
import Cars from './Cars.js';
import { Route, Routes } from 'react-router-dom';
import Motorbikes from './Motorbikes.js';


function Homepage () {
    return (
      <div className="App" style={{height: '100%'}}>
        <div>
          <Navbar></Navbar>
        </div>
        <div className="Main">
          <Videobackground className="vid" />
        </div>
        <footer className="Footer">Created by github.com/AlecJans02</footer>
      </div>
    )
  }

  
  export default Homepage;