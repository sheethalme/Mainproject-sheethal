import React from 'react';
import './OurMission.css';
import { Typography, Container, List, ListItem, ListItemText, Paper } from '@mui/material';

const values = [
  "We believe in Teamwork",
  "We are Accountable for our work",
  "We exhibit Professionalism in all our engagements",
  "We will be Ethical in our decisions",
  "We will be Compassionate to all",
  "We will strive for Continuous Improvement",
  "We will build Inclusiveness in all our work",
  "We will Appreciate good wherever we see it"
];

const ValuesPage = () => {
  return (
    <div className="values-background"> {/* Apply the background image class */}
      <nav className="anakkara-navbar">
        <ul className="navbar-list">
          <li className="navbar-item"><a href="/">Home</a></li>
          <li className="navbar-item"><a href="googlemap">About Anakkara</a></li>
          <li className="navbar-item"><a href="LoginSign">Login</a></li>
          <li className="navbar-item"><a href="ContactPage">Contact</a></li>
        </ul>
      </nav>
      <Container className="values-container">
        <Paper elevation={3} style={{ padding: '1rem', backgroundColor: 'transparent' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Our Values
          </Typography>
          <List>
            {values.map((value, index) => (
              <ListItem key={index} style={{ justifyContent: 'center' }}> {/* Center the values text */}
                <ListItemText primary={value} style={{ textAlign: 'center' }} /> {/* Center the values text */}
              </ListItem>
            ))}
          </List>
        </Paper>
      </Container>
      <div className="values-content">
        <h2>We have years, not decades, to take on the interconnected crises <br/>of climate change and biodiversity loss. 
        <br/>But by working together, <br/>we’re overcoming barriers to the solutions our planet needs.<br/>
        Together, we find a way.</h2>
      </div>
      <div className="values-content">
        <h2>The Green Mile is dedicated to fostering a sustainable future <br/>by promoting eco-friendly practices,
           raising environmental awareness, and championing conservation efforts.<br/>
            Our mission is to inspire individuals and <br/>communities to take meaningful actions 
            that will protect and <br/>preserve our planet for future generations.</h2>
      </div>
    </div>
  );
};

export default ValuesPage;
