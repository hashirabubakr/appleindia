import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar
      style={{ height: '55px' }}
      fixed="top"
      className='bg-dark'
      variant="dark"
      expand="xl"
    >
      <Container fluid>
        <Navbar.Brand className='d-flex align-items-center ms-5 '>
          <i className="fab fa-apple ms-5" style={{ color: '#ffffff' }}></i>
          
        </Navbar.Brand>
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse  id="responsive-navbar-nav">
       
            <Nav.Link className='ms-5' href="#home">Store</Nav.Link>
            <Nav.Link className='ms-5' href="#">Mac</Nav.Link>
            <Nav.Link className='ms-5' href="#">iPad</Nav.Link>
            <Nav.Link className='ms-5' href="#">iPhone</Nav.Link>
            <Nav.Link className='ms-5' href="#">Watch</Nav.Link>
            <Nav.Link className='ms-5' href="#">AirPods</Nav.Link>
            <Nav.Link className='ms-5' href="#">TV & Home</Nav.Link>
            <Nav.Link className='ms-5' href="#">Entertainment</Nav.Link>
            <Nav.Link className='ms-5' href="#">Accessories</Nav.Link>
            <Nav.Link className='ms-4' href="#">Support</Nav.Link>
            <Nav.Link className='ms-4 ' href="#"><i className="fa-solid fa-search"></i></Nav.Link>
            <Nav.Link className='ms-4' href="#"><i className="fa-solid fa-bag-shopping"></i></Nav.Link>
           
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
