import './App.css';
import {Button, Alert,} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar.js'
import 'bootstrap/dist/js/bootstrap.js';
import Videobackground from './Components/Videobackground.jsx';
import Cardcover from './Components/Cardcover';
import Cars from './Cars.js';
import { Route, Routes } from 'react-router-dom';
import Motorbikes from './Motorbikes.js';
import Homepage from './Homepage.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route exact path="/Cars" element={<Cars />}/>
      <Route exact path="/Motorbikes" element={<Motorbikes />}/>
    </Routes>
  );
}

export default App;
