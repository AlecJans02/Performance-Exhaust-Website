import React, { Component } from 'react';
import {NavBar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.js';
import Cars from '../Cars.js';
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router-dom';
import { Router, useHref } from 'react-router';


class Navbar extends Component {
    render () {
        return (
            <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand">Performance Exhausts</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft: '20px'}}>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item" style={{marginLeft: '20px'}}>
                    <Link className="nav-link" to="/Cars" target="_self" >Cars</Link>
                  </li>
                  <li className="nav-item" style={{marginLeft: '20px'}}>
                  <Link className="nav-link" to="/Motorbikes" target="_self" >Motorcycle</Link>
                  </li>
                  <li className="nav-item dropdown" style={{marginLeft: '20px'}}>
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Manufacturers
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="https://www.akrapovic.com/en" target="_blank">Akropovic</a></li>
                      <li><a className="dropdown-item" href="https://www.arrow.it/en/" target="_blank">Arrow</a></li>
                      <li><a className="dropdown-item" href="https://www.austinracing.com/" target="_blank">Austin Racing</a></li>
                      <li><a className="dropdown-item" href="https://www.fabspeed.com/" target="_blank">Fabspeed</a></li>
                      <li><a className="dropdown-item" href="https://kreissieg.ocnk.net/" target="_blank">Kreissieg</a></li>
                      <li><a className="dropdown-item" href="https://www.magnaflow.com/" target="_blank">Magnaflow</a></li>
                      <li><a className="dropdown-item" href="https://m4exhaust.com/" target="_blank">M4</a></li>
                      <li><a className="dropdown-item" href="https://www.novitecgroup.com/en/" target="_blank">Novitec</a></li>
                      <li><a className="dropdown-item" href="https://www.sc-project.com/en/homepage/" target="_blank">SC Project</a></li>
                      <li><a className="dropdown-item" href="https://www.tubistyle.it/?lang=en" target="_blank">Tubi</a></li>
                      <li><a className="dropdown-item" href="https://www.yoshimura-rd.com/" target="_blank">Yoshimura</a></li>
                    </ul>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
          </div> 
        );
    }
}

export default Navbar;