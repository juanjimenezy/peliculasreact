import React from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent';
import HeaderComponent from './components/HeaderComponent';
import AgregarPeliculasComponent from './components/AgregarPeliculasComponent';
import PeliculasDisponiblesComponent from './components/PeliculasDisponiblesComponent';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <HeaderComponent/>
    <Routes>
          <Route path="/" exact element={<><HomeComponent/></>} />
          <Route path="/addmovies" element={<><AgregarPeliculasComponent/></>} />
          <Route path="/moviesaviables" element={<><PeliculasDisponiblesComponent/></>} />
    </Routes>
    </>
  );
}

export default App;
