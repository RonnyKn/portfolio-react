import './Cards.css'
import React from 'react';

const Cards = ({ emoji, heading, detail }) => {
  return (
    <div className='card'>
      <img src={emoji} alt='' />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className='button c-button'>Learn More</button>
    </div>
  )
}
export default Cards;