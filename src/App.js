import { Routes, Route } from 'react-router-dom';

import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";

import { Home } from "./pages/Home";
import { NewFilms } from "./pages/NewFilms";
import { About } from "./pages/About";
import { NotFoundPage } from "./pages/NotFoundPage";

import  bgvideo  from './assets/img/bgvideo.MP4';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState, useEffect } from 'react';
// import './darkMode.css';

function App() {



  return (
    <>
      <video src={bgvideo} autoPlay loop muted />
      <div className="bg"></div>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/newfilms' element={<NewFilms/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
