import {React, useState} from 'react';
import list from '../data';
import Cards from './Cards';
import '../Styling/Pokemart.css';


export default function Pokemart({handleClick}) {

    
  return (
    <section>
    {list.map((item)=> (
                <Cards key = {item.id} item={item} handleClick={handleClick}/>
            ))}
    </section>
  );
};
