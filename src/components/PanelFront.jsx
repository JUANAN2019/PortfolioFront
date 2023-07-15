
import React, { useState, useEffect, createElement } from 'react';
import './Funciones/Fetch'
import 'aframe';
import 'aframe-extras'

import 'aframe-environment-component';
// import 'aframe-animation-component';
// import 'aframe-mouse-cursor-component';
// import 'aframe-particle-system-component';
//cambiaEs();

let x = -3;
let y = 2;
let z = 0;

const PanelFront = () => {
    const [users, setUsers] = useState([]);
   

    useEffect(() => {
        const fetchRandomUsers = async () => {
            try {

                const response = await fetch(`https://127.0.0.1:8000/api/fronts`);
                const data = await response.json();
                setUsers(data['hydra:member']);
            } catch (error) {
                console.log('Error al obtener los datos de usuarios aleatorios:', error);
            }
        };

        fetchRandomUsers();
    }, []);
    return (
        
        <div>
            
            <a-entity
                class="panelCaja"
                geometry="primitive: plane;  color: white ;width: 1;height: 1"
                material="color: white"
                position="0 -.1 -.55"
                rotation="0 180 0"
            >{users.map(item => (

                <a-text class="entidadtext" width="1" position={`${x} ${y} ${z}`} key={item.id} value={item.nombre} color="black" scale="30 30 30" />
            ))}
            </a-entity >

        </div>
    );
};

export default PanelFront;