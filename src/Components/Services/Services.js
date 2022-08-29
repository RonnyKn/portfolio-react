import './Services.css'
import React from 'react';
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Cards from '../Cards/Cards';
import Resume from './resume.pdf'
import { motion } from 'framer-motion'


const Services = () => {
  const transition = { duration: 3, type: 'spring' }
  return (
    <div className='s-container'>
      <div className='services' id='Services'>
        <div className="s-left">

          <span>My Awesome</span>
          <span>Services</span>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis impedit ipsam dolor sed, expedita voluptatem.</span>
          <a href={Resume} download>
            <button className='button s-button'>
              Download CV
            </button>
          </a>

        </div>
        <div className="s-right">
          <div className="cards">
            {/* Design card */}
            <motion.div
              whileInView={{ left: '14rem' }}
              initial={{ left: '25rem' }}
              transition={transition}
              className='design-card'
              style={{ left: '14rem' }} >
              <Cards
                emoji={HeartEmoji}
                heading={'Design'}
                detail={"Figma, sketch, Adobe Photoshop"}
              />
            </motion.div>

            {/* Developer Card */}
            <motion.div
              initial={{ left: "-11rem", top: "12rem" }}
              whileInView={{ left: "-4rem" }}
              transition={transition}
              className='dev-card'
              style={{ top: '11rem', left: '-4rem' }}>
              <Cards
                emoji={Glasses}
                heading={'Developer'}
                detail={"Html, Css, Javascript, Bootstrap, React Js, React Bootstrap"}
              />
            </motion.div>

            {/* UI/UX card */}
            <motion.div
              initial={{ top: "19rem", left: "25rem" }}
              whileInView={{ left: "12rem" }}
              transition={transition}
              className='ui-card'
              style={{ top: '19rem', left: '12rem' }}>
              <Cards
                emoji={Humble}
                heading={'UI/UX'}
                detail={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, recusandae."}
              />
            </motion.div>

          </div>

        </div>
      </div>
    </div>
  )
}
export default Services;