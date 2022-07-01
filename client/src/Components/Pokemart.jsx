import React from 'react';
import list from '../data';
import Cards from './Cards';
import '../Styling/Pokemart.css';

export default function pokemart() {
  return (
    <section>
        
    {list.map((item)=> (
                <Cards key = {item.id} item={item}/>
            ))}
        
        
    </section>
  )
}
