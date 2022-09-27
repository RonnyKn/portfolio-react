import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Profile from '../../img/profile.png'
import { Link } from "react-scroll";
// import Crown from '../../img/crown.png'
// import ThumbsUp from '../../img/thumbup.png'
// import GlassesImoji from '../../img/glassesimoji.png'



const Intro = () => {
  return (
    <div className='intro'>
      <div className='i-left'>
        <div className="i-name">
          <span>Hi! I am</span>
          <span>Ronny Kurniawan</span>
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita corrupti quae sint ab delectus, officia magni dolorem ullam dolore excepturi!</span><br />
        </div>
        <Link spy={true} to='Contact' smooth={true} >
          <button className='button i-button'>Hire Me</button>
        </Link>
        <div className="icons">
          <a href='https://github.com/RonnyKn' target='_blank' rel="noreferrer" ><img src={Github} alt='' /></a>
          <a href='https://www.linkedin.com/in/ronny-kurniawan-4b205017a/' target='_blank' rel="noreferrer"><img src={LinkedIn} alt='' /></a>
          <a href='http://www.instagram.com/ronny.kn/' target='_blank' rel="noreferrer"><img src={Instagram} alt='' /></a>
        </div>
      </div>
      <div className='i-right' >
        <img src={Vector1} alt='' />
        <img src={Vector2} alt='' />
        <img src={Profile} alt='foto' />
      </div>
    </div>

  )
}
export default Intro;