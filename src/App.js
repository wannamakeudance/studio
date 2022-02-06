import React from 'react';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {addScrollAnimate, addWriting} from './utils/index';
import logo from './assets/logo.jpg';

class App extends React.Component {
  render() {
    return <div className="App">
      <Navbar></Navbar>
      <Carousel></Carousel>
      <img className='m-t-2 logo' src={logo}/>
      <h4 className='animate__animated m-t-2 f-w-b c-yellow'>Education</h4>
      <p className='animate__animated'>
        BEng in Xiamen University (985, 211)<br/>
        MIT in The University of Auckland (QS 82)
      </p>
      <h4 className='animate__animated m-t-2 f-w-b c-yellow'>Work Experience</h4>
        The Software Expert in Baidu.com<br/>
        6 years of front-end experience<br/>
      <h4 className='animate__animated m-t-2 f-w-b c-yellow'>Collections</h4>
      <Card></Card>
  </div>;
  }
  componentDidMount() {
    addScrollAnimate();
    addWriting('O ever youthful, O ever weeping.', '.write-content');    
  }
}

export default App;
