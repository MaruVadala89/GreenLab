import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBoot.css'

function NavBoot() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#4D882D' }}>

      <Container fluid>

        <Navbar.Brand as={Link} to={'/'} style={{ color: 'white' }}>GreenLab</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>

            <Nav.Link as={Link} to={'/'} id="navbarScrollingDropdown">Inicio</Nav.Link>

            <NavDropdown title="Plantas" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to={'/Interior'} >Interior</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/Exterior'}>Exterior</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to={'/Contacto'} id="navbarScrollingDropdown">Contacto</Nav.Link>
          </Nav>
        

        </Navbar.Collapse>

      </Container>

      <CartWidget />

    </Navbar>
  );
}

export default NavBoot;