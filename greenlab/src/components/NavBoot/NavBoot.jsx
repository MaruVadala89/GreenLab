import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function NavBoot() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#4D882D' }}>

      <Container>
        
        <Navbar.Brand as={Link} to={'/'} style={{ color: 'white' }}>GreenLab</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/'} style={{ color: 'white' }}>Inicio</Nav.Link>
            <Nav.Link as={Link} to={'/Interior'} style={{ color: 'white' }}>Plantas de Interior</Nav.Link>
            <Nav.Link as={Link} to={'/Exterior'} style={{ color: 'white' }}>Plantas de exterior</Nav.Link>
            <Nav.Link as={Link} to={'/Contacto'} style={{ color: 'white' }}>Contacto</Nav.Link>
          </Nav>

        </Navbar.Collapse>

      </Container>

      <CartWidget/>

    </Navbar>
  );
}

export default NavBoot;