import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const CustomNavbar: React.FC = () => {
  const [navExpanded, setNavExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      expanded={navExpanded}
      onToggle={(expanded) => setNavExpanded(expanded)}
      className={`custom-navbar ${navExpanded ? 'expanded' : ''}`}
      id='NavBar'
    >
      <Container>
        <Navbar.Brand href="#home" className="brand">
          <span>Babel Translations</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#NavBar" className="nav-link">בית</Nav.Link>
            <Nav.Link href="#Hero" className="nav-link">שירותים</Nav.Link>
            <Nav.Link href="#Aside" className="nav-link">אודות</Nav.Link>
            <Nav.Link href="#Footer" className="nav-link">צור קשר</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
