import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Form, FormGroup, Label, Input, Button, CardHeader, CardFooter, } from 'reactstrap';

export const AgregarPeliculasComponent = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [nuevaPelicula, setNuevaPelicula] = useState({ imagen: '', titulo: '', genero: '', categoria: '', director: '', protagonistas: '', ano: '',disponible: false });

  useEffect(() => {
    const storedPeliculas = localStorage.getItem('peliculas');
    if (storedPeliculas) {
      const parsedPeliculas = JSON.parse(storedPeliculas);
      setPeliculas(parsedPeliculas);
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNuevaPelicula({
      ...nuevaPelicula,
      [name]: value,
    });
  };

  const agregarPelicula = () => {
    const nuevaListaPeliculas = [...peliculas, nuevaPelicula];
    setPeliculas(nuevaListaPeliculas);
    localStorage.setItem('peliculas', JSON.stringify(nuevaListaPeliculas));
    setNuevaPelicula({ imagen: '', titulo: '', genero: '', categoria: '', director: '', protagonistas: '', ano: '',disponible: false });
  };

  const eliminarPelicula = (index) => {
    const nuevaListaPeliculas = [...peliculas];
    nuevaListaPeliculas.splice(index, 1);
    setPeliculas(nuevaListaPeliculas);
    localStorage.setItem('peliculas', JSON.stringify(nuevaListaPeliculas));
  };

  const cambiarEstado = (index) => {
    const nuevaPeliculas = [...peliculas];
    nuevaPeliculas[index].disponible = !nuevaPeliculas[index].disponible;
    setPeliculas(nuevaPeliculas);
    localStorage.setItem('peliculas', JSON.stringify(nuevaPeliculas));
  };

  return (
    <Container>
      <h1 className="mt-5">Listado de Películas</h1>
      <Row>
        {peliculas.map((pelicula, index) => (
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
              <CardFooter>
                <Button  color="danger" onClick={() => eliminarPelicula(index)}>Eliminar</Button>
                {" "}
                <></>
                {pelicula.disponible?<><Button  color="danger" onClick={() => cambiarEstado(index)}>Deshabilitar</Button></>
                :<><Button  color="success" onClick={() => cambiarEstado(index)}>Habilitar</Button></>}
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="mt-5">
        <h2>Agregar Película</h2>
        <Form>
          <FormGroup>
            <Label for="imagen">Link de Imagen</Label>
            <Input
              type="text"
              name="imagen"
              id="imagen"
              placeholder="Ingrese el link de la imagen"
              value={nuevaPelicula.imagen}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="titulo">Título</Label>
            <Input
              type="text"
              name="titulo"
              id="titulo"
              placeholder="Ingrese el título de la película"
              value={nuevaPelicula.titulo}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="genero">Género</Label>
            <Input
              type="text"
              name="genero"
              id="genero"
              placeholder="Ingrese el género de la película"
              value={nuevaPelicula.genero}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="genero">Categoria</Label>
            <Input
              type="text"
              name="categoria"
              id="categoria"
              placeholder="Ingrese la categoria de la película"
              value={nuevaPelicula.categoria}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="genero">Director</Label>
            <Input
              type="text"
              name="director"
              id="director"
              placeholder="Ingrese el director de la película"
              value={nuevaPelicula.director}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="genero">Protagonistas</Label>
            <Input
              type="text"
              name="protagonistas"
              id="protagonistas"
              placeholder="Ingrese los protagonistas de la película"
              value={nuevaPelicula.protagonistas}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="genero">Año de produccion</Label>
            <Input
              type="number"
              name="ano"
              id="ano"
              placeholder="Ingrese el año de producción"
              value={nuevaPelicula.ano}
              onChange={handleInputChange}
            />
          </FormGroup>
          <Button color="primary" onClick={agregarPelicula}>
            Agregar Película
          </Button>
        </Form>
      </div>
    </Container>
  )
}

export default AgregarPeliculasComponent;