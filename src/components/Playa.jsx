import React, { useState, useEffect, createElement } from 'react';


import 'aframe';
import 'aframe-extras'
import 'aframe-environment-component';

import PanelBack from './PanelBack'

// import 'aframe-animation-component';
// import 'aframe-mouse-cursor-component';
// import 'aframe-particle-system-component';



// let urlBase="https://127.0.0.1:8000/api";
// const urlbase = `${urlBase}/${url}`;


let x = 0;
let y = 2;
let z = -.0001;


const Playa = () => {

    const [users, setUsers] = useState([]);
    const [endpoint, setEndpoint] = useState('d_personales');

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
                <img src={require('./assets/textures/bootstrap.png')} alt="" id='bootstrap' />
                <img src={require('./assets/textures/php.png')} alt="" id='php' />
                <img src={require('./assets/textures/symfony.png')} alt="" id='symfony' />
                <img src={require('./assets/textures/xampp.png')} alt="" id='xampp' />
                <img src={require('./assets/textures/githubok.png')} alt="" id='github' />
                <img src={require('./assets/textures/css.png')} alt="" id='css' />
                <img src={require('./assets/textures/sqlite.png')} alt="" id='sqlite' />
                <img src={require('./assets/textures/phpmyadmin_logo_icon_168906.png')} alt="" id='php' />




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
                scale=" 2.5 2.5 2.5 "
                animation="property: rotation; from: 200 0 180; to: -300 0 180 ; loop: true; dur: 7000; dir: alternate ; property: position; from: -300 25 150; to:200 25 200; dur: 10000; easing: linear; loop: false "
            >
                <a-gltf-model id="avion"
                    src="https://cdn.glitch.global/df3fdc62-2e6c-4640-9198-4748bc53f58d/avion_-_avioneta_low_poly.glb?v=1689277302264"
                    rotation=" 0 90 0"
                    scale=" 2 2 2 "
                    position="0 25 0"

                >
                </a-gltf-model>
                <a-entity
                    id="panelCaja"
                    geometry="primitive: plane;  color: white ;width: 40;height: 8"
                    material="color: white"
                    position="-60 30 5"
                    rotation="0  180 0"
                    scale="2 2 2 "
                >
                    {users.map(item => (

                        <a-text class="entidadtext" width="1" wrapCount="10" position="-9 0 0" key={item.id} value=
                            {`DATOS PERSONALES :\n Nombre: ${item.nombre} \n Apellidos: ${item.apellidos}\n Email:${item.mail} 
                        Telefono: ${item.telefono}`} color="black" scale="30 30 30" />
                    ))}
                </a-entity >
                <a-box
                    rotation="180 0 180"
                    color="white"
                    position="-120 30 5"
                    scale="4 4 4"


                    material="shader: flat; src: #php"
                ></a-box>
                <a-box
                    rotation="180 0 180"
                    color="white"
                    position="-130 30 5"
                    scale="4 4 4"

                    material="shader: flat; src: #xampp"
                ></a-box>
                <a-box
                    rotation="180 0 180"
                    color="white"
                    position="-140 30 5"
                    scale="4 4 4"

                    material="shader: flat; src: #symfony"
                ></a-box>
                <a-box
                    rotation="180 0 180"
                    color="white"
                    position="-150 30 5"
                    scale="4 4 4"


                    material="shader: flat; src: #github"
                ></a-box>
                <a-box
                    rotation="180 0 180"
                    color="white"
                    position="-160 30 5"
                    scale="4 4 4"

                    material="shader: flat; src: #bootstrap"
                ></a-box>



            </a-entity>



            <a-entity
                id="backbutton"
                geometry="primitive: plane;  color: white ;width: 1;height: 1"
                material="color: white"
                position="8 2 4.99"
                rotation="0 180 0"
                onClick={() => {
                    setEndpoint('backs')
                }}

            >
                <a-text id="entidadtext" width=".2" position="-.5 0 0 " value="back" color="black" scale="30 30 30" />
            </a-entity >
            <a-entity
                id="backbutton"
                geometry="primitive: plane;  color: white ;width: 1;height: 1"
                material="color: white"
                position="6 2 4.99"
                rotation="0 180 0"
                onClick={() => {
                    setEndpoint('fronts');
                }}

            // scale=" 1 1 .1"

            >
                <a-text id="entidadtext" width=".2" position="-.5 0 0 " value="front" color="black" scale="30 30 30" ></a-text>
            </a-entity >
            <PanelBack />






            <a-entity camera look-controls position=" 0 5 0 "
                animation="property:rotation; from: 0 50 0; to: 3 50 0; loop: false; dur: 3000;">
                <a-cursor fuse="true" fuse-timeout="1500"></a-cursor>
            </a-entity>
        </a-scene >
    );



}

export default Playa;
