import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/NavFAB.css';

function NavFAB() {
  return (
    <Navbar expand="lg" >
      <Container fluid className="fixed-top">
        <Navbar.Brand href="/" className="navbar-logo">
          <img
            src="/images/Icono Biofilia.svg"
            alt="Biofilia Logo"
            style={{ height: "55px", width: "auto" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto pe-3 navfab">
            <Nav.Link href="/Biofilia">Biofilia</Nav.Link>
            <Nav.Link href="#link">Nuestro Proyecto</Nav.Link>
            <Nav.Link href="#link2">El Proceso</Nav.Link>
            <NavDropdown title="Experiencias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link3">Sobre Nosotros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavFAB;