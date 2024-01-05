import React, { useContext} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../Components/Layout/Layout";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link, useNavigate} from "react-router-dom";
import { CartContext } from "../Context/cartHandler";

const Cart = () => {

const navigate = useNavigate();
const { cartItems, addToCart, removeFromCart,removeItemFromCart, clearCart} = useContext(CartContext);
const checkoutHandler = () => {
  navigate("/signin");
}

const handleRemoveFromCart = (product) => {
  removeFromCart(product)
}

 return (
    <Layout>
      <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>welcome to e-Home</h2>
          <div className="subtitle">your cart items are:</div>
        </div>
     <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <h2>
              Cart is empty. <Link to="/">Go Shopping</Link>
            </h2>
          ) : (
            <ListGroup>
              <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item._id}>
                  <Row className="align-items-center">
                    <Col md={4}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded img-thumbnail"
                      ></img>
                    </Col>
                    <Col md={3}>
                    <Button
                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => {
                    addToCart(item)
                  }}
                >
                  +
                </Button>
                <p>{item.quantity}</p>
                <Button
                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => {
                    const cartItem = cartItems.find((product) => product.name === item.name);
                    if (cartItem.quantity === 1) {
                      handleRemoveFromCart(item);
                    } else {
                      removeFromCart(item);
                    }
                  }}
                  disabled={item.quantity === 1}
                >
                  -
                </Button>
                    </Col>
                    <Col md={3}>${item.price}</Col>
                    <Col md={2}>
                      <Button
                        onClick={() => {
                          removeItemFromCart(item.name);
                        }}
                        variant="light"
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
       </ListGroup>
     )}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                    items) : $
                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
                  </h3>
              </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                    onClick={checkoutHandler}
                      type="button"
                      variant="primary"
                      disabled={cartItems.length === 0}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
      </section>
    </Layout>
  );
}

export default Cart;
