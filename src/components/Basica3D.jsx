import 'aframe'
import 'aframe-environment-component';
// import 'aframe-animation-component';
// import 'aframe-mouse-cursor-component';
// import 'aframe-particle-system-component';
import React, {Component} from 'react'

class Basica3D extends Component {
  render () {
    return (

      <a-scene>
      
        <a-assets>
        <img id="luna" src="../../public/assets/textures/marble.jpg" alt="cuadrado"/>
        <img src={require('./assets/textures/sky.jpg')} alt=""id='sky' />
        
         <a-asset-item id="avatar" src="/assets/Avatar.glb"></a-asset-item>

        </a-assets>
        
      <a-light type="point" intensity="1" position="-10 20 30"></a-light>
      
      <a-entity movement-controls="fly: true" position="20 5 20">
        <a-entity camera position="-18 0 -18" look-controls></a-entity>
        <a-entity cursor="rayOrigin:mouse"></a-entity>
        <a-entity laser-controls="hand: right"></a-entity>
      </a-entity>

      <a-entity gltf-model="/assets/Avatar.glb" position="1.64797 3.07375 -2.958"  scale="2 2 2"  animation attribute="rotation" from="0 0 0" to="0 180 0" dur="2000" easing="easeInOutQuart" repeat="indefinite">
      </a-entity>

      <a-box
        position="4.43669 5.30455 -5.82318" rotation="35.073 114.489 35.073" color="white" src="#foto" animation="property: rotation; to: 0 360 0; dur: 4000; easing: linear; loop: true" material="" geometry="">
      </a-box>
      <a-box
        position="-1 5 -5" 
        rotation="45 45 45" 
        color="white"
        src="#contacta"
        animation="property: rotation; to: 0 360 0; dur: 4000; easing: linear; loop: true">
      </a-box> 
      <a-box position="2.00045 8.39682 -5.80646" rotation="14.212601100096347 260.5117922993256 14.212601100096347" color="white" src="#trabajo" animation="property: rotation; to: 0 360 0; dur: 4000; easing: linear; loop: true" material="" geometry="">
      </a-box>
      <h1> Hola me llamo Marisol y soy especialista en gestión integral y desarrollo Fullstack, si quieres saber más de mí pincha en los cubos. </h1> 
        <a-entity 
          geometry="primitive: box" 
          position="-1 0.5 -3" 
          rotation="0 45 0" 
          material="color: white; shader: flat; src: #sky"
          animation="property: rotation; from: 0 2 0; to: 3 25 0; loop: true; 
          dur: 300;  "
           />
        <a-entity 
          geometry="primitive: sphere; radius: 1.25;" 
          position="0 1.25 -5" 
          material="color: #EF2D5E" />
        <a-entity 
          geometry="primitive: cylinder; radius: 0.5, height: 1.5" 
          position="1 0.75 -3" 
          material="color: #FFC65D" />
        <a-entity 
          geometry="primitive: plane; width: 4; height: 4" 
          position="0 0 -4" 
          rotation="-90 0 0" 
          material="color: #7BC8A4" />
          
       
      </a-scene>


    );
  }
}

export default Basica3D;