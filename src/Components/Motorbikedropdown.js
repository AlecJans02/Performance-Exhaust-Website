import React, { useEffect, useState} from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.js';
import './Motorbikedropdown.css';
import Makes from './motorbikemakes.js';
import { Appriliaone, Appriliatwo, Appriliathree, Bmwonebike, Ducatione, Ducatitwo, Ducatithree, Hondaone, Hondatwo, Hondathree, Kawasakione, Kawasakitwo,
Kawasakithree, Kawasakifour, Susukione, Susukitwo, Susukithree, Susukifour, Yamahaone, Yamahatwo, Yamahathree, Yamahafour, Yamahafive } from './Motorexhaustdisplays.js';

export function Motorbikedropdown() {
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
    <div className="Bikecarddisplay">
    {selectedMake === "Aprillia" && selectedModel === "RSV4" && selectedYear === "2017-2020" && <Appriliaone />}
    {selectedMake === "Aprillia" && selectedModel === "RSV4" && selectedYear === "2021+" && <Appriliatwo />}
    {selectedMake === "Aprillia" && selectedModel === "RS 660" && selectedYear === "2020+" && <Appriliathree />}
    {selectedMake === "BMW Motorrad" && selectedModel === "M/S1000 RR" && selectedYear === "2019+" && <Bmwonebike />}
    {selectedMake === "Ducati" && selectedModel === "V4 R/S/Speciale" && selectedYear === "2018-2022" && <Ducatione />}
    {selectedMake === "Ducati" && selectedModel === "V4 R/S/Speciale" && selectedYear === "2023+" && <Ducatitwo />}
    {selectedMake === "Ducati" && selectedModel === "V4 SP2" && selectedYear === "2022+" && <Ducatione />}
    {selectedMake === "Ducati" && selectedModel === "V2 Panigale" && selectedYear === "2020+" && <Ducatithree />}
    {selectedMake === "Honda" && selectedModel === "CBR600 RR" && selectedYear === "2013-2020" && <Hondaone />}
    {selectedMake === "Honda" && selectedModel === "CBR600 RR" && selectedYear === "2021+" && <Hondaone />}
    {selectedMake === "Honda" && selectedModel === "CBR1000 RR/R" && selectedYear === "2017-2019" && <Hondatwo />}
    {selectedMake === "Honda" && selectedModel === "CBR1000 RR/R" && selectedYear === "2020+" && <Hondathree />}
    {selectedMake === "Kawasaki" && selectedModel === "ZX6 R" && selectedYear === "2013-2018" && <Kawasakione />}
    {selectedMake === "Kawasaki" && selectedModel === "ZX6 R" && selectedYear === "2019+" && <Kawasakitwo />}
    {selectedMake === "Kawasaki" && selectedModel === "ZX10 R/RR" && selectedYear === "2016-2020" && <Kawasakithree />}
    {selectedMake === "Kawasaki" && selectedModel === "ZX10 R/RR" && selectedYear === "2021+" && <Kawasakifour />}
    {selectedMake === "Susuki" && selectedModel === "GSXR 600" && selectedYear === "2011+" && <Susukione />}
    {selectedMake === "Susuki" && selectedModel === "GSXR 750" && selectedYear === "2011+" && <Susukitwo />}
    {selectedMake === "Susuki" && selectedModel === "GSXR 1000" && selectedYear === "2009-2016" && <Susukithree />}
    {selectedMake === "Susuki" && selectedModel === "GSXR 1000" && selectedYear === "2017+" && <Susukifour />}
    {selectedMake === "Yamaha" && selectedModel === "YZF R6" && selectedYear === "2009-2016" && <Yamahaone />}
    {selectedMake === "Yamaha" && selectedModel === "YZF R6" && selectedYear === "2017+" && <Yamahatwo />}
    {selectedMake === "Yamaha" && selectedModel === "YZF R7" && selectedYear === "2022+" && <Yamahathree />}
    {selectedMake === "Yamaha" && selectedModel === "YZF R1" && selectedYear === "2015-2019" && <Yamahafour />}
    {selectedMake === "Yamaha" && selectedModel === "YZF R1" && selectedYear === "2020+" && <Yamahafive />}
    </div>
    </div>
    );
  }

export default Motorbikedropdown;