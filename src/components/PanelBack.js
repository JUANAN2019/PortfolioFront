
import React, { useState, useEffect, createElement } from 'react';
import './Funciones/Fetch'
import 'aframe';
import 'aframe-extras'

import 'aframe-environment-component';
import './PanelBack.css'
// import 'aframe-animation-component';
// import 'aframe-mouse-cursor-component';
// import 'aframe-particle-system-component';
//cambiaEs();



const PanelBack = () => {
  

    const [PanelBack, setPanelBack] = useState(null);
  
    useEffect(() => {
      fetch("http://127.0.0.1:8000/api/backs")
        .then(response => response.json())
        .then(data => setPanelBack(data['hydra:member'][0]))
        .catch(error => console.log('error', error));
    }, []);
  
    if (!PanelBack) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className='personales'>
        <h2>{PanelBack.nombre}</h2>
        <h2>{PanelBack.apellidos}</h2>
        <h2>{PanelBack.telefono}</h2>
        <h2>{PanelBack.mail}</h2>
      </div>
    );
  }
    // return (
        
    //     <div>
    //         {/* <a-entity
    //             class="panelCaja"
    //             geometry="primitive: plane;  color: white ;width: 1;height: 1"
    //             material="color: white"
    //             position="0 -.3 -.55"
    //             rotation="0 90 0"
    //         >{users.map(item => (

    //             <a-text class="entidadtext" width="1" position={`${x} ${y} ${z}`} key={item.id} value={item.nombre} color="black" scale="30 30 30" />
    //         ))}
    //         </a-entity > */}
    //         <
    


    //     </div>
    // );
//};

export default PanelBack;