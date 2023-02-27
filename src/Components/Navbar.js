import React, { Component } from 'react';
import {NavBar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.js';
import Cars from '../Cars.js';
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router-dom';
import { Router, useHref } from 'react-router';
import { SearchBarResult } from './SearchbarResults.js';


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
                  <input className="form-control" list="datalistOptions" id="SearchResults" placeholder="Search Manufacturers" onChange={SearchBarResult}></input>
                 <datalist id="datalistOptions">
                    <option value="Alfa Romeo"></option>
                    <option value="Aprillia"></option>
                    <option value="Audi"></option>
                    <option value="Bentley"></option>
                    <option value="BMW"></option>
                    <option value="BMW Motorrad"></option>
                    <option value="Chevrolet"></option>
                    <option value="Ducati"></option>
                    <option value="Ferrari"></option>
                    <option value="Honda"></option>
                    <option value="Kawasaki"></option>
                    <option value="Lamborghini"></option>
                    <option value="Masserati"></option>
                    <option value="McLaren"></option>
                    <option value="Mercedes"></option>
                    <option value="Nissan"></option>
                    <option value="Porsche"></option>
                    <option value="Susuki"></option>
                    <option value="Toyota"></option>
                    <option value="Yamaha"></option> {/* need to fix bottom of datalist on website as shows cities */}
                  </datalist> 
                </form>
              </div>
            </div>
          </nav>
          </div> 
        );
    }
}



export default Navbar;