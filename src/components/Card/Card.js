/**
 * @file the cards of homepage
 * @author jingxiangzheng
 */

 import React from 'react';
 import {CardGroup, Card} from 'react-bootstrap';
 import './Card.css';
 import card1 from '../../assets/card1.jpg';
 import card2 from '../../assets/card2.jpg';
 import card3 from '../../assets/card3.jpg';
 
class _Card extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return <CardGroup>
        <Card onClick={() => this.navigateTo('https://www.npmjs.com/package/@smt-ui/component')}>
          <Card.Img variant="top" src={card1} className='reveal-detect'/>
          <Card.Body>
            <Card.Title className='reveal-detect'>Open Source Library</Card.Title>
            <Card.Text className='reveal-detect'>
               As an owner, design and develop the UI components library. Up to today, the number of downloads is 2.5w+ .
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted reveal-detect">Software Architecture</small>
          </Card.Footer>
        </Card>
        <Card onClick={() => this.navigateTo('https://smartprogram.baidu.com/developer/index.html')}>
          <Card.Img variant="top" src={card2} className='reveal-detect'/>
          <Card.Body>
            <Card.Title className='reveal-detect'>Developer Management Platform</Card.Title>
            <Card.Text className='reveal-detect'>
            Build the management system of Small Program developers.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted reveal-detect">System Building</small>
          </Card.Footer>
        </Card>
        <Card onClick={() => this.navigateTo('https://github.com/wannamakeudance/swan-artifact')}>
          <Card.Img variant="top" src={card3} className='reveal-detect'/>
          <Card.Body>
            <Card.Title className='reveal-detect'>Confession of love</Card.Title>
            <Card.Text className='reveal-detect'>
            As a competition tutor, think of ideas and realize them in order to teach students vividly.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted reveal-detect">Realize Creativity</small>
          </Card.Footer>
        </Card>
      </CardGroup>;
    }
    navigateTo(url) {
        window.location.href = url;
    }
 }
 export default _Card;
 
 