import React from 'react';
import '../Styling/navbar.css';
export default function NavBar() {
  return (
   <nav>
    <div className="nav_box">
        <span className="my_shop">PokeMart</span>
        <span className="my_shop">Everything you need to be the best trainer</span>
        <div className="cart">
        <span>
            <i className="fa fa-shopping-bag"></i>
        </span>
        <span>0</span>
        </div>
    </div>
   </nav>


  )
}
