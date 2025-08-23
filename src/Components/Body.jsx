import React from 'react';
import Image1 from '../assets/images/Body/body1.png'; 
import '../styles/Body.css'
import Member from '../assets/Logos/member.png'; 
import Club from '../assets/Logos/club.png'; 
import Event from '../assets/Logos/event.png'; 
import Payment from '../assets/Logos/payment.png'; 
import Image2 from '../assets/images/Body/pana.png'; 
import Image3 from '../assets/images/Body/tesla.png'; 
import Customer from '../assets/Logos/customerlogo.png'; 
import Paati from '../assets/images/Body/patti.png'; 
import Laptop1 from '../assets/images/Body/laptop1.png'; 
import Laptop2 from '../assets/images/Body/laptop2.png'; 





function Body() {
  return (
    <div>
     
      <div className="unlock-section">
        <div className="unlock-section-inner">
          <div className="unlock-section-grid">
            <div className="unlock-section-image">
              <img
                className="unlock-image"
                src={Image1}
                alt="Illustration"
              />
            </div>
            <div className="unlock-section-text">
              <h4>
                The unseen of spending three years at Pixelgrade
                
              </h4>
              <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
              </p>
              <button className="learn-button">Learn More</button>
            </div>
            
          </div>
        </div>
      </div>

      {/* Other Sections */}
    <div className="body-achievement">
  <div className="body-container">
  
    <div className="achievement-grid">
      <div className="achievement-text">
        <h4>
          Helping a local <span className="green">business reinvent itself</span>
        </h4>
        <p>We reached here with our hard work and dedication</p>
      </div>

   
      <div className="achievement-stats">
        <div className="stat-box">
          <img src={Member} alt="Members Icon" />
          <div>
            <h3>2,245,341</h3>
            <p>Members</p>
          </div>
        </div>

        <div className="stat-box">
          <img src={Club} alt="Clubs Icon" />
          <div>
            <h3>46,328</h3>
            <p>Clubs</p>
          </div>
        </div>

        <div className="stat-box">
          <img src={Event} alt="Event Bookings Icon" />
          <div>
            <h3>828,867</h3>
            <p>Event Bookings</p>
          </div>
        </div>

        <div className="stat-box">
          <img src={Payment} alt="Payments Icon" />
          <div>
            <h3>1,926,436</h3>
            <p>Payments</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      <div className="calender-section">
        <div className="calender-section-inner">
          <div className="calender-section-grid">
            <div className="calender-section-image">
              <img
                className="calender-image"
                src={Image2}
                alt="Illustration"
              />
            </div>
            <div className="calender-section-text">
              <h4>
               How to design your site footer like we did
                
              </h4>
              <p>
             Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
              </p>
              <button className="learn-button">Learn More</button>
            </div>
            
          </div>
        </div>
      </div>
      <div className="customer-section">
        <div className="customer-section-inner">
          <div className="customer-section-grid">
            <div className="customer-section-image">
              <img
                className="customer-image"
                src={Image3}
                alt="Illustration"
              />
            </div>
            <div className="customer-section-text">
              
              <p>
             Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
              </p>
              <h5>Tim Cook</h5>
              <h6>British Dragon Boat Racing Association</h6>
              <img src={Customer}></img>     
                    <button>Meet All Customers →</button>

           
            </div>
            
          </div>
        </div>
      </div>
      <div className="body-community">
  {/* Text Section */}
  <div className="community-text">
    <h4>Caring is the new Marketing</h4>
    <p>
      The Nexcent blog is the best place to read about the latest membership insights, 
      trends and more. See who's joining the community, read about how our community 
      are increasing their membership income and lot's more.​
    </p>
  </div>

  {/* Image + Card Section */}
  <div className="community-images">
    <div className="image-card">
      <img src={Paati} alt="blog1" />
      <div className="card">
       
        <p>Creating Streamlined Safeguarding Processes with OneRen</p>
        <button className='read-button'>ReadMore →</button>
      </div>
    </div>

    <div className="image-card">
      <img src={Laptop1} alt="blog2" />
      <div className="card">
  
        <p>What are your safeguarding responsibilities and how can you manage them?</p>
        <button className='read-button'>ReadMore →</button>
      </div>
    </div>

    <div className="image-card">
      <img src={Laptop2} alt="blog3" />
      <div className="card">
        
        <p>Revamping the Membership Model with Triathlon Australia</p>
        <button className='read-button'>ReadMore →</button>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default Body;
