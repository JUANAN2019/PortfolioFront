// import React from 'react';
// import { Entity, Scene } from 'aframe-react';

// require('./ChangeSite')

// function Escenas() {
//     return (
//         <Scene>
//             <Entity change-site={{ img: "", sound: "", zone: "" }}>
//                 <a-assets>
//                     <img id="boxTexture" src="img/texture_wear.jpg" alt="texture" />
//                     <img id="exit" src="img/exit.jpg" alt="texture" />
//                     <img id="img-360-telde-sanjuan" src="img/telde_sanjuan_360.jpg" alt="img-360-telde-sanjuan" />
//                     <img id="img-360-cuatro-puertas-inside" src="img/cuatro_puertas_inside_360.jpg" alt="img-360-cuatro-puertas-inside" />
//                     <img id="img-360-cuatro-puertas-outside" src="img/cuatro_puertas_outside_360.jpg" alt="img-360-cuatro-puertas-outside" />
//                     <audio id="sound-birds" src="ogg/387978__dcpoke__birds-singing-03.ogg" preload="auto"></audio>
//                     <audio id="sound-wind-outside" src="ogg/135034__mrlindstrom__windloop6sec.ogg" preload="auto"></audio>
//                     <audio id="sound-wind-inside" src="ogg/212443__klankbeeld__howling-wind-inside-01-131230-01.ogg"
//                         preload="auto"></audio>
//                     <audio id="magic-click" src="ogg/340159__flechabr__magic-click.ogg" preload="auto"></audio>
//                 </a-assets>

//                 <a-camera>
//                     <a-cursor raycaster="objects: .clickable"></a-cursor>
//                 </a-camera>

//                 <a-entity position="-1 0.5 -3">
//                     <a-entity>
//                         <a-box src="#boxTexture" rotation="0 45 45" scale=".2 .2 .2" color="red"
//                             animation__position="property: rotation; to: 0 360 0; dir: alternate; dur: 2000; loop: true"
//                             animation__mouseenter="property: scale; to: .5 .5 .5; dur: 300; startEvents: mouseenter"
//                             animation__mouseleave="property: scale; to: .25 .25 .25; dur: 300; startEvents: mouseleave"></a-box>
//                         <a-plane position="1.75 0 0" width="3" height="0.25" color="black"
//                             change-site="img: #img-360-telde-sanjuan; sound: #sound-birds; zone: .telde-sanjuan"
//                             sound="on: mouseenter; src: #magic-click">
//                             <a-text color="white" value="San Juan Bautista, Telde" align="center"></a-text>
//                         </a-plane>
//                     </a-entity>
//                     <a-entity position="0 0.3 0">
//                         <a-box src="#boxTexture" rotation="0 45 45" scale=".2 .2 .2" visible="false" color="red"
//                             animation__position="property: rotation; to: 0 360 0; dir: alternate; dur: 2000; loop: true"
//                             animation__mouseenter="property: scale; to: .5 .5 .5; dur: 300; startEvents: mouseenter"
//                             animation__mouseleave="property: scale; to: .25 .25 .25; dur: 300; startEvents: mouseleave"></a-box>
//                         <a-plane position="1.75 0 0" width="3" height="0.25" color="black" class="cuatro-puertas-inside clickable"
//                             change-site="img: #img-360-cuatro-puertas-inside; sound: #sound-wind-inside; zone: .cuatro-puertas-inside"
//                             sound="on: mouseenter; src: #magic-click">
//                             <a-text color="gray" value="Cuatro Puertas, Telde" align="center"></a-text>
//                         </a-plane>
//                         <a-circle opacity="0" position="-3 0 10" rotation="0 135 0" radius="2" color="white" class="cuatro-puertas-inside" visible="false"
//                             change-site="img: #img-360-cuatro-puertas-outside; sound: #sound-wind-outside; zone: .cuatro-puertas-outside"
//                             sound="on: mouseenter; src: #magic-click">
//                             <a-image src="#exit"></a-image>
//                         </a-circle>
//                         <a-circle opacity="0" position="8.5 0.4 -1.5" rotation="0 -45 0" scale="1 0.8 1" radius="2" color="white" class="cuatro-puertas-outside" visible="false"
//                             change-site="img: #img-360-cuatro-puertas-inside; sound: #sound-wind-inside; zone: .cuatro-puertas-inside"
//                             sound="on: mouseenter; src: #magic-click">
//                             <a-image src="#exit"></a-image>
//                         </a-circle>
//                     </a-entity>
//                 </a-entity>

//                 <a-sky id="my-sky" src="#img-360-telde-sanjuan" sound="src: #sound-birds; loop: true" data-sounding="false">
//                 </a-sky>

//             </Entity>
//         </Scene>
//     );
// }



///////////f export default Escenas;