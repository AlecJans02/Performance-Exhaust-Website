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

export const Bmwone = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: +6.4 HP & 12.6nm</h2>
            <h2>Weight Reduction: -0.7 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/product/20005/BMW/M240i-F22-F23/2021?brandId=19&modelId=834&yearId=6695" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: est. +5 HP</h2>
            <h2>Weight Reduction: -5 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/bmw-m240i-f22-muffler-bypass-exhaust-system-2016/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/product-list?keyword=bmw&Submit=Search" target="_blank">Kreissieg</Button>
        </div>
        <div className="Genericcard">
            <img src={mag}></img>
            <h1>Magnaflow Exhuast</h1>
            <h2>Power Increase: est. +4 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/products/14006-magnaflow-performance-muffler-5-x-8-oval-25-xmod-14006" target="_blank">Magnaflow</Button>
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
            <h2>Weight Reduction: NA</h2> {/* this isnt finished as tubi website is down*/}
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.tubistyle.it/?lang=en" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Bmwtwo = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: +9.5 HP & 20.5nm</h2>
            <h2>Weight Reduction: -4 KG</h2>
            <h2>Material: Titanium</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/product/21632/BMW/M240i-G42/2023?brandId=19&modelId=1228&yearId=7221" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/bmw/2-series/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/product-list?keyword=bmw&Submit=Search" target="_blank">Kreissieg</Button>
        </div>
        <div className="Genericcard">
            <img src={mag}></img>
            <h1>Magnaflow Exhuast</h1>
            <h2>Power Increase: est. +4 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/products/14006-magnaflow-performance-muffler-5-x-8-oval-25-xmod-14006" target="_blank">Magnaflow</Button>
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
            <h2>Weight Reduction: NA</h2> {/* this isnt finished as tubi website is down*/}
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.tubistyle.it/?lang=en" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Bmwthree = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: +9.1 HP & 8.8nm</h2>
            <h2>Weight Reduction: -5.3 KG</h2>
            <h2>Material: Titanium</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/product/16911/BMW/M2-F87/2017?brandId=19&modelId=796&yearId=4592" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: est. +8 HP</h2>
            <h2>Weight Reduction: -6.3 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/bmw-m2-f87-muffler-bypass-exhaust-system/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/product-list?keyword=bmw&Submit=Search" target="_blank">Kreissieg</Button>
        </div>
        <div className="Genericcard">
            <img src={mag}></img>
            <h1>Magnaflow Exhuast</h1>
            <h2>Power Increase: est. +5.2 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/products/14006-magnaflow-performance-muffler-5-x-8-oval-25-xmod-14006" target="_blank">Magnaflow</Button>
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
            <h2>Weight Reduction: NA</h2> {/* this isnt finished as tubi website is down*/}
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.tubistyle.it/?lang=en" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Bmwfour = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: +11.6 HP & 17.1nm</h2>
            <h2>Weight Reduction: -6.5 KG</h2>
            <h2>Material: Titanium</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/product/21622/BMW/M340I-G20-G21/2023?brandId=19&modelId=1175&yearId=7212" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: est. +4.5 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/fabspeed-bmw-m340i-g20-sport-catalytic-converter-downpipe-2019/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/product-list?keyword=bmw&Submit=Search" target="_blank">Kreissieg</Button>
        </div>
        <div className="Genericcard">
            <img src={mag}></img>
            <h1>Magnaflow Exhuast</h1>
            <h2>Power Increase: est. +5.8 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/products/14006-magnaflow-performance-muffler-5-x-8-oval-25-xmod-14006" target="_blank">Magnaflow</Button>
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
            <h2>Weight Reduction: NA</h2> {/* this isnt finished as tubi website is down*/}
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.tubistyle.it/?lang=en" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Bmwfive = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: +7.2 HP & 17.4nm</h2>
            <h2>Weight Reduction: -3 KG</h2>
            <h2>Material: Titanium</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/product/15431/BMW/M3-F80/2018?brandId=19&modelId=670&yearId=5052" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: +9 WHP & 19nm</h2>
            <h2>Weight Reduction: -14.9 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/fabspeed-bmw-m3-m4-f80-f82-valvetronic-exhaust-system-2014-2020/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/product-list?keyword=bmw&Submit=Search" target="_blank">Kreissieg</Button>
        </div>
        <div className="Genericcard">
            <img src={mag}></img>
            <h1>Magnaflow Exhuast</h1>
            <h2>Power Increase: est. +6.6 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/products/14006-magnaflow-performance-muffler-5-x-8-oval-25-xmod-14006" target="_blank">Magnaflow</Button>
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
            <h2>Weight Reduction: NA</h2> {/* this isnt finished as tubi website is down*/}
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.tubistyle.it/?lang=en" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Bmwsix = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: +10.7 HP & 13.9nm</h2>
            <h2>Weight Reduction: -8.3 KG</h2>
            <h2>Material: Titanium</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/product/21425/BMW/M3-G80-G81/2023?brandId=19&modelId=1189&yearId=7179" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: est. +6 HP</h2>
            <h2>Weight Reduction: -1.4 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/fabspeed-bmw-m3-m4-g80-g82-valvetronic-exhaust-system-2021/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/product-list?keyword=bmw&Submit=Search" target="_blank">Kreissieg</Button>
        </div>
        <div className="Genericcard">
            <img src={mag}></img>
            <h1>Magnaflow Exhuast</h1>
            <h2>Power Increase: est. +4.7 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/products/14006-magnaflow-performance-muffler-5-x-8-oval-25-xmod-14006" target="_blank">Magnaflow</Button>
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
            <h2>Weight Reduction: NA</h2> {/* this isnt finished as tubi website is down*/}
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.tubistyle.it/?lang=en" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Bmwseven = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: +4.5 HP & 12.4nm</h2>
            <h2>Weight Reduction: -4.4 KG</h2>
            <h2>Material: Titanium</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/product/21623/BMW/M440I-G22-G23/2023?brandId=19&modelId=1176&yearId=7213" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/bmw/340i-440i-f30-f32/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/product-list?keyword=bmw&Submit=Search" target="_blank">Kreissieg</Button>
        </div>
        <div className="Genericcard">
            <img src={mag}></img>
            <h1>Magnaflow Exhuast</h1>
            <h2>Power Increase: est. +3.3 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/products/14006-magnaflow-performance-muffler-5-x-8-oval-25-xmod-14006" target="_blank">Magnaflow</Button>
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
            <h2>Weight Reduction: NA</h2> {/* this isnt finished as tubi website is down*/}
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.tubistyle.it/?lang=en" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Bmweight = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: +7.2 HP & 17.4nm</h2>
            <h2>Weight Reduction: -3 KG</h2>
            <h2>Material: Titanium</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/product/15163/BMW/M4-F82-F83/2020?brandId=19&modelId=671&yearId=5915" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: +9 WHP & 19nm</h2>
            <h2>Weight Reduction: -14.9 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/fabspeed-bmw-m3-m4-f80-f82-valvetronic-exhaust-system-2014-2020/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/product-list?keyword=bmw&Submit=Search" target="_blank">Kreissieg</Button>
        </div>
        <div className="Genericcard">
            <img src={mag}></img>
            <h1>Magnaflow Exhuast</h1>
            <h2>Power Increase: est. +6.3 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/products/14006-magnaflow-performance-muffler-5-x-8-oval-25-xmod-14006" target="_blank">Magnaflow</Button>
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
            <h2>Weight Reduction: NA</h2> {/* this isnt finished as tubi website is down*/}
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.tubistyle.it/?lang=en" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Bmwnine = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: +10.7 HP & 13.9nm</h2>
            <h2>Weight Reduction: -8.3 KG</h2>
            <h2>Material: Titanium</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/product/21425/BMW/M4-G82-G83/2023?brandId=19&modelId=1187&yearId=7181" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: est. +6 HP</h2>
            <h2>Weight Reduction: -1.4 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/fabspeed-bmw-m3-m4-g80-g82-valvetronic-exhaust-system-2021/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/product-list?keyword=bmw&Submit=Search" target="_blank">Kreissieg</Button>
        </div>
        <div className="Genericcard">
            <img src={mag}></img>
            <h1>Magnaflow Exhuast</h1>
            <h2>Power Increase: est. +6.5 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/products/14006-magnaflow-performance-muffler-5-x-8-oval-25-xmod-14006" target="_blank">Magnaflow</Button>
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
            <h2>Weight Reduction: NA</h2> {/* this isnt finished as tubi website is down*/}
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.tubistyle.it/?lang=en" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Bmwten = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: +9.9 HP & 17nm</h2>
            <h2>Weight Reduction: -10.5 KG</h2>
            <h2>Material: Titanium</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/product/11873/BMW/M5-F10/2017?brandId=19&modelId=62&yearId=4595" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: est. +5.6 HP</h2>
            <h2>Weight Reduction: -6.3 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/bmw-m5-f10-muffler-bypass-pipes/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/product-list?keyword=bmw&Submit=Search" target="_blank">Kreissieg</Button>
        </div>
        <div className="Genericcard">
            <img src={mag}></img>
            <h1>Magnaflow Exhuast</h1>
            <h2>Power Increase: est. +5.5 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/products/14006-magnaflow-performance-muffler-5-x-8-oval-25-xmod-14006" target="_blank">Magnaflow</Button>
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
            <h2>Weight Reduction: NA</h2> {/* this isnt finished as tubi website is down*/}
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.tubistyle.it/?lang=en" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Bmweleven = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: +11.1 HP & 21.3nm</h2>
            <h2>Weight Reduction: -9.4 KG</h2>
            <h2>Material: Titanium</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/product/20483/BMW/M5-M5-Competition-F90/2023?brandId=19&modelId=955&yearId=7167" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: est. +6.3 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/bmw-m5-f90-valvetronic-exhaust-system-with-quad-style-tips/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/product-list?keyword=bmw&Submit=Search" target="_blank">Kreissieg</Button>
        </div>
        <div className="Genericcard">
            <img src={mag}></img>
            <h1>Magnaflow Exhuast</h1>
            <h2>Power Increase: est. +5.8 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/products/14006-magnaflow-performance-muffler-5-x-8-oval-25-xmod-14006" target="_blank">Magnaflow</Button>
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
            <h2>Weight Reduction: NA</h2> {/* this isnt finished as tubi website is down*/}
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.tubistyle.it/?lang=en" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Bmwtwelve = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: est. +18 HP</h2>
            <h2>Weight Reduction: -10.2 KG</h2>
            <h2>Material: Titanium</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/product/21435/BMW/M8-M8-Competition-F91-F92/2023?brandId=19&modelId=1101&yearId=7172" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/bmw/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/product-list?keyword=bmw&Submit=Search" target="_blank">Kreissieg</Button>
        </div>
        <div className="Genericcard">
            <img src={mag}></img>
            <h1>Magnaflow Exhuast</h1>
            <h2>Power Increase: est. +7.9 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/products/14006-magnaflow-performance-muffler-5-x-8-oval-25-xmod-14006" target="_blank">Magnaflow</Button>
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
            <h2>Weight Reduction: NA</h2> {/* this isnt finished as tubi website is down*/}
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.tubistyle.it/?lang=en" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Corvetteone = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: +4.5 HP & 8.2nm</h2>
            <h2>Weight Reduction: -15.3 KG</h2>
            <h2>Material: Titanium</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/product/21323/Chevrolet/Corvette-Stingray-C8/2023?brandId=21&modelId=1164&yearId=7209" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: +14 HP & 20.3nm</h2>
            <h2>Weight Reduction: -9 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/fabspeed-chevrolet-corvette-c8-valvetronic-maxflo-exhaust-system-2020/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/product-list?keyword=bmw&Submit=Search" target="_blank">Kreissieg</Button>
        </div>
        <div className="Genericcard">
            <img src={mag}></img>
            <h1>Magnaflow Exhuast</h1>
            <h2>Power Increase: est. +8.8 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/products/14006-magnaflow-performance-muffler-5-x-8-oval-25-xmod-14006" target="_blank">Magnaflow</Button>
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
            <h2>Weight Reduction: NA</h2> {/* this isnt finished as tubi website is down*/}
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.tubistyle.it/?lang=en" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Corvettetwo = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: +18.3 HP & 25.8nm</h2>
            <h2>Weight Reduction: -11.6 KG</h2>
            <h2>Material: Titanium</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/product/15696/Chevrolet/Corvette-Stingray-Grand-Sport-C7/2019?brandId=21&modelId=737&yearId=5445" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/c8-corvette/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/product-list?keyword=bmw&Submit=Search" target="_blank">Kreissieg</Button>
        </div>
        <div className="Genericcard">
            <img src={mag}></img>
            <h1>Magnaflow Exhuast</h1>
            <h2>Power Increase: est. +8.9 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/products/14006-magnaflow-performance-muffler-5-x-8-oval-25-xmod-14006" target="_blank">Magnaflow</Button>
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
            <h2>Weight Reduction: NA</h2> {/* this isnt finished as tubi website is down*/}
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.tubistyle.it/?lang=en" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Ferrarione = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/products/Ferrari?brandId=20" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/sf90/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/product-list/2" target="_blank">Kreissieg</Button>
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
            <h2>Power Increase: +109 HP With tune</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/brands/ferrari/sf90/sf90-spider/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2> 
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.tubistyle.it/?lang=en" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Ferraritwo = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/products/Ferrari?brandId=20" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: est. +34 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/fabspeed-ferrari-roma-supersport-valve-delete-pipes-2020/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/product-list/2" target="_blank">Kreissieg</Button>
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
            <h2>Power Increase: est. +46 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/brands/ferrari/roma/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2> 
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.tubistyle.it/?lang=en" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Ferrarithree = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/products/Ferrari?brandId=20" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: est. +14 HP</h2>
            <h2>Weight Reduction: -2.2 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/ferrari-f8-tributo-sport-catalytic-converters-2020/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/product-list/2" target="_blank">Kreissieg</Button>
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
            <h2>Power Increase: est. +56 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/brands/ferrari/f8/f8-spider/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: est. +43 HP</h2>
            <h2>Weight Reduction: TBD</h2> 
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/ferrari/f8-tributo-spider-2020.html" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Ferrarifour = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/products/Ferrari?brandId=20" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: +23 WHP</h2>
            <h2>Weight Reduction: -4.5 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/fabspeed-ferrari-812-superfast-gts-sport-catalytic-converter-and-x-pipe-exhaust-system-2018/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/product-list/2" target="_blank">Kreissieg</Button>
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
            <h2>Power Increase: est. +42 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/brands/ferrari/812/812-superfast/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: est. +39 HP</h2>
            <h2>Weight Reduction: TBD</h2> 
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/ferrari/812-superfast-gts-2017.html" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Ferrarifive = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: +7.6 HP & 6.3nm</h2>
            <h2>Weight Reduction: -3.8 KG</h2>
            <h2>Material: Titanium</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/product/16722/Ferrari/488-GTB-488-Spider/2019?brandId=20&modelId=785&yearId=5447" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: +62 WHP with tune</h2>
            <h2>Weight Reduction: -2.3 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/fabspeed-488-pista-performance-package/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/product-list/2" target="_blank">Kreissieg</Button>
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
            <h2>Power Increase: est. +56 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/brands/ferrari/488/488-pista/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: +8 HP & 7nm</h2>
            <h2>Weight Reduction: -7 KG</h2> 
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/ferrari/488-pista-pista-spider-2018-2020.html" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Ferrarisix = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: +8.7 HP & 22nm</h2>
            <h2>Weight Reduction: -8.1 KG</h2>
            <h2>Material: Titanium</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/product/86/Ferrari/458-Italia-458-Spider/2015?brandId=20&modelId=70&yearId=3945" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: est. +40 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/fabspeed-ferrari-458-italia-valvetronic-performance-package-2010-2015/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/product-list/2" target="_blank">Kreissieg</Button>
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
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: +7 HP & 20nm</h2>
            <h2>Weight Reduction: -8 KG</h2> 
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/ferrari/458-italia-spider-2009-2015.html" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Lamboone = () => {
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
            <h2>Power Increase: est. +44 HP</h2>
            <h2>Weight Reduction: -9.5 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/lamborghini-aventador-svj-valvetronic-supersport-x-pipe-exhaust-system/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: est. +55 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/product/569" target="_blank">Kreissieg</Button>
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
            <h2>Power Increase: est. +62 HP</h2>
            <h2>Weight Reduction: -24 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/brands/lamborghini/aventador/aventador-svj/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: +10 HP & 20nm</h2>
            <h2>Weight Reduction: -9 KG</h2> 
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/lamborghini/aventador-lp770-4-svj-2018.html" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Lambotwo = () => {
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
            <h2>Power Increase: +29 WHP & 25nm</h2>
            <h2>Weight Reduction: -10.4 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/lamborghini-huracan-valvetronic-supersport-x-pipe-exhaust-system/" target="_blank">Fabspeed</Button>
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
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/" target="_blank">Magnaflow</Button>
        </div>
        <div className="Genericcard">
            <img src={novitech}></img>
            <h1>Novitech Exhuast</h1>
            <h2>Power Increase: est. +53 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/brands/lamborghini/huracan/huracan-evo-2/huracan-evo/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: +19 HP & 22nm</h2>
            <h2>Weight Reduction: -9.8 KG</h2> 
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/lamborghini/huracan-performante-lp640-4-evo-sto-2017.html" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Lambothree = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: +14.7 HP & 27nm</h2>
            <h2>Weight Reduction: -18 KG</h2>
            <h2>Material: Titanium</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/product/12881/Lamborghini/Gallardo-LP-550-2-Coup%C3%A9/2014?brandId=24&modelId=74&yearId=3355" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/lamborghini/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: est. +35 HP</h2>
            <h2>Weight Reduction: est. -8KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/product/396" target="_blank">Kreissieg</Button>
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
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: +12 HP & 27nm</h2>
            <h2>Weight Reduction: -15 KG</h2> 
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/lamborghini/gallardo-lp560-4-lp550-2-lp570-4-2008-2013.html" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Masseratione = () => {
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
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/" target="_blank">Fabspeed</Button>
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
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/" target="_blank">Magnaflow</Button>
        </div>
        <div className="Genericcard">
            <img src={novitech}></img>
            <h1>Novitech Exhuast</h1>
            <h2>Power Increase: est. +39 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/brands/maserati/mc20/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2> 
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/maserati.html" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Masseratitwo = () => {
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
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: est. +26 HP</h2>
            <h2>Weight Reduction: est. -7.8 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/product/562" target="_blank">Kreissieg</Button>
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
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/brands/maserati/ghibli/#performance-exhaust" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: est. +25 HP</h2>
            <h2>Weight Reduction: TBD</h2> 
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/maserati/ghibli-iii-m157-2013-2016/mufflers/ghibli-loud-exhaust-w-valve.html" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Masseratithree = () => {
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
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/" target="_blank">Fabspeed</Button>
        </div>
        <div className="Genericcard">
            <img src={ksg}></img>
            <h1>Kreissieg Exhuast</h1>
            <h2>Power Increase: est. +24 HP</h2>
            <h2>Weight Reduction: est. -6.6 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://kreissieg.ocnk.net/product/295" target="_blank">Kreissieg</Button>
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
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/brands/maserati/quattroporte/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: est. +21 HP</h2>
            <h2>Weight Reduction: TBD</h2> 
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/maserati/quattroporte-m156-2013/catalytic-converters/ghibli-levante-quattroporte-cat-bypass-high-flow-pipes-kit.html" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Mclarenone = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/products/McLaren?brandId=23" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: est. +66 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Titanium</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/mclaren-720s-supersport-x-pipe-inconel-625-exhaust-system/" target="_blank">Fabspeed</Button>
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
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2> 
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/?___store=en" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Mclarentwo = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/products/McLaren?brandId=23" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: est. +26 HP</h2>
            <h2>Weight Reduction: -5.4 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/mclaren-765lt-cat-bypass-pipes-2021/" target="_blank">Fabspeed</Button>
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
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/" target="_blank">Magnaflow</Button>
        </div>
        <div className="Genericcard">
            <img src={novitech}></img>
            <h1>Novitech Exhuast</h1>
            <h2>Power Increase: est. +42 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/brands/mclaren/765lt-2/765lt/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2> 
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/?___store=en" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Mclarenthree = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: +4.5 HP & 8.7nm</h2>
            <h2>Weight Reduction: -7.3 KG</h2>
            <h2>Material: Titanium</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/product/20112/McLaren/570S-570S-SPIDER-570GT/2020?brandId=23&modelId=866&yearId=5922" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: +88 HP with Tune</h2>
            <h2>Weight Reduction: -3.6 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/mclaren-570s-570gt-540c-fs-700-performance-package/" target="_blank">Fabspeed</Button>
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
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/" target="_blank">Magnaflow</Button>
        </div>
        <div className="Genericcard">
            <img src={novitech}></img>
            <h1>Novitech Exhuast</h1>
            <h2>Power Increase: est. +12 HP</h2>
            <h2>Weight Reduction: est. -7.4 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/brands/mclaren/570/540c-570s-gt-spider/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2> 
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/?___store=en" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Mclarenfour = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: +20.6 HP & 29.2nm</h2>
            <h2>Weight Reduction: -5.3 KG</h2>
            <h2>Material: Titanium</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/product/15201/McLaren/650S-650S-SPIDER/2019?brandId=23&modelId=692&yearId=5450" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: +6 WHP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/mclaren-650s-supersport-x-pipe-exhaust-system/" target="_blank">Fabspeed</Button>
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
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2> 
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/?___store=en" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Mclarenfive = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: +4.5 HP & 8.7nm</h2>
            <h2>Weight Reduction: -7.3 KG</h2>
            <h2>Material: Titanium</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/product/20112/McLaren/540C/2020?brandId=23&modelId=875&yearId=5921" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: +88 HP with Tune</h2>
            <h2>Weight Reduction: -3.6 KG</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/mclaren-570s-570gt-540c-fs-700-performance-package/" target="_blank">Fabspeed</Button>
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
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2> 
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/?___store=en" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}

