/**
 * @file the cards of homepage
 * @author jingxiangzheng
 */

 import React from 'react';
 import i18next from 'i18next';
 import {CardGroup} from 'react-bootstrap';
 import './Card.css';
 import CardItem from './CardItem';
 import {CARDS_DATA} from '../../utils/config';

class _CardList extends React.Component {

  render() {
        return <CardGroup>
        {
          CARDS_DATA.map((card,index) => {
            return <CardItem card={card} key={index}/>
          })
        }   
      </CardGroup>;
    }
    navigateTo(url) {
        window.location.href = url;
    }
 }
 export default _CardList;
 
 