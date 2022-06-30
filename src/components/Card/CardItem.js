/**
 * @file the cards of homepage
 * @author jingxiangzheng
 */

 import React from 'react';
 import i18next from 'i18next';
 import {Card} from 'react-bootstrap';
 import './Card.css';
 
class _CardItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.card;
        this.index = props.index;
    }
    render() {
        return <Card className= {'card' + this.index} onClick={() => this.navigateTo(this.state.url)}>
          <Card.Img variant="top" src={this.state.img} className='animate__animated'/>
          <Card.Body>
            <Card.Title className='animate__animated'>
              {i18next.t(this.state.title)}
            </Card.Title>
            <Card.Text className='animate__animated'>
              {i18next.t(this.state.desc)}
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
 
 