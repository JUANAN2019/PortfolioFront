import React, { useState } from 'react';
import './App.css';

function MiComponente() {
  const [showFirstImage, setShowFirstImage] = useState(true);
  const [showButton, setShowButton] = useState(true);

  const handleImageClick = () => {
    setShowButton(true);
  };

  const handleButtonClick = () => {
    setShowFirstImage(!showFirstImage);
  };

  return (
    <>
      <a-scene>
        <a-camera>
          <a-entity cursor="rayOrigin: mouse"></a-entity>
        </a-camera>

        <a-sky src={showFirstImage ? "/public/assets/escena1/img/telde_sanjuan_360.jpg" : "/public/assets/escena1/img/cuatro_puertas_inside_360.jpg"} rotation="0 -90 0"></a-sky>

        <a-entity position="0 0 -5">
          <a-image
            src={showFirstImage ? "/public/assets/escena1/img/telde_sanjuan_360.jpg" : "/public/assets/escena1/img/cuatro_puertas_inside_360.jpg"}
            width="50"
            height="50"
            drag-rotate
            onClick={handleImageClick}
            look-at="[camera]"
          ></a-image>

          {showButton && (
            <a-entity position="0 0 0" scale="0.5 0.5 0.5">
              <a-box width="4" height="0.5" depth="0.2" color="#555" opacity="0.8" onClick={handleButtonClick} cursor-listener></a-box>
              <a-text
                value="3D"
                align="center"
                position="0 0 0.1"
                color="#fff"
                width="3.8"
                wrap-count="14"
                scale="2 2"
              ></a-text>
            </a-entity>
          )}

          {showFirstImage && (
            <a-gltf-model src="https://cdn.glitch.global/9b4032e2-667f-4632-b35b-d57d0d43df9c/avatar.glb?v=1688651217472 " scale="0.5 0.5 0.5" position=" 1 1. 1" animation-mixer></a-gltf-model>
          )}
        </a-entity>

        {showFirstImage && (
          <a-entity particle-system="preset: snow; particleCount: 5000; size: 0.05"></a-entity>
        )}
      </a-scene>
    </>
  );
}
export default MiComponente