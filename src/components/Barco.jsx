import React, { Suspense, useNavigate ,navigate} from 'react';
import './Funciones/Fetch'
import 'aframe';
import 'aframe-extras'
import Playas from '../routes/Playa'
import { Routes,Route } from 'react-router-dom';





import 'aframe-environment-component';
// import 'aframe-animation-component';
// import 'aframe-mouse-cursor-component';
// import 'aframe-particle-system-component';
//cambiaEs();

const handleClick = () => {
  navigate('/playa');
};
const Barco = () => {
  return (
    
    <a-scene cursor="rayOrigin: mouse">
     
      <a-assets>
        <img src={require('./assets/textures/sky.jpg')} alt="" id='sky' />
        <img src={require('./assets/textures/marble.jpg')} alt="" id='luna' />
        <img src={require('./assets/textures/wood.jpg')} alt="" id='balsa' />
       

      </a-assets>
      <a-sky width="2048" height="2048" material="shader: flat; src: #sky" radius="300" theta-length="90"></a-sky>

      <a-ocean density="200" width="2500" depth="2500" speed="3" material="color: blue; opacity: 0.9; metalness: 0;"
        rotation="-90 0 0" position="0 .8 0"></a-ocean>

      <a-entity id="light" position="0 0 -70" light="type: point; color: white; intensity: 5"></a-entity>
      <a-entity id="light" light="type: ambient; color: #555"></a-entity>
      <a-entity geometry="primitive: sphere; radius: 50"
        material="color: white; shader: flat; src: #luna" position="300 150 -50"

        light="type:point; color: white; intensity: .2"></a-entity>
        <a-box id="barco"  
        rotation="0 45 0" 
        color="white" 
        position="15 10 0" 
        scale="8 1 12"
        animation="property: rotation; from: 0 50 0; to: 3 50 0; loop: true; dur: 7000; dir: alternate ; property: position; from: 5 .8 -50; to:5 0 50; dur: 10000; easing: linear; loop: false "
        material="shader: flat; src: #balsa" >
          
        </a-box>
      
      <a-gltf-model
        src="https://cdn.glitch.global/11112d35-f4a1-41f6-be6d-cea189c44184/pirata_cartoon17_final.glb?v=1689056482784"
        position="15 11 0"
        animation="property: rotation; from: 0 50 0; to: 3 50 0; loop: true; dur: 3000; dir: alternate ; property: position; from: 5 1 -50; to: 5 1 50; dur: 10000; easing: linear; loop: false "
         scale=" 3 3 3  "
        onClick={(handleClick)}
      >
      </a-gltf-model>
      
      <a-entity camera look-controls position="-30 40 15"
        animation="property:rotation; from: 0 50 0; to: 3 50 0; loop: false; dur: 3000;">
        <a-cursor fuse="true" fuse-timeout="1500"></a-cursor>
      </a-entity>
      
    </a-scene>
    
  );
};

export default Barco;

