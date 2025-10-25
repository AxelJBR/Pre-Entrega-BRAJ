import React from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100 justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-lg p-4">
            <Card.Body>
              <h2 className="text-center mb-4">Formulario de Contacto</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formNombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Escribe tu nombre" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formApellido">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control type="text" placeholder="Escribe tu apellido" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDireccion">
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control type="text" placeholder="Calle, número, ciudad" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTelefono">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Ej: 1122334455"
                    pattern="[0-9]{10}"
                    maxLength="10"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control type="email" placeholder="tucorreo@ejemplo.com" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMensaje">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Escribe tu mensaje aquí..." required />
                </Form.Group>

                <div className="d-flex justify-content-between">
                  <Button variant="primary" type="submit">
                    Enviar
                  </Button>
                  <Button variant="secondary" type="reset">
                    Reiniciar
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;