import React from 'react';
import {Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Resume from './components/Resume/Resume';
import './App.css';
import logo from './assets/logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {addScrollAnimate, addWriting} from './utils/index';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoaded: false
    };
  }
  render() {
    const isLoaded = this.state.isLoaded;
    return <div className={(isLoaded ? '' : 'isloading') + ' App'}>
      <img src={logo} className="spinner"/>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <Resume></Resume>
      <Card></Card>
      <Link to="/detail">
        <Button className='m-t-2 m-b-5 animate__animated start-btn' 
          variant="outline-light">
            Click me (*￣︶￣)
        </Button>
      </Link>
  </div>;
  }
  componentDidMount() {
    addScrollAnimate();
    addWriting('O ever youthful, O ever weeping.', '.write-content');    
    setTimeout(() => {
      this.setState({
        isLoaded: true
      });
    }, 1200);
  }
}

export default App;
