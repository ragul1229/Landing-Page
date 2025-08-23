import React from "react";
import "../styles/Home.css";
import illustration from "../assets/Images/Home/illustration.png";
import Client from "../assets/Logos/clientLogo.png";
import People from "../assets/Logos/member.png";
import Building from "../assets/Logos/Icon-(2).png";
import Club from "../assets/Logos/club.png";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-section-inner">
          <div className="hero-section-grid">
            <div className="hero-section-text">
              <h1>
                Lessons and insights{" "}
                <span className="hero-section-green">from 8 years</span>
              </h1>
              <p>
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="register-button">Register</button>
            </div>
            <div className="hero-section-image">
              <img
                className="hero-image"
                src={illustration}
                alt="Illustration"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div className="client-section">
        <div className="client-section-contents">
          <h4>Our Clients</h4>
          <p>We have been working with some Fortune 500+ clients</p>
        </div>
        <div className="client-section-logos">
          <img src={Client}></img>
        </div>
      </div>

      <div className="community-section">
        <div className="community-section-title">
          <h4>Manage your entire community in a single system</h4>
          <p>Who is Nextcent suitable for?</p>
        </div>

        <div className="community-section-frame">
          <div className="frame">
            <img src={People} alt="member-image" />
            <h4>Membership Organisations</h4>
            <p>
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>

          <div className="frame">
            <img src={Building} alt="building-image" />
            <h4>National Associations</h4>
            <p>
              Our membership management software provides full automation of
              membership renewals and payments..
            </p>
          </div>

          <div className="frame">
            <img src={Club} alt="club-image" />
            <h4>Clubs And Groups</h4>
            <p>
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
