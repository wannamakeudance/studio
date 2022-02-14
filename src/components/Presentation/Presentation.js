
/**
 * @file the ppt page
 * @author jingxiangzheng
 */

import React, {useEffect}  from 'react';
import './Presentation.css';
import * as Impress from 'impress.js';
 
 function _Presentation() {
    useEffect(() => {
        /**
         * TODO: must use 'window'
         * otherwise it will say that impress is not a function
         */
        window.impress().init();
    });
    return (
        <div id="impress"
            data-transition-duration="1000"
            data-width="1024"
            data-height="768"
            data-max-scale="10"
            data-min-scale="0"
            data-perspective="1000">
            <div className="step" data-x="-200" data-y="0" data-scale="20" data-autoplay="10">
            JavaScript
            </div>
            <div className="step" data-x="0" data-y="-500" data-scale="2">
            HTML5
            </div>
            <div className="step" data-x="-300" data-y="-500" data-z="-2000" data-rotate="30" data-scale="1">
            CSS3
            </div>
            <div className="step" data-x="-500" data-y="-1000" data-z="-1000" data-rotate="70" data-scale="3">
            Vue.js
            </div>
            <div className="step" data-x="0" data-y="1000" data-scale="8">
            React
            </div>
            <div className="step" data-x="-4000" data-y="2000" data-rotate="90" data-scale="6">
            Node.js
            </div>
            <div className="step" data-x="3500" data-y="2100" data-rotate="180" data-scale="6">
            Less,Sass
            </div>
            <div className="step" data-x="-8825" data-y="2325" data-z="-3000" data-rotate="300" data-scale="6">
            Mini Program
            </div>
            <div className="step end" data-x="6200" data-y="1200" data-z="-400" data-rotate-x="-40" data-rotate-y="100" data-scale="6">
            Let's begin!
            </div>
        </div>
    );
 }
 export default _Presentation;
 
 