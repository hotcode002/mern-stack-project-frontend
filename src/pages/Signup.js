import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/signup.css';
import { Link,useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import toast from "react-hot-toast";
import Layout from '../Components/Layout/Layout';

const Signup= () => {

  const navigate = useNavigate();
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/register", {
        username,
        email,
        password
      });
      if (password !== confirmPassword) {
        toast.error('Passwords do not match');
        return;
      }
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/signin");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
   <Layout>
    <div>
        <section id="contact" className="block contact-block">
        <Container fluid>
        <div className="title-holder">
          <h2>WELCOME TO e-HOME</h2>
          <div className="subtitle">Signup Here</div>
        </div>
      <Container className="signup-container">
        <Row className="justify-content-center">
          <Col md={10} className="signup-form" style={{ marginTop: '1cm' }}>
            {/* Add margin-top: 1cm style here */}
            <h2>Sign Up</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your username"
                  name="username"
                  value={username}
                  onChange={e=>setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={password}
                  onChange={e=>setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Re-type Your password"
                  name="confirmpassword"
                  value={confirmPassword}
                  onChange={e=>setConfirmPassword(e.target.value)}
                  required
                />
              </Form.Group>
              {/* Center the signup button */}
            <div className="text-center" style={{ marginTop: '0.3cm' }}>
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </div>
            </Form>
            <div className="mt-3">
          Already have an account?{' '}
          <Link to={'/signin'}>Sign-In</Link>
        </div>
          </Col>
        </Row>
      </Container>
      </Container>
      </section>
    </div>
    </Layout>
  );
};

export default Signup;