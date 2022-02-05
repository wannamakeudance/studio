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
     render() {
        return <CardGroup>
        <Card>
          <Card.Img variant="top" src={card1} className='reveal-detect'/>
          <Card.Body>
            <Card.Title className='reveal-detect'>Card title</Card.Title>
            <Card.Text className='reveal-detect'>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted reveal-detect">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={card2} className='reveal-detect'/>
          <Card.Body>
            <Card.Title className='reveal-detect'>Card title</Card.Title>
            <Card.Text className='reveal-detect'>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted reveal-detect">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={card3} className='reveal-detect'/>
          <Card.Body>
            <Card.Title className='reveal-detect'>Card title</Card.Title>
            <Card.Text className='reveal-detect'>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted reveal-detect">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>;
     }
 }
 export default _Card;
 
 