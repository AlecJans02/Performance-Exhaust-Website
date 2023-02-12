import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.js';
import './Motorbikedropdown.css'

function Motorbikedropdown() {
    return (
      <div className="Dropdownstack">
        <DropdownButton className = "Dropdownone" id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Example 1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Example 2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Example 3</Dropdown.Item>
        </DropdownButton>
        <DropdownButton className = "Dropdowntwo" id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Example 1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Example 2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Example 3</Dropdown.Item>
        </DropdownButton>
        <DropdownButton className = "Dropdownthree" id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Example 1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Example 2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Example 3</Dropdown.Item>
        </DropdownButton>
    </div>
    );
  }

export default Motorbikedropdown;