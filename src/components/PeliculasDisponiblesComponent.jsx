import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardHeader, } from 'reactstrap';


export const PeliculasDisponiblesComponent = () => {
    const [peliculas, setPeliculas] = useState([]);
    useEffect(() => {
        const storedPeliculas = localStorage.getItem('peliculas');
        if (storedPeliculas) {
            const parsedPeliculas = JSON.parse(storedPeliculas);
            setPeliculas(parsedPeliculas);
        }
    }, []);

    const peliculasDisponibles = peliculas.filter(
        (pelicula) => pelicula.disponible === true
    )

    return (
        <div>
            <Container>
                <h1 className="mt-5">Listado de Películas</h1>
                <Row>
                    {peliculasDisponibles.map((pelicula, index) => (
                        <>
                        <Col md="4" key={index} className="mb-4">
                            <Card className=''>
                                <CardHeader>
                                    <img src={pelicula.imagen} alt='imagen'></img>
                                </CardHeader>
                                <CardBody>
                                    <CardTitle tag="h5">{pelicula.titulo}</CardTitle>
                                    <CardText>Género: {pelicula.genero}</CardText>
                                    <CardText>Categoria: {pelicula.categoria}</CardText>
                                    <CardText>Protagonistas: {pelicula.protagonistas}</CardText>
                                    <CardText>Año: {pelicula.ano}</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </>))}
                </Row>
            </Container>

        </div>
    )
}

export default PeliculasDisponiblesComponent;
