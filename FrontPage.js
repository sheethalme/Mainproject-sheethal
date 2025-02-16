import React, { useEffect, useRef } from 'react';
import './FrontPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import audio from '../assets/audio/nature-birds-ambiance-morning-kisses-214774.mp3';

const FrontPage = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    document.body.classList.add('front-page-body');
    
    // Attempt to play audio after the component mounts
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Audio play error:", error);
      });
    }

    return () => {
      document.body.classList.remove('front-page-body');
    };
  }, []);

  return (
    <div className="front-page">
      <div className="navbar">
        <a href="/LoginSign">Login</a>
        <a href="/googlemap">About</a>
        <a href="/ValuesPage">Our Values</a>
        <a href="#projects">Projects and Services</a>
        <a href="/ContactPage">Contact</a>
      </div>

      <div className="front-page-overlay">
        <header className="front-page-header">
          <h1>The Green Mile</h1>
          <p>Join us on a journey toward sustainability</p>
        </header>
        {/* Add the bird element within the tree logo container */}
        <div className="tree-logo">
          <div className="bird"></div>
        </div>
      </div>

      <audio ref={audioRef} autoPlay loop>
        <source src={audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="content-section" id="about">
        <h2>About Us</h2>
        <p>We are dedicated to promoting sustainable practices and environmental awareness.</p>
      </div>
      <div className="content-section" id="mission">
        <h2>Our Mission</h2>
        <p>Our mission is to create a greener, cleaner future for everyone.</p>
      </div>
      <div className="content-section" id="projects">
        <h2>Projects and Services</h2>
        <p>Explore our projects that aim to bring positive environmental impact.</p>
      </div>
      <div className="content-image1">
        {/* <h2></h2> */}
      </div><br/>
      <div className='just'>
        <h2>waste collection campign </h2>
      </div>
      <div className="content-image2">
        {/* <h2>Projects</h2> */}
      </div>
      <div className='just'>
        <h2>Climate change campign </h2>
      </div>
      <div className="content-image3">
        {/* <h2>Projects</h2> */}
      </div>
      <div className='just'>
        <h2>Enviornment Day </h2>
      </div>
      <div className="content-image6">
        {/* <h2>Projects</h2> */}
      </div>
      <div className='just'>
        <h2>Seed and plant sapplings distribution    </h2>
      </div>
      <div className="content-image7">
        {/* <h2>Projects</h2> */}
      </div>
      <div className='just'>
        <h2>Save the nature campign </h2>
      </div>
      <div className="content-one">
        <h2>Our Approach</h2>
        <p>
          Our approach involves engaging local communities and stakeholders to drive collective action and<br/> bring systemic change in waste management which is inclusive, guarantees dignity, safe working conditions <br/>and traceability while meeting all the necessary waste management compliances. 
        </p>
      </div>
      <div className="content-section">
        <h2>Recognized by UNESCO</h2>
        <p>
          The Green Mile has been recognized by (UNESCO).<br />
          The UNESCO Green Citizens is the bridge between UNESCO’s scientific expertise, local citizen solutions, and young people’s willingness to act against climate change.
        </p>
        <div className="content-image4">
          <h2>Projects</h2>
        </div>
      </div>
      <div className="content-sections">
        <div className="social-icons">
          <h2>Follow for more</h2><br />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faYoutube} />
        </div>
        <p>Explore our projects that aim to bring positive environmental impact.</p>
      </div>
      <footer className="front-page-footer">
        <p>© 2025 The Green Mile. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default FrontPage;
