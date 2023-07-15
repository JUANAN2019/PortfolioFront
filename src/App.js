import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Home from './routes/Home';

import  Barco  from './components/Barco';

import Playa from './components/Playa';



function App() {
  

  return (
    < >
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/barco" element={<Barco/>} />
      
        <Route path="/playa" element={<Playa/>} />
      </Routes>
     
    </>
  );
}

export default App;
