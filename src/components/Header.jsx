import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <Navbar
      style={{ height: '55px' }}
      fixed="top"
      className='bg-black'
      variant="black"
      expand="xl"
    >
      <Container fluid>
        <Navbar.Brand className='d-flex align-items-center ms-5 '>
          <i className="fab fa-apple ms-2 me-2" style={{ color: '#ffffff' }}></i>

        </Navbar.Brand>
     
        <Navbar.Collapse className='bg-black'  id="responsive-navbar-nav">
<Nav.Link className='ms-5' href="#home">Store</Nav.Link>
            <Nav.Link className='ms-5' href="#">Mac</Nav.Link>
            <Nav.Link className='ms-5' href="#">iPad</Nav.Link>
            <Nav.Link className='ms-5' href="#">iPhone</Nav.Link>
            <Nav.Link className='ms-5' href="#">Watch</Nav.Link>
            <Nav.Link className='ms-5' href="#">AirPods</Nav.Link>
            <Nav.Link className='ms-4' href="#">TV&Home</Nav.Link>
            <Nav.Link className='ms-4' href="#">Entertainment</Nav.Link>
            <Nav.Link className='ms-4' href="#">Accessories</Nav.Link>
            <Nav.Link className='ms-4 me-3' href="#">Support</Nav.Link>
             </Navbar.Collapse>
             <Nav.Link href="#"><i className="fa-solid fa-search"></i></Nav.Link>
            <Nav.Link className='ms-5 me-5' href="#"><i className="fa-solid fa-bag-shopping me-5"></i></Nav.Link>
            <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default Header;
