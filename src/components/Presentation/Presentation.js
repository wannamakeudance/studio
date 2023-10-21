
/**
 * @file the ppt page
 * @author jingxiangzheng
 */

import React, {useEffect}  from 'react';
import './Presentation.css';
import Navbar from '../Navbar/Navbar';
// eslint-disable-next-line no-unused-vars
import * as Impress from 'impress.js';
import {isMobile} from '../../utils/index';
import i18next from 'i18next';

 function _Presentation() {

    useEffect(() => {
        /**
         * TODO: must use 'window'
         * otherwise it will say that impress is not a function
         */
        window.impress().init();
    });

    const getBubbleList = () => {
        let res = [];
        for(var i = 0; i < 10; i++) {
            res.push(<li key={i}></li>);
        }
        return res;
    }

    return (
        <div className='presentation-container'>
            <Navbar></Navbar>
            <div id='impress'
                data-transition-duration='600'
                data-width='1024'
                data-height='768'
                data-max-scale='10'
                data-min-scale='0'
                data-perspective='1000'>
                <div className='step' data-x='-200' data-y='-400' data-scale='20' data-autoplay='10'>
                JavaScript
                </div>
                <div className='step' data-x='0' data-y='-500' data-rotate='30' data-scale='2'>
                HTML5
                </div>
                <div className='step' data-x='-300' data-y='-500' data-z='-2000' data-rotate='30' data-scale='1'>
                CSS3
                </div>
                <div className='step' data-x='-600' data-y='-200' data-z='-1000' data-rotate='60' data-scale='1'>
                Taliwind
                </div>
                <div className='step' data-x='-500' data-y='-1000' data-z='-1000' data-rotate='70' data-scale='3'>
                Vue.js
                </div>
                <div className='step' data-x='-3000' data-y='200' data-z='1200' data-rotate='-20' data-scale='8'>
                React
                </div>
                <div className='step' data-x='-1200' data-y='800' data-z='-900' data-rotate='30' data-scale='10'>
                AWS
                </div>
                <div className='step' data-x='-4000' data-y='2000' data-z='300' data-rotate='120' data-scale='7'>
                MongoDB
                </div>
                <div className='step' data-x='1000' data-y='-3000'  data-z='-200'data-rotate='30' data-scale='6'>
                GraghQL
                </div>
                <div className='step' data-x='-4000' data-y='2000' data-rotate='90' data-scale='6'>
                Node.js
                </div>
                <div className='step' data-x='3500' data-y='2100' data-rotate='180' data-scale='6'>
                Less,Sass
                </div>
                <div className='step' data-x='200' data-y='300' data-z='-2000' data-rotate-x='-40' data-rotate-y='100' data-scale='6'>
                Cypress
                </div>
                <div className='step' data-x='6200' data-y='500' data-z='-800' data-rotate-x='-100' data-rotate-y='100' data-scale='6'>
                Jest Unit Test
                </div>
                <div className='step' data-x='-8825' data-y='2325' data-z='-3000' data-rotate='300' data-scale='6'>
                Mini Program
                </div>
                <div className='step' data-x='6200' data-y='1200' data-z='-4000' data-rotate-x='60' data-rotate-y='100' data-scale='6'>
                Webpack
                </div>
            </div>
            <ul className='bg-bubbles'>
                {getBubbleList()}
            </ul>
           
                {isMobile() ?
                    (<div className='triangle'><svg className='move-left-icon' height="100" viewBox="0 0 64 64" width="100" xmlns="http://www.w3.org/2000/svg"><g id="flat"><path d="m35 15a1 1 0 0 1 -.707-.293l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414l-3.293 3.293 3.293 3.293a1 1 0 0 1 -.707 1.707z" fill="#a7a9ac"/><path d="m48 11h-17a1 1 0 0 1 0-2h17a1 1 0 0 1 0 2z" fill="#a7a9ac"/><g fill="#efc7bd"><path d="m27 18a3 3 0 0 1 3 3v19a0 0 0 0 1 0 0h-6a0 0 0 0 1 0 0v-19a3 3 0 0 1 3-3z"/><path d="m33 26a3 3 0 0 1 3 3v11a0 0 0 0 1 0 0h-6a0 0 0 0 1 0 0v-11a3 3 0 0 1 3-3z"/><path d="m42 40h-6v-10a3 3 0 0 1 3-3 3 3 0 0 1 3 3z"/><path d="m48 40h-6v-8a3 3 0 0 1 3-3 3 3 0 0 1 3 3z"/><path d="m24 39h24v20h-24z"/><path d="m25 43-6.5-6.5a3.536 3.536 0 0 0 -5 0 3.536 3.536 0 0 0 0 5l11.5 11.5z"/></g><path d="m36 37a1 1 0 0 1 -1-1v-7a2 2 0 0 0 -2-2 1 1 0 0 1 0-2 4 4 0 0 1 4 4v7a1 1 0 0 1 -1 1z" fill="#e0b0a6"/><path d="m42 37a1 1 0 0 1 -1-1v-6a2 2 0 0 0 -2-2 1 1 0 0 1 0-2 4 4 0 0 1 4 4v6a1 1 0 0 1 -1 1z" fill="#e0b0a6"/><path d="m30 37a1 1 0 0 1 -1-1v-15a2 2 0 0 0 -2-2 1 1 0 0 1 0-2 4 4 0 0 1 4 4v15a1 1 0 0 1 -1 1z" fill="#e0b0a6"/><path d="m24 60a1 1 0 0 1 -1-1v-6.586l-10.207-10.207a1 1 0 0 1 1.414-1.414l10.5 10.5a1 1 0 0 1 .293.707v7a1 1 0 0 1 -1 1z" fill="#e0b0a6"/><path d="m48 60a1 1 0 0 1 -1-1v-27a2 2 0 0 0 -2-2 1 1 0 0 1 0-2 4 4 0 0 1 4 4v27a1 1 0 0 1 -1 1z" fill="#e0b0a6"/></g></svg>
                    <div>{i18next.t('Please swipe left')}</div></div>)
                    :
                    <div className='triangle'>
                        <svg id="Layer_1" enableBackground="new 0 0 64 64" height="80" viewBox="0 0 64 64" width="80"
                        xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="m61 4h-58c-1.654 0-3 1.346-3 3v24c0 1.654 1.346 3 3 3h8.586l1.707 1.707c.187.188.442.293.707.293h36c.265 0 .519-.105.707-.293l1.707-1.707h8.586c1.654 0 3-1.346 3-3v-24c0-1.654-1.346-3-3-3z" fill="#57565c"/>
                                <g fill="#3e3d42">
                                    <path d="m6 15h5c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1h-5c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1z"/>
                                    <path d="m15 15h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1z"/>
                                    <path d="m23 15h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1z"/>
                                    <path d="m31 15h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1z"/>
                                    <path d="m39 15h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1z"/>
                                    <path d="m47 15h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1z"/>
                                    <path d="m35 17c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"/>
                                    <path d="m27 17c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"/>
                                    <path d="m24 22v-4c0-.552-.448-1-1-1h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1z"/>
                                    <path d="m18 25h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"/>
                                    <path d="m43 17c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"/>
                                    <path d="m52 25h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"/>
                                    <path d="m60 9h-5c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h5c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"/>
                                    <path d="m10 25h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"/>
                                    <path d="m60 25h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"/>
                                    <path d="m6 23h9c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1h-9c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1z"/>
                                    <path d="m60 17h-9c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h9c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"/>
                                    <path d="m44 25h-22c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h22c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"/>
                                </g>
                                <path d="m5 14h5c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1h-5c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1z" fill="#57a4ff"/>
                                <path d="m14 14h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1z" fill="#57a4ff"/>
                                <path d="m22 14h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1z" fill="#57a4ff"/>
                                <path d="m30 14h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1z" fill="#57a4ff"/>
                                <path d="m38 14h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1z" fill="#57a4ff"/>
                                <path d="m46 14h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1z" fill="#57a4ff"/>
                                <path d="m34 16c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z" fill="#57a4ff"/>
                                <path d="m26 16c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z" fill="#57a4ff"/>
                                <path d="m23 21v-4c0-.552-.448-1-1-1h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1z" fill="#57a4ff"/>
                                <path d="m17 24h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z" fill="#57a4ff"/>
                                <path d="m42 16c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z" fill="#57a4ff"/>
                                <path d="m51 24h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z" fill="#57a4ff"/>
                                <path d="m59 8h-5c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h5c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z" fill="#57a4ff"/>
                                <path d="m9 24h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z" fill="#57a4ff"/>
                                <path d="m59 24h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z" fill="#57a4ff"/>
                                <path d="m5 22h9c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1h-9c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1z" fill="#57a4ff"/>
                                <path d="m59 16h-9c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h9c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z" fill="#57a4ff"/>
                                <path d="m43 24h-22c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h22c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z" fill="#d8d7da"/>
                                <path d="m6 42c1.104 0 2 .896 2 2v-2c0-1.104.895-2 2-2 1.104 0 2 .896 2 2v-2c0-1.104.895-2 2-2 1.104 0 2 .896 2 2v2c0-1.104.895-2 2-2 1.104 0 2 .896 2 2v9c0-4 4-4 4-4v12c0 .552-.448 1-1 1s-17.448 0-18 0-1-.448-1-1v-15c0-1.104.895-2 2-2z" fill="#ffdaaa"/>
                                <path d="m18 50v-10c1.104 0 2 .896 2 2v9s-.447 0-1 0-1-.447-1-1z" fill="#ffc477"/>
                                <path d="m14 50v-12c1.104 0 2 .896 2 2v10c0 .553-.447 1-1 1s-1-.447-1-1z" fill="#ffc477"/>
                                <path d="m10 50v-10c1.104 0 2 .896 2 2v8c0 .553-.447 1-1 1s-1-.447-1-1z" fill="#ffc477"/>
                                <path d="m6 50v-8c1.104 0 2 .896 2 2v6c0 .553-.447 1-1 1s-1-.447-1-1z" fill="#ffc477"/>
                                <path d="m58 42c-1.105 0-2 .896-2 2v-2c0-1.104-.896-2-2-2-1.105 0-2 .896-2 2v-2c0-1.104-.896-2-2-2-1.105 0-2 .896-2 2v2c0-1.104-.896-2-2-2-1.105 0-2 .896-2 2v9c0-4-4-4-4-4v12c0 .552.448 1 1 1h18c.552 0 1-.448 1-1v-15c0-1.104-.896-2-2-2z" fill="#ffdaaa"/>
                                <path d="m54 50v-10c1.104 0 2 .896 2 2v9s-.447 0-1 0-1-.447-1-1z" fill="#ffc477"/>
                                <path d="m50 50v-12c1.104 0 2 .896 2 2v10c0 .553-.447 1-1 1s-1-.447-1-1z" fill="#ffc477"/>
                                <path d="m46 50v-10c1.104 0 2 .896 2 2v8c0 .553-.447 1-1 1s-1-.447-1-1z" fill="#ffc477"/>
                                <path d="m43 55c.553 0 1-.447 1-1v-3c0-2-1-3-2-3.5v6.5c0 .553.447 1 1 1z" fill="#ffc477"/>
                                <path d="m58 42v17c0 .553.447 1 1 1 .552 0 1-.448 1-1v-15c0-1.104-.896-2-2-2z" fill="#ffc477"/>
                            </g>
                        </svg>
                    <div>{i18next.t('Please press space key')}</div>
                </div>
                }
        </div>
    );
 }
 export default _Presentation;
 
 