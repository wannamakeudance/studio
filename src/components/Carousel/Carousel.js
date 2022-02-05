/**
 * @file the banner of homepage
 * @author jingxiangzheng
 */

import React from 'react';
import {Carousel} from 'react-bootstrap';
import './Carousel.css';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner4 from '../../assets/banner4.jpg';

class _Carousel extends React.Component {
    render() {
       return <Carousel fade className='reveal-detect'>
       <Carousel.Item>
         <img
           src={banner1}
           alt="First slide"
         />
         <Carousel.Caption>
           <h3>First slide label</h3>
           <p className='reveal-detect'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
         <img
           src={banner2}
           alt="Second slide"
         />
         <Carousel.Caption>
           <h3>Second slide label</h3>
           <p className='reveal-detect'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
         <img
           src={banner4}
           alt="Third slide"
         />
         <Carousel.Caption>
           <h3>Third slide label</h3>
           <p className='reveal-detect'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
         </Carousel.Caption>
       </Carousel.Item>
     </Carousel>; 
    }
}
export default _Carousel;

