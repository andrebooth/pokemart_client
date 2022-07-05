import React, {useState, useEffect} from 'react';
import '../Styling/cart.css';



export default function Cart({itemscart, setItemsCart, handleChange}) {
    const [price, setPrice] = useState(0);
    
    const handleRemove = (id) => {
        const arr = itemscart.filter((item) => item.id  == id);
        setItemsCart(arr);
        handlePrice();
    };  
        
    const handlePrice = () => {
        let ans = 0;
        itemscart.map((item) => (ans += item.amount * item.price));
        setPrice(ans);
    };

     useEffect(()=>{
        handlePrice();
    });



    return (
        <article>
            {itemscart.map((item) =>(
                <div className='cart_box' key={item.id}>
                   <div classname='cart_img'>
                    <img src={item.image} alt = ''/>
                    <p>{item.name}</p>
                    </div> 
                    <div>
                        <button onClick = {()=> handleChange(item, 1)}>+</button>
                        <button>{item.price}</button>
                        <button onClick={()=> handleChange(item, -1)}>-</button>
                    </div>
                        <span>{item.price}</span>
                        <button onClick = {()=> handleRemove(item.id)}>Remove</button>
                    </div>
                
            ))}
            <div className = 'total'>
                <span>Final Cart</span>
                <span>Rs - {price}</span>
            </div>
        </article>
    )
}

