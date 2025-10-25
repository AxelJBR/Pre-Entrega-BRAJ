import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          Dimensión Historieta
        </Navbar.Brand>
        
        <Nav className="ms-auto align-items-center">
          <Nav.Link as={Link} to="/" className="me-3">
            Inicio
          </Nav.Link>
          <Nav.Link as={Link} to="/catalogo" className="me-3">
            Catálogo
          </Nav.Link>
          <Nav.Link as={Link} to="/faq" className="me-3">
            Preguntas Frecuentes
          </Nav.Link>
          <Nav.Link as={Link} to="/contacto" className="me-3">
            Contacto
          </Nav.Link>
          <Nav.Link as={Link} to="/resenas" className="me-3">
            Reseñas
          </Nav.Link>

          <Nav.Link as={Link} to="/carrito" className="text-white">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;