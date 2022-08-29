import './Footer.css'
import React from 'react'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'

const Footer = () => {
  return (
    <div className='footer'>
      <img src={Wave} alt="" />
      <div className="f-content">
        <div className="f-copyright">
          <span>Ronnykurniawn@gmail.com</span>
          <span>2022</span>
        </div>
        <div className="f-icons">
          <Insta color='white' size='3rem' />
          <Facebook color='white' size='3rem' />
          <Github color='white' size='3rem' />
        </div>
      </div>
    </div>
  )
}
export default Footer;