import 'aframe'
import React, { Component } from 'react'


class Meteoritos extends Component {
    render() {

        return (

            <a-scene>

                <a-assets>
                    <img src="../assets/sky.jpeg" id="sky" alt='' />
                    <img src="../assets/meteor.jpeg" id="meteor" alt='' />
                </a-assets>

                <a-sky src="#sky"></a-sky>
                <a-entity class="orbit" position="0 3 0" rotation="0 0 0"
                    animation="property: rotation; to: 0 360 360; loop: true; dur: 40000;  easing: linear">
                </a-entity>

                <a-entity class="orbit" position="0 0 0" rotation="0 0 -45"
                    animation="property: rotation; to: 0 -360 0; loop: true; dur: 30000; easing: linear">
                </a-entity>

                <a-entity class="orbit" position="0 -3 0" rotation="0 0 -90"
                    animation="property: rotation; to: 0 360 360; loop: true; dur: 20000; easing: linear">
                </a-entity>

                <a-entity class="orbit" position="0 0 0" rotation="0 0 -120"
                    animation="property: rotation; to: 360 -360 0; loop: true; dur: 50000; easing: linear">
                </a-entity>

                <a-entity camera look-controls>

                    <a-text value="0 meteoritos cazados" color="white" position="0 -0.1 -1" width="1" align="center"></a-text>
                    <a-entity cursor="fuse: true; fuseTimeout: 100" position="0 0 -1" raycaster="objects: .meteor"
                        geometry="primitive: ring; radiusInner: 0.015; radiusOuter: 0.025" material="shader: flat"></a-entity>

                </a-entity>
            </a-scene>


        );
    }
}

export default Meteoritos;