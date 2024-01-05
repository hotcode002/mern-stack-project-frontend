import React from "react";
import Container from "react-bootstrap/Container";
import Layout from "../Components/Layout/Layout";
import contactImage from '../assets/images/contact.png';
import '../styles/contact.css';

const ContactUs = () => {
  return (
    <Layout title={"Contact us - Ecommerce app"}>
      <section id="contact" className="block contact-block">
        <Container fluid>
          <div className="title-holder">
            <h2>CONTACT US</h2>
            <div className="subtitle">Any queries?</div>
          </div>

          <div className="about-page">
            <div className="about-content">
              <img
                src={contactImage}
                alt="Contact Us"
                className="contact-image"
                style={{ width: '500px', height: '300px' }}
              />
               <div className="about-text">
                <h2>Contact Us</h2>
                <p>
                <i className="fas fa-envelope" style={{ color: 'red' }}></i>
                &nbsp;&nbsp;
                  <strong>Email:</strong> contact@ehome.com
                </p>
                <p>
                <i class="fa fa-phone" style={{ color: 'red' }} ></i>
                &nbsp;&nbsp;
                  <strong> Phone:</strong> 9123456789
                </p>
                <p>
                <i className="fas fa-map-marker-alt" style={{ color: 'red' }}></i>
                &nbsp;&nbsp;
                  <strong> Address: Hitech City, Hyderabad, 500033.</strong>
                </p>
                {/* Add more content as needed */}
              </div>
            </div>
          </div>       
        </Container>
      </section>
    </Layout>
  );
};

export default ContactUs;