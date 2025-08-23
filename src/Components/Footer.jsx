import React from 'react'
import '../styles/Footer.css'

export const Footer = () => {
  return (
    <div>
      <div className="top-section">
        <h2>Pellentesque suscipit fringilla libero eu.</h2>
        <button className="demo-button">Get a Demo →</button>
      </div>

      {/* Footer should be outside top-section */}
      <div className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <h3>Nexcent</h3>
            <p>
              Copyright © 2020 Nexcent Ltd.<br />All rights reserved
            </p>
            <div className="social-icons">
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
            </div>
          </div>

          <div className="footer-links">
            <div>
              <h4>Company</h4>
              <ul>
                <li>About us</li>
                <li>Blog</li>
                <li>Contact us</li>
                <li>Pricing</li>
                <li>Testimonials</li>
              </ul>
            </div>

            <div>
              <h4>Support</h4>
              <ul>
                <li>Help center</li>
                <li>Terms of service</li>
                <li>Legal</li>
                <li>Privacy policy</li>
                <li>Status</li>
              </ul>
            </div>

            <div>
              <h4>Stay up to date</h4>
              <div className='input-container'>
                  <input type="email" placeholder="Your email address" />
              <button>→</button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
