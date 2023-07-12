import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from './routes/Home';
import Pricing from './routes/Pricing';
import Meteoritos from './components/Meteoritos';
import Basica3D from './components/Basica3D';
import  Escenas1  from './components/Escenas1';
import  Barco  from './components/Barco';
import Login from'./components/Formulario';
import Register from'./components/Formulario';
import Playa from './components/Playa';



function App() {
  return (
    < >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/meteors" element={<Meteoritos />} />
        <Route path="/basica3d" element={<Basica3D/>} />
        <Route path="/escenas1" element={<Escenas1/>} />
        <Route path="/barco" element={<Barco/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/playa" element={<Playa/>} />
      </Routes>
     
    </>
  );
}

export default App;
