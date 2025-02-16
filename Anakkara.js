import React from 'react';
import './Anakkara.css';

const GoogleMapIframe = () => {

  return (
    <div className="google-map-body">
      <nav className="anakkara-navbar">
        <ul className="navbar-list">
          <li className="navbar-item"><a href="/">Home</a></li>
          <li className="navbar-item"><a href="LoginSign">Login</a></li>
          <li className="navbar-item"><a href="Valuespage">Values</a></li>
          <li className="navbar-item"><a href="ContactPage">Contact</a></li>
        </ul>
      </nav>
      <div className="google-map-container">
        <iframe
          className="google-map-iframe"
          title="anakkaramap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.139263208069!2d77.151200874789!3d9.669140090420008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07ab0052a5dd67%3A0x9251ea03891d6961!2sANAKKARA%208TH%20MILE!5e0!3m2!1sen!2sin!4v1736825200077!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="google-map-content">
        <h2>Anakkara - A Glimpse</h2>
        <p><strong>Location:</strong></p>
        <ul>
          <li><strong>Country:</strong> India</li>
          <li><strong>State:</strong> Kerala</li>
          <li><strong>District:</strong> Idukki</li>
        </ul>
        <br/>
        <br/>
        <p><strong>Coordinates:</strong> 9.6646°N 77.1658°E</p>
        <p><strong>Area:</strong> 38.46 km² (14.85 sq mi)</p>
        <p><strong>Elevation:</strong> 900 m (3,000 ft)</p>
        <br/>
        <br/>
        <h2>Population (2011)</h2>
        <p><strong>Total:</strong> 24,192</p>
        <p><strong>Density:</strong> 630/km² (1,600/sq mi)</p>
        <br/>
        <br/>
        <h2>Languages</h2>
        <p><strong>Official:</strong> Malayalam, English</p>
        <p><strong>Regional:</strong> Malayalam, Tamil</p>
        <br/>
        <br/>
        <p><strong>Time Zone:</strong> UTC+5:30 (IST)</p>
        <p><strong>Postal Code:</strong> 685512</p>
        <p><strong>Telephone Code:</strong> 04868</p>
        <p><strong>Vehicle Registration:</strong> KL-37</p>
        <br/>
        <br/>
        <h2>Geographical Details</h2>
        <p>
          Anakkara is a geographic area of around 50 square kilometers (12,000 acres) that spreads across Vandanmedu, <br/>Chakkupallam Panchayats in the Udumbanchola Taluk of Idukki District, Kerala, India.
        </p>
        <p>
          Anakkara is the administrative capital of Chakkupallam Grama Panchayat and Anakkara Revenue Village.<br/> It is about 18 kilometers (11 mi) from Thekkady wildlife sanctuary on the Kumily-Munnar state highway.<br/>
        </p>
        <p>In 1972 Kottayam district of Kerala was split into Kottayam and Idukki districts. <br/>In 1986, around 50 km² area of Vandanmettu village was split into a new revenue village by the name Anakkara.</p>
        <p>Anakkara is on the State Highway 19, around 10–20 km from Thekkady and 60–80 km from Munnar.</p>
        <br/>
        <br/>
        <h2>Boundaries</h2>
        <ul>
          <li><strong>East:</strong> Theni district of Tamil Nadu</li>
          <li><strong>West:</strong> Chakkupallam village</li>
          <li><strong>North:</strong> Vandanmedu village</li>
          <li><strong>South:</strong> Kumily village</li>
        </ul>
        <br/>
        <br/>
        <h2>Climate & Soil</h2>
        <p>Situated at a height of about 4,000 feet (1,200 m) above sea level, <br/>Anakkara is mostly plain lands with small hillocks and some marshy areas. <br/>The soil of Anakkara and its surroundings are well known for its fertility. <br/>Temperature varies between 15 - 25 degrees Celsius annually. <br/>The average annual rainfall is around 350 centimeters.</p>
        <br/>
        <br/>
        <h2>Cities and Towns in Idukki District</h2>
        <table>
          <thead>
            <tr>
              <th>Cities</th>
              <th>Towns</th>
              <th>Villages</th>
              <th>Hill Stations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Thodupuzha</td>
              <td>Muttom, Thodupuzha, Idukki-Painav, Idukki-Cheruthony, Thadiyampadu-Karimpan, <br/>
                Chelachuvadu-Keerithodu, Kanjikuzhy, Udumbanchola, Nedumkandam, Rajakkad, <br/>
                Kattappana, Adimali, Devikulam, Munnar, Vagamon, Peermade, Vandiperiyar, Kumily</td>
              <td>K. Chappathu, Karimkulam Chappathu, Rajamala</td>
              <td>Devikulam, Munnar, Peermade, Vagamon</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <br/>
      <br/>
      <div className="anakkara-content-image4">
        <h1>WELCOME TO ANAKKARA PANCHAYAT</h1>
      </div>
      <div className="anakkara-content">
        <h1>“In every walk with nature one receives far more than he seeks.”</h1>
      </div>

     <br/>


      <div className="anakkara-images">
        <div className="image1"></div>
        <div className="image2"></div>
        <div className="image3"></div>
        <div className="image4"></div>
        <div className="image5"></div>
        <div className="image6"></div>
        <div className="image7"></div>
        <div className="image8"></div>
        <div className="image9"></div>
      </div>

      <div className="anakkara-images">
        <div className="image11"></div>
        <div className="image12"></div>
        <div className="image13"></div>
        <div className="image14"></div>
        <div className="image15"></div>
        <div className="image16"></div>
        <div className="image17"></div>
        <div className="image18"></div>
        <div className="image19"></div>
      </div>
    </div>
  );
};

export default GoogleMapIframe;
