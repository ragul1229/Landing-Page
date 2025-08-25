import React, { useState } from 'react'
import Logo from '../assets/Images/Home/logo.png'
import '../styles/Frame.css'

export const Frame = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="navbar">
      <div className="navbar-grid">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        {/* Hamburger icon, shows only on small screens */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        {/* Menu items */}
        <div className={`menu ${isOpen ? 'open' : ''}`}>
          <a>Home</a>
          <a>Service</a>
          <a>Feature</a>
          <a>Product</a>
          <a>Testimonial</a>
          <a>FAQ</a>
        </div>

        {/* Auth buttons stay outside to preserve alignment */}
        <div className={`auth-buttons ${isOpen ? 'open' : ''}`}>
          <button className="login-button">Login</button>
          <button className="signup-button">Signup</button>
        </div>
      </div>
    </nav>
  )
}

export default Frame
