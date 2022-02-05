import React from 'react';
import Card from './components/Card/Card';
import Carousel from './components/Carousel/Carousel';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {addScrollAnimate, addWriting} from './utils/index';
import {Navbar, Container, Button, Offcanvas} from 'react-bootstrap';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  render() {
    return <div className="App">
      <Navbar fixed="top">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
        <Button className='nav-button'
          variant="outline-secondary" 
          onClick={this.toggleShow}>
          三
        </Button>
    </Navbar>
    <Offcanvas className="nav-dialog"
        show={this.state.show} onHide={this.handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>

      <Carousel></Carousel>
			<p className='reveal-detect'>I will be revealed when scrolled into view and hidden when scrolled past.</p>
      <p className='reveal-detect'>I will be revealed when scrolled into view and hidden when scrolled past.</p>
			<p className='content reveal-detect'></p>
      <Card></Card>
  </div>;
  }
  componentDidMount() {
    addScrollAnimate();
    addWriting('test123', '.content');    
  }
  toggleShow() {
    console.log(this)
    this.setState({
      show: !this.state.show
    });
  }
  handleClose() {
    this.setState({
      show: false
    });
  }
}

export default App;
