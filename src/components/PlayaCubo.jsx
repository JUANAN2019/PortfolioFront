import React, { useState, useEffect, createElement } from 'react';

import 'aframe';
import 'aframe-extras'
import 'aframe-environment-component';

// import 'aframe-animation-component';
// import 'aframe-mouse-cursor-component';
// import 'aframe-particle-system-component';



// let urlBase="https://127.0.0.1:8000/api";
// const urlbase = `${urlBase}/${url}`;


let x = -3;
let y = 2;
let z = 0; 


const Playa = () => {
    
    const [users, setUsers] = useState([]);
    const [endpoint, setEndpoint] = useState('backs');

    useEffect(() => {
        const fetchRandomUsers = async () => {
            try {
               
                const response = await fetch(`https://127.0.0.1:8000/api/${endpoint}`);
                const data = await response.json();
                setUsers(data['hydra:member']);
            } catch (error) {
                console.log('Error al obtener los datos de usuarios aleatorios:', error);
            }
            
        };

        fetchRandomUsers();
    }, [endpoint]);//si pongo en array vacio endpoint solo renderizara  cuando cambie endpoint

    return (

        <a-scene cursor="rayOrigin: mouse">
            <a-assets>
                <img src={require('./assets/skyplaya.jpg')} alt="" id='sky' />
                <img src={require('./assets/textures/marble.jpg')} alt="" id='luna' />
                <img src={require('./assets/textures/wood.jpg')} alt="" id='balsa' />

            </a-assets>
            <a-sky width="400" height="200" material="shader: flat; src: #sky" radius="3000" theta-length="90"></a-sky>
            <a-plane position="0 0 -4" rotation="-90 0 0" width="200" height="200" color="#E8AE40"></a-plane>
            <a-gltf-model
                src="https://cdn.glitch.global/11112d35-f4a1-41f6-be6d-cea189c44184/pirata_cartoon17_final.glb?v=1689056482784"
                position="6 0 -5"
                scale=" 3 3 3  ">
            </a-gltf-model>
            <a-gltf-model
                src="https://cdn.glitch.global/62fd0f78-1373-4c06-a578-99392921938b/prueba_pirata.glb?v=1689071734016"
                position="6 0 0"
                scale=" 2 2 2 "
                rotation="0 -90 0">
            </a-gltf-model>
            <a-gltf-model id="cofre"
                src="https://cdn.glitch.global/62fd0f78-1373-4c06-a578-99392921938b/cofre.glb?v=1689080669288"
                position="8 0 3"
                scale=" .7 .7 .7 "
                rotation="0 -90 0">
            </a-gltf-model>
            <a-entity
                id="backbutton"
                geometry="primitive: box;  color: white ;width: 1;height: 1"
                material="color: white"
                position="8 2 4.99dssd"
                rotation="0 180 0"
                onClick = {()=>{
                    setEndpoint('backs')
                }}
                
                >
                    <a-text id="entidadtext" width=".2" position="-.5 0 0 " value="back" color="black" scale="30 30 30" />
                </a-entity >
                <a-entity
                id="backbutton"
                geometry="primitive: plane;  color: white ;width: 1;height: 1"
                material="color: white"
                position="6 2 4.99dssd"
                rotation="0 180 0"
                onClick = { ()=>{
                    setEndpoint('fronts')
                }}
                
                // scale=" 1 1 .1"
                
                >
                    <a-text id="entidadtext" width=".2" position="-.5 0 0 " value="front" color="black" scale="30 30 30" ></a-text>
                </a-entity >
            <a-entity
                geometry="primitive: plane; height: 10; width: 10"
                material="color: blue"
                position="6 6 5"
                rotation="0 180 0">
                {users.map(item => (
                
                    <a-text class="entidadtext" width="1" position={`${x} ${y} ${z}`} key={item.id} value={item.nombre} color="black" scale="30 30 30" />
                ))}
            </a-entity>

            <a-entity camera look-controls position=" 0 5 0 "
                animation="property:rotation; from: 0 50 0; to: 3 50 0; loop: false; dur: 3000;">
                <a-cursor fuse="true" fuse-timeout="1500"></a-cursor>
            </a-entity>
        </a-scene >
    );



}

export default Playa;
