import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTiktok, faYoutube} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white text-center py-4 mt-4">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-3 mb-md-0 text-md-start">
            <p className="mb-1">&copy; {year} Dimensión Historieta. Todos los derechos reservados.</p>
            <p className="mb-1">📍 Av. Imaginaria 1234, Ciudad Cómic, Argentina</p>
            <p className="mb-1">
              ✉️{' '}
              <a href="mailto:contacto@dimensionhistorieta.com" className="text-white">
                contacto@dimensionhistorieta.com
              </a>
            </p>
            <p className="mb-0">
              📞{' '}
              <a href="tel:+541112345678" className="text-white">
                +54 9 11 1234-5678
              </a>
            </p>
          </Col>

          <Col md={6} className="text-md-end">
            <div className="d-inline-flex align-items-center">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>

              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
              >
                <FontAwesomeIcon icon={faTiktok} size="lg" />
              </a>

              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;