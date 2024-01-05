import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login.css'; // Import your renamed CSS file
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Layout from '../Components/Layout/Layout';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import {useAuth} from '../Context/auth';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/");
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
          <div className="subtitle">Signin Here</div>
        </div>
      <Container className="login-container">
        <Row className="justify-content-center">
          <Col md={10} className="login-form" style={{ marginTop: '1cm' }}>
            {/* Add margin-top: 1cm style here */}
            <h2>SignIn</h2>
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your Email"
                  name="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  required
                />
              </Form.Group>
               {/* Center the signup button */}
            <div className="text-center" style={{ marginTop: '0.3cm' }}>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
            </Form>
            <div className="mt-2">
          New customer?{' '}
          <Link to={'/signup'}>Create your account</Link>
        </div>
        <div className="mt-2">
          Forget Password? <Link to={`/forget-password`}>Reset Password</Link>
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

export default Login;