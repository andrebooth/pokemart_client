import React from 'react';
import '../Styling/navbar.css';

export default function NavBar({setShow}) {
  return (
   <nav>
    <div className="nav_box">
        <span className="my_shop" onClick = {() => setShow(true)}>PokeMart</span>
        <span className="my_shop">Everything you need to be the best trainer</span>
        <div className="cart" onClick={() => setShow(false)}>
        <span>
            <i className="fa fa-shopping-bag"></i>
        </span>
        {/* <span>0</span> */}
        </div>
    </div>
   </nav>


  )
}
