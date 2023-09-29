import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

function HomeComponent() {
  return (
    <Container>
      <Row>
        <Col>
            <h1 className="display-4">Bienvenido a Mi Aplicación</h1>
            <p className="lead">Aplicacion de peliculas para Desarrollo Web FullStack</p>
            <hr className="my-2" />
            <p className="lead">
              <Button color="primary">¡Comencemos!</Button>
            </p>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeComponent;

