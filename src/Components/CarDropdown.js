import React, { useEffect, useState} from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.js';
import './CarDropdown.css';
import Makes from './makes.js';
import {Alfaone, Audione, Auditwo, Audithree, Audifour, Audifive, Audisix, Audiseven, Audieight, Audinine, Auditen, Audieleven, Auditwelve, Bentlyone} from './Carexhaustdisplays.js';

export function CarDropdown() {
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const makes = Array.from(new Set(Makes.map(make => make.make)));
  const models = Makes
    .find(make => make.make === selectedMake)
    ?.models || [];
  const years = Makes
    .find(make => make.make === selectedMake)
    ?.models.find(model => model.model === selectedModel)
    ?.years || [];
    
  return (
    <div>
    <div className="Dropdownstack">
      <DropdownButton className = "Dropdownone" id="dropdown-basic-button" title={selectedMake || 'Make'}>
          {makes.map((make, index) => (
          <Dropdown.Item key={index} onClick={() => setSelectedMake(make)}>
          {make}
          </Dropdown.Item>
          ))}
      </DropdownButton>
      <DropdownButton className = "Dropdowntwo" id="dropdown-basic-button" title={selectedModel || 'Model'} disabled={!selectedMake}>
          {models.map((model, index) => (
          <Dropdown.Item key={index} onClick={() => setSelectedModel(model.model)}>
          {model.model} 
          </Dropdown.Item>
          ))}
      </DropdownButton>
      <DropdownButton className = "Dropdownthree" id="dropdown-basic-button" title={selectedYear || 'Year'} disabled={!selectedModel}>
          {years.map((year, index) => (
          <Dropdown.Item key={index} onClick={() => setSelectedYear(year.year)}>
          {year.year} 
          </Dropdown.Item>
          ))}
      </DropdownButton>
      
    </div>
    <div className="Carcarddisplay">
    {selectedMake === "Alfa Romeo" && selectedModel === "Giulia Quadrifoglio" && selectedYear === "2017+" && <Alfaone />}
    {selectedMake === "Audi" && selectedModel === "S3 Sedan" && selectedYear === "2016-2020" && <Audione />}
    {selectedMake === "Audi" && selectedModel === "S3 Sedan" && selectedYear === "2021+" && <Auditwo />}
    {selectedMake === "Audi" && selectedModel === "RS3 Sedan" && selectedYear === "2017-2020" && <Audithree />}
    {selectedMake === "Audi" && selectedModel === "RS3 Sedan" && selectedYear === "2020+" && <Audifour />}
    {selectedMake === "Audi" && selectedModel === "RS4 Avant" && selectedYear === "2017+" && <Audifive />}
    {selectedMake === "Audi" && selectedModel === "RS5 Coupe" && selectedYear === "2018+" && <Audisix />}
    {selectedMake === "Audi" && selectedModel === "RS6 Avant" && selectedYear === "2013-2018" && <Audiseven />}
    {selectedMake === "Audi" && selectedModel === "RS6 Avant" && selectedYear === "2019+" && <Audieight />}
    {selectedMake === "Audi" && selectedModel === "RS7 Sportback" && selectedYear === "2013-2018" && <Audinine />}
    {selectedMake === "Audi" && selectedModel === "RS7 Sportback" && selectedYear === "2019+" && <Auditen />}
    {selectedMake === "Audi" && selectedModel === "R8 V8" && selectedYear === "2006-2015" && <Audieleven />}
    {selectedMake === "Audi" && selectedModel === "R8 V8" && selectedYear === "2015+" && <Audieleven />}
    {selectedMake === "Audi" && selectedModel === "R8 V10" && selectedYear === "2015+" && <Auditwelve />}
    {selectedMake === "Audi" && selectedModel === "R8 V10" && selectedYear === "2006-2015" && <Auditwelve />}
    {selectedMake === "Bentley" && selectedModel === "Continental GT" && selectedYear === "2011-2018" && <Bentlyone />}
    {selectedMake === "Bentley" && selectedModel === "Continental GT" && selectedYear === "2018+" && <Bentlyone />}
    </div>
    </div>
  );
}


export default CarDropdown;