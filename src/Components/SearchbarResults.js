import React from 'react';

export const SearchBarResult = ()  => {
    var selectedOption = document.getElementById("SearchResults").value;
    switch (selectedOption) {
      case "Alfa Romeo":
        window.open("https://www.alfaromeo.com.au/", "_blank");
        break;
    case "Aprillia":
        window.open("https://www.aprilia.com/en_EN/", "_blank");
        break;
    case "Audi":
        window.open("https://www.audi.com.au/au/web/en.html", "_blank");
        break;
    case "Bentley":
        window.open("https://www.bentleymotors.com/en.html", "_blank");
        break;
    case "BMW":
        window.open("https://www.bmw.com/en-au/home.html", "_blank");
        break;
    case "BMW Motorrad":
        window.open("https://www.bmw-motorrad.com.au/en/home.html#/filter-all", "_blank");
        break;
    case "Chevrolet":
        window.open("https://www.chevrolet.com/", "_blank");
        break;
    case "Ducati":
        window.open("https://www.ducati.com/au/en/home", "_blank");
        break;
    case "Ferrari":
        window.open("https://www.ferrari.com/en-AU", "_blank");
        break;
    case "Honda":
        window.open("https://motorcycles.honda.com.au/", "_blank");
        break;
    case "Kawasaki":
        window.open("https://www.kawasaki.com.au/en-au/", "_blank");
        break;
    case "Lamborghini":
        window.open("https://www.lamborghini.com/en-en", "_blank");
        break;
    case "Masserati":
        window.open("https://www.maserati.com/au/en", "_blank");
        break;
    case "McLaren":
        window.open("https://www.mclaren.com/", "_blank");
        break;
    case "Mercedes":
        window.open("https://www.mercedes-benz.com.au/passengercars.html?group=all&subgroup=all.saloon&view=BODYTYPE", "_blank");
        break;
    case "Nissan":
        window.open("https://www.nissan.com.au/", "_blank");
        break;
    case "Porsche":
        window.open("https://www.porsche.com/australia/", "_blank");
        break;
    case "Susuki":
        window.open("https://www.suzuki.com.au/", "_blank");
        break;
    case "Toyota":
        window.open("https://www.toyota.com.au/", "_blank");
        break;
    case "Yamaha":
        window.open("https://www.yamaha-motor.com.au/", "_blank");
        break;
      default:
        break;
    }
}

