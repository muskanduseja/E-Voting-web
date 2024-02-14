// Team.js

import React from 'react';
import './team.css';
import muskan from './WhatsApp Image 2024-01-22 at 10.38.39 PM.jpeg';
import rasool from './WhatsApp Image 2024-01-22 at 10.05.53 PM.jpeg';

const Team = () => {
  return (
    <div>
      <div className="about-section">
        <h1>About Us</h1>
        <p>This is our Semester end Project of the Subject Web-Engineering</p>
      </div>

      <h2 className="teamhead">Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src={muskan} alt="Muskan" className="img" />
            <div className="container">
              <h1 className="name">Muskan duseja</h1>
              <p className="title">Front-End Developer</p>
              <p>Student of Sukkur IBA University</p>
              <p>Muskan@example.com</p>
              <p>
                <button className="button">
                  <a href="https://web.facebook.com/muskan.duseja.338211/" target="_blank" rel="noopener noreferrer">
                    Contact
                  </a>
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={rasool} alt="Rasool" className="imgali" />
            <div className="container">
              <h1 className="name">Rasool</h1>
              <p className="title">Front-End Developer</p>
              <p>Student of Sukkur IBA University</p>
              <p>rasool@example.com</p>
              <p>
                <button className="button">
                  <a href="https://web.facebook.com/rasool" target="_blank" rel="noopener noreferrer">
                    Contact
                  </a>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
