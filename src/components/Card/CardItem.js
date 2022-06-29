/**
 * @file the cards of homepage
 * @author jingxiangzheng
 */

 import React from 'react';
 import i18next from 'i18next';
 import {Card} from 'react-bootstrap';
 import './Card.css';
 import card1 from '../../assets/card1.jpg';
//  import card2 from '../../assets/card2.jpg';
//  import card3 from '../../assets/card3.jpg';
 
class _CardItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.card;
    }
    render() {
        return <Card onClick={() => this.navigateTo(this.state.url)}>
          <Card.Img variant="top" src={this.state.img} className='animate__animated'/>
          <Card.Body>
            <Card.Title className='animate__animated'>
              {i18next.t(this.state.title)}
            </Card.Title>
            <Card.Text className='animate__animated'>
              {i18next.t(this.state.desc)} .
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted animate__animated">
              {i18next.t(this.state.skill)}
            </small>
          </Card.Footer>
        </Card>;
    }
    navigateTo(url) {
        window.location.href = url;
    }
 }
 export default _CardItem;
 
 