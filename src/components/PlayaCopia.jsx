import React, { useState, useEffect, createElement } from 'react';

import 'aframe';
import 'aframe-extras'
import 'aframe-environment-component';

// import 'aframe-animation-component';
// import 'aframe-mouse-cursor-component';
// import 'aframe-particle-system-component';

let x = -3;
let y = 2;
let z = 0;
const Playa = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchRandomUsers = async () => {
            try {
                const response = await fetch('https://127.0.0.1:8000/api/backs');
                const data = await response.json();
                setUsers(data['hydra:member']);
            } catch (error) {
                console.log('Error al obtener los datos de usuarios aleatorios:', error);
            }
        };

        fetchRandomUsers();
    }, []);

    return (

        <a-scene>
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
                geometry="primitive: plane; height: 20; width: 20"
                material="color: blue"
                position="6 6 5"
                rotation="0 180 0">
                {users.map(item => (
                    <a-text id="entidadtext" width="1" position={`${x} ${y--} ${z}`} key={item.id} value={item.nombre} color="black" scale="30 30 30" />
                ))}
            </a-entity>

            <a-entity camera look-controls position=" 0 5 0 "
                animation="property:rotation; from: 0 50 0; to: 3 50 0; loop: false; dur: 3000;">
                <a-cursor fuse="true" fuse-timeout="1500"></a-cursor>
            </a-entity>
        </a-scene>
    );



}

export default Playa;
