import React from 'react'
import '../Styles/Nav.css'
import img from '../Assets/Header.jpg'
const Header = () => {
  return (
    <div className='nav'>
      <div className="contact">
        <div className="left">
          <div className="left1"><span><i class="fa-regular fa-envelope"></i></span>mail@chennaimath.org</div>
          <div className="left2"><span><i class="fa-solid fa-phone"></i></span>+91-44-24621110</div>
        </div>
        <div className="s-icons">
          <a href="#a"><i class="fa-brands fa-whatsapp"></i></a>
          <a href="#a"><i class="fa-brands fa-facebook"></i></a>
          <a href="#a"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="#a"><i class="fa-brands fa-instagram"></i></a>
          <a href="#a"><i class="fa-brands fa-youtube"></i></a>
          <a href="#a"><i class="fa-brands fa-telegram"></i></a>
        </div>
      </div>
      <div className="hb">
        <div className="logo">
          <img src={img} alt="" />
        </div>
        <div className="navigation-buttons">
          <a id='home' href="#home">Home </a>
          <a href="#home">About us</a>
          <a href="#home">Activities</a>
          <a href="#home">Publications</a>
          <a href="#home">Media</a>
          <a href="#home">Become a monk</a>
          <a href="#home">Donate</a>
          <a href="#home">Sale of Immovable Properties</a>
          <a href="#home">More</a>
        </div>
      </div>

    </div>
  )
}

export default Header