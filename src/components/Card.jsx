import React from 'react'

export default function Card({elem}) {
  return (
    <div className='card'>
        <h2>{elem.title}</h2>
        <p>
            price: <span>{elem.price}</span>rub
        </p>
        <img src={elem.image} alt="" />
    </div>
   
  );
}
