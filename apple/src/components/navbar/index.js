import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Navbar, Container, Nav
} from 'react-bootstrap';

import Apple from '../../assets/icons/Apple.png'

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/home"><img src={Apple} style={{ height:25, width:25}}></img></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/books">Available Books</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
