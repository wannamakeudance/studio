/**
 * @file the banner of homepage
 * @author jingxiangzheng
 */

import React from 'react';
import i18next from 'i18next';
import {Carousel} from 'react-bootstrap';
import './Carousel.css';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner4 from '../../assets/banner4.jpg';

export default class _Carousel extends React.Component {
    render() {
        return <Carousel fade>
          <Carousel.Item>
            <img
              src={banner1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className='animate__animated write-content'>()</h3>
              <p className='animate__animated'>{i18next.t('Keep calm and carry on')}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={banner2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 className='animate__animated'>{i18next.t('We are')}</h3>
              <p className='animate__animated'>{i18next.t('what we repeatedly do')}.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={banner4}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className='animate__animated'>{i18next.t('Shoot for the moon')}</h3>
              <p className='animate__animated'>{i18next.t("Even if you miss, you'll land among the stars")}.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>;
    }
}