export const Mclarensix = () => {
    return (
        <div className="Cardcontainer">
            
        <div className="Genericcard">
            <img src={akra}></img>
            <h1>Akraopovic Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.akrapovic.com/en/car/products/McLaren?brandId=23" target="_blank">Akropovic</Button>
        </div>
        <div className="Genericcard">
            <img src={fabspeed}></img>
            <h1>Fabspeed Exhuast</h1>
            <h2>Power Increase: est. +18 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.fabspeed.com/fabspeed-mclaren-600lt-supreme-titanium-x-pipe-exhaust/" target="_blank">Fabspeed</Button>
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
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2>
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.magnaflow.com/" target="_blank">Magnaflow</Button>
        </div>
        <div className="Genericcard">
            <img src={novitech}></img>
            <h1>Novitech Exhuast</h1>
            <h2>Power Increase: est. +20 HP</h2>
            <h2>Weight Reduction: TBD</h2>
            <h2>Material: Stainless steel</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://www.novitecgroup.com/en/brands/mclaren/600-lt/600lt/" target="_blank">Novitech</Button>
        </div>
        <div className="Genericcard">
            <img src={tubi}></img>
            <h1>Tubi Exhuast</h1>
            <h2>Power Increase: NA</h2>
            <h2>Weight Reduction: NA</h2> 
            <h2>Material: NA</h2>
            <h3>for more info click on link below</h3>
            <Button className="Webbutton" href="https://catalogue.tubistyle.it/?___store=en" target="_blank">Tubi Exhaust</Button>
        </div>
        </div>
        
    )
}


export default Carexhaustdisplays;