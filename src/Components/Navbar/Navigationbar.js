import React from "react";
import Toggle from "../Toggle/Toggle";
import './Navigationbar.css'
import { Link } from "react-scroll";

const Navigationbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="name">Ronnykn</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link spy={true} to='Navigationbar' smooth={true} activeClass="activeClass">
              <li>Home</li>
            </Link>
            <Link spy={true} to='Services' smooth={true} >
              <li>Services</li>
            </Link>
            <Link spy={true} to='Portfolio' smooth={true} >
              <li>Portfolio</li>
            </Link>
            {/* <Link spy={true} to='Experience' smooth={true} >
              <li>Experience</li>
            </Link> */}
            {/* <Link spy={true} to='Testimonials' smooth={true} >
              <li>Testimonials</li>
            </Link> */}
            <Link spy={true} to='Contact' smooth={true} >
              <button className="button n-button">
                Contact
              </button>
            </Link>
          </ul>

        </div>
      </div>
    </div>
  )
}
export default Navigationbar;