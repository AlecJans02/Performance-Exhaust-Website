import React from 'react';
import {CarDropdown} from './CarDropdown.js';
import './Carexhuastdisplays.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.js';
import akra from './akra.png';
import fabspeed from './fabspeed.png';
import ksg from './ksg.png';
import mag from './mag.png';
import novitech from './novitech.png';
import tubi from './tubi.png';

function Carexhaustdisplays () {
    const [
        selectedMake,
        setSelectedMake,
        selectedModel,
        setSelectedModel,
        selectedYear,
        setSelectedYear,
        makes,
        models,
        years
      ] = CarDropdown();
}

export const Alfaone = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: +12 HP & 12nm</h2>
            <h2>Weight Reduction: -6 KG</h2>
            <h2>Material: Titanium</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/product/20886/Alfa-Romeo/Giulia-Quadrifoglio/2020?brandId=95&modelId=966&yearId=5949" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: TBD</h2>
            <h2>Weight Reduction: -1.9 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/alfa-romeo-giulia-quadrifoglio-primary-sport-catalytic-converter-downpipes/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: TBD</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/product/340" target="_blank">Kreissieg</Button>
        </div>
        <div className="Genericcard">
            <img src={mag}></img>
            <h1>Magnaflow Exhuast</h1>
            <h2>Power Increase: TBD</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/products/14009-magnaflow-performance-muffler-5-x-8-oval-3-xmod-14009" target="_blank">Magnaflow</Button>
        </div>
        <div className="Genericcard">
            <img src={novitech}></img>
            <h1>Novitech Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/brands/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: +4 HP & 14nm</h2>
            <h2>Weight Reduction: -4 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/alfa-romeo/giulia-quadrifoglio-typ-952-2016.html" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Audione = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: +8.6 HP & 15.6nm</h2>
            <h2>Weight Reduction: -1.1 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/product/20334/Audi/S3-8V/2020?brandId=18&modelId=919&yearId=5909" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/audi/s3/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/" target="_blank">Kreissieg</Button>
        </div>
        <div className="Genericcard">
            <img src={mag}></img>
            <h1>Magnaflow Exhuast</h1>
            <h2>Power Increase: TBD</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/products/14009-magnaflow-performance-muffler-5-x-8-oval-3-xmod-14009" target="_blank">Magnaflow</Button>
        </div>
        <div className="Genericcard">
            <img src={novitech}></img>
            <h1>Novitech Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/brands/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/audi.html" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Auditwo = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: +5.4 HP & 8.8nm</h2>
            <h2>Weight Reduction: -8.9 KG</h2>
            <h2>Material: Titanium</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/product/21412/Audi/S3-Sedan-8Y/2023?brandId=18&modelId=1184&yearId=7218" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/audi/s3/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/" target="_blank">Kreissieg</Button>
        </div>
        <div className="Genericcard">
            <img src={mag}></img>
            <h1>Magnaflow Exhuast</h1>
            <h2>Power Increase: est. +2 HP</h2>
            <h2>Weight Reduction: est. -1.5 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/products/14009-magnaflow-performance-muffler-5-x-8-oval-3-xmod-14009" target="_blank">Magnaflow</Button>
        </div>
        <div className="Genericcard">
            <img src={novitech}></img>
            <h1>Novitech Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/brands/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/audi.html" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Audithree = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: est. + 12HP</h2>
            <h2>Weight Reduction: est. -9 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/milltek-audi-rs3-saloon-sedan-400ps-8v-mqb-non-opf-gpf-models-2017-2018-cx-back/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/" target="_blank">Kreissieg</Button>
        </div>
        <div className="Genericcard">
            <img src={mag}></img>
            <h1>Magnaflow Exhuast</h1>
            <h2>Power Increase: est. +4 HP</h2>
            <h2>Weight Reduction: est -2.5 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/products/14009-magnaflow-performance-muffler-5-x-8-oval-3-xmod-14009" target="_blank">Magnaflow</Button>
        </div>
        <div className="Genericcard">
            <img src={novitech}></img>
            <h1>Novitech Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/brands/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/audi.html" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Audifour = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: +10 HP & 16.3nm</h2>
            <h2>Weight Reduction: -10.1 KG</h2>
            <h2>Material: Titanium</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/product/21806/Audi/RS-3-Sedan-8Y/2023?brandId=18&modelId=1224&yearId=7240" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: est. + 12HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/audi-tt-rs-rs3-2-5-liter-hjs-euro-6-sport-catalytic-converter-downpipe/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/" target="_blank">Kreissieg</Button>
        </div>
        <div className="Genericcard">
            <img src={mag}></img>
            <h1>Magnaflow Exhuast</h1>
            <h2>Power Increase: est. +4 HP</h2>
            <h2>Weight Reduction: est -2.5 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/products/14009-magnaflow-performance-muffler-5-x-8-oval-3-xmod-14009" target="_blank">Magnaflow</Button>
        </div>
        <div className="Genericcard">
            <img src={novitech}></img>
            <h1>Novitech Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/brands/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/audi.html" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Audifive = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: est. + 8HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/milltek-audi-rs4-b9-2-9-v6-turbo-avant-opf-gpf-models-2019-2021-hi-flow-Sport-cxs/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/" target="_blank">Kreissieg</Button>
        </div>
        <div className="Genericcard">
            <img src={mag}></img>
            <h1>Magnaflow Exhuast</h1>
            <h2>Power Increase: est. +5 HP</h2>
            <h2>Weight Reduction: est -3 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/products/14009-magnaflow-performance-muffler-5-x-8-oval-3-xmod-14009" target="_blank">Magnaflow</Button>
        </div>
        <div className="Genericcard">
            <img src={novitech}></img>
            <h1>Novitech Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/brands/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: est. +8 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless Steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/audi/rs4-avant-rs5-sportback-b9-2018.html" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Audisix = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: est. + 14HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/milltek-audi-rs5-cat-back-exhaust-system-2018-2021/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/" target="_blank">Kreissieg</Button>
        </div>
        <div className="Genericcard">
            <img src={mag}></img>
            <h1>Magnaflow Exhuast</h1>
            <h2>Power Increase: est. +9 HP</h2>
            <h2>Weight Reduction: est -4 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/products/14009-magnaflow-performance-muffler-5-x-8-oval-3-xmod-14009" target="_blank">Magnaflow</Button>
        </div>
        <div className="Genericcard">
            <img src={novitech}></img>
            <h1>Novitech Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/brands/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: est. +20 HP</h2>
            <h2>Weight Reduction: -8 KG</h2>
            <h2>Material: Stainless Steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/audi/rs5-coupe-b9-2019/exhaust-pipes/rs4-rs5-b9-front-exhaust-pipes-kit.html" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Audiseven = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: +9.4 HP & 15.4nm</h2>
            <h2>Weight Reduction: -8.1 KG</h2>
            <h2>Material: Titanium</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/product/14862/Audi/RS-6-Avant-C7/2018?brandId=18&modelId=51&yearId=5045" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: +21HP & 20nm</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/milltek-audi-rs6-c7-4-0-tfsi-biturbo-quxtro-inc-performance-edition-2013-2018-cx-back/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/" target="_blank">Kreissieg</Button>
        </div>
        <div className="Genericcard">
            <img src={mag}></img>
            <h1>Magnaflow Exhuast</h1>
            <h2>Power Increase: est. +7 HP</h2>
            <h2>Weight Reduction: est -4.4 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/products/14009-magnaflow-performance-muffler-5-x-8-oval-3-xmod-14009" target="_blank">Magnaflow</Button>
        </div>
        <div className="Genericcard">
            <img src={novitech}></img>
            <h1>Novitech Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/brands/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/audi.html" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Audieight = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: +15.5 HP & 17.9nm</h2>
            <h2>Weight Reduction: -10.4 KG</h2>
            <h2>Material: Titanium</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/product/21075/Audi/RS-6-Avant-C8/2023?brandId=18&modelId=1079&yearId=7159" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/audi/rs6/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/" target="_blank">Kreissieg</Button>
        </div>
        <div className="Genericcard">
            <img src={mag}></img>
            <h1>Magnaflow Exhuast</h1>
            <h2>Power Increase: est. +8 HP</h2>
            <h2>Weight Reduction: est -4.6 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/products/14009-magnaflow-performance-muffler-5-x-8-oval-3-xmod-14009" target="_blank">Magnaflow</Button>
        </div>
        <div className="Genericcard">
            <img src={novitech}></img>
            <h1>Novitech Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/brands/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: est. +18 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/audi/rs6-avant-rs7-sportback-c8-2019.html" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Audinine = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: +9.4 HP & 15.4nm</h2>
            <h2>Weight Reduction: -8.1 KG</h2>
            <h2>Material: Titanium</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/product/14863/Audi/RS-7-Sportback-C7/2018?brandId=18&modelId=52&yearId=5046" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: est. +12 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/milltek-audi-rs7-Sportback-large-bore-downpipes-2013-2018/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/" target="_blank">Kreissieg</Button>
        </div>
        <div className="Genericcard">
            <img src={mag}></img>
            <h1>Magnaflow Exhuast</h1>
            <h2>Power Increase: est. +9 HP</h2>
            <h2>Weight Reduction: est -6.2 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/products/14009-magnaflow-performance-muffler-5-x-8-oval-3-xmod-14009" target="_blank">Magnaflow</Button>
        </div>
        <div className="Genericcard">
            <img src={novitech}></img>
            <h1>Novitech Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/brands/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/audi.html" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Auditen = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: +15.5 HP & 17.9nm</h2>
            <h2>Weight Reduction: -10.4 KG</h2>
            <h2>Material: Titanium</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/product/21075/Audi/RS-7-Sportback-C8/2023?brandId=18&modelId=1106&yearId=7163" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/audi/rs7/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/" target="_blank">Kreissieg</Button>
        </div>
        <div className="Genericcard">
            <img src={mag}></img>
            <h1>Magnaflow Exhuast</h1>
            <h2>Power Increase: est. +9 HP</h2>
            <h2>Weight Reduction: est -6.2 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/products/14009-magnaflow-performance-muffler-5-x-8-oval-3-xmod-14009" target="_blank">Magnaflow</Button>
        </div>
        <div className="Genericcard">
            <img src={novitech}></img>
            <h1>Novitech Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/brands/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: est. +18 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/audi/rs6-avant-rs7-sportback-c8-2019.html" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Audieleven = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: +9 WHP & 15nm</h2>
            <h2>Weight Reduction: est. -8 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/fabspeed-audi-r8-v8-valvetronic-supersport-x-pipe-exhaust-system-2007-2012/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: est. +28 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/product/521" target="_blank">Kreissieg</Button>
        </div>
        <div className="Genericcard">
            <img src={mag}></img>
            <h1>Magnaflow Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/" target="_blank">Magnaflow</Button>
        </div>
        <div className="Genericcard">
            <img src={novitech}></img>
            <h1>Novitech Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/brands/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: +9 HP & 12nm</h2>
            <h2>Weight Reduction: -18 kg</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/audi/r8-coupe-spider-1-gen-facelift-4-2l-v8-2012-2015.html" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Auditwelve = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: +11.4 HP & 20nm</h2>
            <h2>Weight Reduction: -19.5 KG</h2>
            <h2>Material: Titanium</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/product/16625/Audi/R8-52-FSI-Coup%C3%A9-Spyder/2018?brandId=18&modelId=53&yearId=5044" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: +24 WHP & 38nm</h2>
            <h2>Weight Reduction: est. -18 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/audi-r8-v10-valvetronic-supersport-x-pipe-exhaust-system-2009-2015/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: est. +32 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/product/513" target="_blank">Kreissieg</Button>
        </div>
        <div className="Genericcard">
            <img src={mag}></img>
            <h1>Magnaflow Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/" target="_blank">Magnaflow</Button>
        </div>
        <div className="Genericcard">
            <img src={novitech}></img>
            <h1>Novitech Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/brands/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: +10 HP & 15nm</h2>
            <h2>Weight Reduction: -16 kg</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/audi/r8-coupe-spider-1-gen-facelift-5-2l-v10-2012-2015.html" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Bentlyone = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/products/Bentley/Continental-GT-W12-Speed?brandId=94&modelId=896&lineId=all" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: est. +38 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/fabspeed-bentley-continental-gt-gtc-w12-sport-performance-package-2003-2018/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: est. +40 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/product/362" target="_blank">Kreissieg</Button>
        </div>
        <div className="Genericcard">
            <img src={mag}></img>
            <h1>Magnaflow Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/" target="_blank">Magnaflow</Button>
        </div>
        <div className="Genericcard">
            <img src={novitech}></img>
            <h1>Novitech Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/brands/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: est. +36 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/bentley/continental-gt-gtc-v12-1-2-gen-2003-2018.html" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export default Carexhaustdisplays;