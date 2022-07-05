import React, {useEffect, useState} from 'react';

import './App.css';
import Main from './Components/Main';
import CaptureItems from './Components/CaptureItems';
import SupportItems from './Components/SupportItems';
import Heals from './Components/Heals';
import {Link, Routes, Route, Navigate} from "react-router-dom"
import NavBar from './Components/NavBar';
import Pokemart from './Components/Pokemart';
import Cart from './Components/Cart';


function App() {
  const [show, setShow] = useState(true);
  const [itemscart, setItemsCart] = useState([]);

    const handleClick = (item) => {
      if (itemscart.indexOf(item) !== -1) return;
        setItemsCart([...itemscart, item])
        console.log(itemscart)
    };

    const handleChange = (item, d) => {
      const ind = itemscart.indexOf(item);
      const arr = itemscart;
      arr[ind].amount += d;

      if (arr[ind].amount === 0) arr[ind].amount = 1;
      setItemsCart([...arr]);
    };
    // useEffect(()=> {
    //   console.log('cart change')
    // }, [cart]);

  return (
   <>
    <div className="App">
      <React.Fragment>
        < NavBar setShow = {setShow} size={itemscart.length}/>
        {show ? (
        <Pokemart handleClick={handleClick}/>
        ) : <Cart itemscart={itemscart} setItemsCart={setItemsCart} handleChange={handleChange}/>
        }
        {/* <Pokemart/>  */}
       
        {/* <SupportItems/> */}
        </React.Fragment>
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
   {/* <Pokemart/> */}
   </>
  );
  
};

export default App;
