import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/NavFAB.css';
import { useLocation } from 'react-router-dom';
import PrototiposPopup from './PrototiposPopUp';

function NavFAB() {
  const location = useLocation();
  const [popupPrototiposOpen, setPopupPrototiposOpen] = useState(false);

  return (
    <div className="App-Header">
      <Navbar expand="xl" >
        <Container fluid className="fixed-top">
          {location.pathname !== "/Biofilia" && (
            <Navbar.Brand href="/" className="navbar-logo">
              <img
                src="/Images/Icono Biofilia.svg"
                alt="Biofilia Logo"
                style={{ height: "55px", width: "auto" }}
              />
            </Navbar.Brand>
          )}
          {location.pathname !== "/" && location.pathname !== "/Biofilia" && (
            <Navbar.Brand href="/" className="navbar-Title">
              <h2>Guardianes</h2>
              <h3>del </h3>
              <h1>PALEOCENO</h1>
            </Navbar.Brand>
          )}
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto pe-3 navfab">
              <Nav.Link href="/#Biofilia">Biofilia</Nav.Link>
              <Nav.Link href="/#proyecto">Nuestro Proyecto</Nav.Link>
              <Nav.Link href="/#proceso">El Proceso</Nav.Link>
              <NavDropdown
                title="Experiencias"
                id="basic-nav-dropdown"
                onToggle={(isOpen) => {
                  if (isOpen) {
                    const prototiposSection = document.getElementById('prototipos');
                    if (prototiposSection) {
                      const yOffset = -150; // Ajusta este valor según el alto de tu navbar
                      const y = prototiposSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }
                }}
              >
                <NavDropdown.Item href="LibroExplorador">Libro del Explorador</NavDropdown.Item>
                <NavDropdown.Item href="Escaner">Escáner</NavDropdown.Item>
                <NavDropdown.Item href="LineaTiempo">
                  Línea de Tiempo
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as="button" onClick={() => setPopupPrototiposOpen(true)}>
                  Experiencia Completa
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/#sobre-nosotros">Sobre Nosotros</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <PrototiposPopup open={popupPrototiposOpen} onClose={() => setPopupPrototiposOpen(false)} />
    </div>
  );
}

export default NavFAB;