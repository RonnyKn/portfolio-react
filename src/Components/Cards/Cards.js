import './Cards.css'
import React from 'react';

const Cards = ({ emoji, heading, detail }) => {
  return (
    <div className='card'>
      <img src={emoji} alt='' />
      <span>{heading}</span>
      <span>{detail}</span>
    </div>
  )
}
export default Cards;