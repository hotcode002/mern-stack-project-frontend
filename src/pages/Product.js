import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Badge, Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Layout from '../Components/Layout/Layout';
import { CartContext } from '../Context/cartHandler';
import { useParams } from 'react-router-dom';

const Product = () => {

const {addToCart } = useContext(CartContext);
const [product,setProduct] = useState('');
const params = useParams();
const {id} = params;

useEffect(()=>{
    axios.get(`/api/auth/products/${id}`).then(
      (res)=>{setProduct(res.data)}
    );
   },[]);


    return (
        <Layout>
          <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>welcome to e-Home</h2>
          <div className="subtitle">our awesome product</div>
        </div>
      <Row>
        <Col md={5}>
          <img
            className="img-large"
            src={product.image}
            alt={product.name}
          ></img>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Helmet>
                <title>{product.name}</title>
              </Helmet>
              <h1>{product.name}</h1>
              <h4>Brand:{product.brand}</h4>
              <h4>Rating:{product.rating}</h4>
              <h4>numReviews:{product.numReviews}</h4>
            </ListGroup.Item>
               <ListGroup.Item>
              Description:
              <p>{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
               </Col>
               <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>${product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? (
                        <Badge bg="success">In Stock</Badge>
                      ) : (
                        <Badge bg="danger">Unavailable</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>
                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <div className="d-grid">
                        
                        <Button onClick={() => {
                          addToCart(product)
                        }
                      }
                        variant="primary">
                          Add to Cart
                        </Button>
                      
                      </div>
                    </ListGroup.Item>
                  )}
              </ListGroup>
            </Card.Body>
          </Card>
                </Col>
               </Row>     
        </Container>
        </section>
        </Layout>
    );
};

export default Product;