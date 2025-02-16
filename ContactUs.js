import React from 'react';
import { Typography,  Container, Grid, Box } from '@mui/material';
import { LocationOn, AccessTime, Phone, Email } from '@mui/icons-material';
import './ContactPage.css'; // Import the CSS file

const contactInfo = {
  hours: [
    { day: "Mon-Fri", time: "9 AM – 6 PM" },
    { day: "Saturday", time: "9 AM – 4 PM" },
    { day: "Sunday", time: "Closed" }
  ],
  address: "The Green Mile HQ, 140 B, The chruch building, 8th Mile, Anakkara, Kerala 685509",
  phone: "+91 8921417172",
  email: "info@greemile.org",
  partnershipContact: {
    name: "Shilpa Thimas",
    email: "shilpa@greenmile.org"
  }
};

const ContactPage = () => {
  return (
    <div className="contact-page">
      <nav className="anakkara-navbar">
        <ul className="navbar-list">
          <li className="navbar-item"><a href="/">Home</a></li>
          <li className="navbar-item"><a href="googlemap">About Anakkara</a></li>
          <li className="navbar-item"><a href="LoginSign">Login</a></li>
          <li className="navbar-item"><a href="Valuespage">Values</a></li>
         
        </ul>
      </nav>
       
      <Container maxWidth="md" className="contact-page__container">
        <Typography variant="h4" align="center" gutterBottom className="contact-page__header">
          Contact Us
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center" className="contact-page__item">
              <AccessTime className="contact-page__icon" />
              <Typography>
                {contactInfo.hours.map((hour, index) => (
                  <div key={index}>{hour.day}: {hour.time}</div>
                ))}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center" className="contact-page__item">
              <LocationOn className="contact-page__icon" />
              <Typography>{contactInfo.address}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center" className="contact-page__item">
              <Phone className="contact-page__icon" />
              <Typography>{contactInfo.phone}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center" className="contact-page__item">
              <Email className="contact-page__icon" />
              <Typography>{contactInfo.email}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center" className="contact-page__item">
              <Email className="contact-page__icon" />
              <Typography>
                For Partnership Enquiries: {contactInfo.partnershipContact.name} - {contactInfo.partnershipContact.email}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContactPage;
