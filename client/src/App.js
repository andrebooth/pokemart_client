import React from 'react';
import './App.css';
import Main from './Components/Main';
import CaptureItems from './Components/CaptureItems';
import SupportItems from './Components/SupportItems';
import Heals from './Components/Heals';
import {Link, Routes, Route, Navigate} from "react-router-dom"
import NavBar from './Components/NavBar';
import Pokemart from './Components/Pokemart';
function App() {
  return (
    <div className="App">
      <h1 className="title">PokeMart</h1> 
      <p className="slogan">Everything you need to be the best trainer</p>
      <NavBar/>
      {/* <SupportItems/> */}
      <Pokemart/>



   {/* <header>
        <nav>
          <h1 className="pokemart">PokeMart</h1>
          <h3 className="best_trainer"> — Everything you need to be the best trainer</h3>
          <ul>
            <li>
              <Link to="/main"> Main </Link>
              <Link to="/captureitems"> Capture Items </Link>
              <Link to="/heals"> Heals</Link>
              <Link to="/Supportitems"> Support Items </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
            <Route path="/main" element={<Main/>}/>
            <Route path="/captureitems" element={<CaptureItems/>}/>
            <Route path="/heals" element={<Heals/>}/>
            <Route path="/supportitems" element={<SupportItems/>}/>
      </Routes> */}
   
    </div>
  );
  
}

export default App;
