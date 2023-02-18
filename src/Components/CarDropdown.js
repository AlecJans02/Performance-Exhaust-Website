import React, { useEffect, useState} from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.js';
import './CarDropdown.css';
import Makes from './makes.js';
import {Alfaone, Audione, Auditwo, Audithree, Audifour, Audifive, Audisix, Audiseven, Audieight, Audinine, Auditen, Audieleven, Auditwelve, Bentlyone, Bmwone, 
Bmwtwo, Bmwthree, Bmwfour, Bmwfive, Bmwsix, Bmwseven, Bmweight, Bmwnine, Bmwten, Bmweleven, Bmwtwelve, Corvetteone, Corvettetwo, Ferrarione, Ferraritwo, Ferrarithree,
Ferrarifour, Ferrarifive, Ferrarisix, Lamboone, Lambotwo, Lambothree, Masseratione, Masseratitwo, Masseratithree, Mclarenone, Mclarentwo, Mclarenthree,
Mclarenfour, Mclarenfive, Mclarensix} from './Carexhaustdisplays.js';

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
    {selectedMake === "BMW" && selectedModel === "M240i" && selectedYear === "2017-2021" && <Bmwone />}
    {selectedMake === "BMW" && selectedModel === "M240i" && selectedYear === "2021+" && <Bmwtwo />}
    {selectedMake === "BMW" && selectedModel === "M2" && selectedYear === "2015-2021" && <Bmwthree />}
    {selectedMake === "BMW" && selectedModel === "M340i" && selectedYear === "2021+" && <Bmwfour />}
    {selectedMake === "BMW" && selectedModel === "M3" && selectedYear === "2014-2018" && <Bmwfive />}
    {selectedMake === "BMW" && selectedModel === "M3" && selectedYear === "2019+" && <Bmwsix />}
    {selectedMake === "BMW" && selectedModel === "M440i" && selectedYear === "2021+" && <Bmwseven />}
    {selectedMake === "BMW" && selectedModel === "M4" && selectedYear === "2015-2020" && <Bmweight />}
    {selectedMake === "BMW" && selectedModel === "M4" && selectedYear === "2021+" && <Bmwnine />}
    {selectedMake === "BMW" && selectedModel === "M5" && selectedYear === "2011-2017" && <Bmwten />}
    {selectedMake === "BMW" && selectedModel === "M5" && selectedYear === "2018+" && <Bmweleven />}
    {selectedMake === "BMW" && selectedModel === "M8" && selectedYear === "2018+" && <Bmwtwelve />}
    {selectedMake === "Chevrolet" && selectedModel === "Corvette C8" && selectedYear === "2020+" && <Corvetteone />}
    {selectedMake === "Chevrolet" && selectedModel === "Corvette C7" && selectedYear === "2014-2019" && <Corvettetwo />}
    {selectedMake === "Ferrari" && selectedModel === "SF90" && selectedYear === "2019+" && <Ferrarione />}
    {selectedMake === "Ferrari" && selectedModel === "Roma" && selectedYear === "2021+" && <Ferraritwo />}
    {selectedMake === "Ferrari" && selectedModel === "F8 (Spider)" && selectedYear === "2019+" && <Ferrarithree />}
    {selectedMake === "Ferrari" && selectedModel === "812" && selectedYear === "2018-2022" && <Ferrarifour />}
    {selectedMake === "Ferrari" && selectedModel === "488 (pista)" && selectedYear === "2015-2019" && <Ferrarifive />}
    {selectedMake === "Ferrari" && selectedModel === "458 (spider)" && selectedYear === "2013-2015" && <Ferrarisix />}
    {selectedMake === "Lamborghini" && selectedModel === "Aventador V12 SVG" && selectedYear === "2018-2021" && <Lamboone />}
    {selectedMake === "Lamborghini" && selectedModel === "Huracan V10" && selectedYear === "2020-2022" && <Lambotwo />}
    {selectedMake === "Lamborghini" && selectedModel === "Huracan V10" && selectedYear === "2022+" && <Lambotwo />}
    {selectedMake === "Lamborghini" && selectedModel === "Gallardo V10" && selectedYear === "2008-2014" && <Lambothree />}
    {selectedMake === "Masserati" && selectedModel === "MC20" && selectedYear === "2020+" && <Masseratione />}
    {selectedMake === "Masserati" && selectedModel === "Ghibli" && selectedYear === "2013+" && <Masseratitwo />}
    {selectedMake === "Masserati" && selectedModel === "Quattroporte" && selectedYear === "2020+" && <Masseratithree />}
    {selectedMake === "McLaren" && selectedModel === "720 S" && selectedYear === "2018-2020" && <Mclarenone />}
    {selectedMake === "McLaren" && selectedModel === "765 LT" && selectedYear === "2022+" && <Mclarentwo />}
    {selectedMake === "McLaren" && selectedModel === "570 S" && selectedYear === "2015-2021" && <Mclarenthree />}
    {selectedMake === "McLaren" && selectedModel === "650 S" && selectedYear === "2014-2019" && <Mclarenfour />}
    {selectedMake === "McLaren" && selectedModel === "540 C" && selectedYear === "2015+" && <Mclarenfive />}
    {selectedMake === "McLaren" && selectedModel === "600 LT" && selectedYear === "2018+" && <Mclarensix />}
    </div>
    </div>
  );
}


export default CarDropdown;