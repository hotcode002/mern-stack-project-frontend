import React from "react";
import Container from "react-bootstrap/Container"; // Make sure to import Container from react-bootstrap
import Layout from "../Components/Layout/Layout";
import aboutImage from '../assets/images/about.png';
import '../styles/about.css';

const AboutUs = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <section id="contact" className="block contact-block">
        <Container fluid>
          <div className="title-holder">
            <h2>ABOUT US</h2>
            <div className="subtitle">Learn more about us</div>
          </div>

          <div className="about-page">
            <div className="about-content">
              <img src={aboutImage} alt="About Us" className="about-image" />
              <div className="about-text">
                <h2>About Us</h2>
                <p>
                  Welcome to e-Home – your one-stop destination for all things.
                </p>
                <p>
                  We are dedicated to providing you with high-quality products, excellent customer service, and an enjoyable shopping experience.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default AboutUs;