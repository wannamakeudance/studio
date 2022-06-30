/**
 * @file the cards of homepage
 * @author jingxiangzheng
 */

 import React from 'react';
 import {CardGroup} from 'react-bootstrap';
 import './Card.css';
 import CardItem from './CardItem';
 import {CARDS_DATA} from '../../utils/config';

class _CardList extends React.Component {

  render() {
        return <CardGroup>
        {
          CARDS_DATA.map((card,index) => {
            return <CardItem card={card} key={index} index={index + 1}/>
          })
        }   
      </CardGroup>;
    }
    navigateTo(url) {
        window.location.href = url;
    }
 }
 export default _CardList;
 
 