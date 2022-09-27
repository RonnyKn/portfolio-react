import './Services.css'
import React from 'react';
import Code from '../../img/code.png'
import User from '../../img/user.png'
import Design from '../../img/design.png'
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
          <span>Skills</span>
          {/* <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis impedit ipsam dolor sed, expedita voluptatem.</span> */}
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
                emoji={Design}
                heading={'Tools'}
                detail={"Visual Studio Code, Figma, Adobe Photoshop, GitHub"}
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
                emoji={Code}
                heading={'Programming'}
                detail={"HTML, Css, Javascript, React Js,React Bootstrap, Material UI"}
              />
            </motion.div>

            <motion.div
              initial={{ top: "19rem", left: "25rem" }}
              whileInView={{ left: "12rem" }}
              transition={transition}
              className='ui-card'
              style={{ top: '19rem', left: '12rem' }}>
              <Cards
                emoji={User}
                heading={'Others'}
                detail={"Teamwork & Communication skills, Problem solving, Troubleshooting PC"}
              />
            </motion.div>

          </div>

        </div>
      </div>
    </div>
  )
}
export default Services;