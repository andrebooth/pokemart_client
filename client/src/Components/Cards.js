import React from 'react'


function Cards({item, handleClick}) {
    const {id, name, description, price, image} = item;

return (
    <div className='cards'>
        <div className='image_box'>
            <img src={image} alt = ''/>
        </div>
        <div className='details'>
            <p>{name}</p>
            <p>{description}</p>
            <p className='price'>{price}</p>
            <button onClick={()=>handleClick(item)}>Add to Cart</button>
            
        </div>
    </div>
    

)
}
export default Cards;