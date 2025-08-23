import React from 'react'
import Logo from '../assets/Images/Home/logo.png'
import '../styles/Frame.css'

export const Frame = () => {
return (
   <nav className="navbar">
  <div className="navbar-grid">
    <div className="logo"> <img src={Logo} alt="Logo" /></div>
    <div className="menu">
      <a>Home</a>
      <a>Service</a>
      <a>Feature</a>
      <a>Product</a>
      <a>Testimonial</a>
        <a>FAQ</a>
    </div>
    <div className="auth-buttons">
      <button className="login-button">Login</button>
      <button className="signup-button">Signup</button>
    </div>
  </div>
</nav>

)
}
export default Frame