import React from 'react';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {addScrollAnimate, addWriting} from './utils/index';

class App extends React.Component {
  render() {
    return <div className="App">
      <Navbar></Navbar>
      <Carousel></Carousel>
      <h1 className='reveal-detect m-t-2'>Olivia</h1>
      <h4 className='reveal-detect m-t-2'>Education</h4>
      <p className='reveal-detect'>
        BEng in Xiamen University (985, 211)<br/>
        MIT in The University of Auckland (QS 82)
      </p>
      <h4 className='reveal-detect m-t-2'>Work Experience</h4>
        The Expert Software in Baidu.com<br/>
        6 years of front-end experience<br/>
      <h4 className='reveal-detect m-t-2'>Collections</h4>
      <Card></Card>
  </div>;
  }
  componentDidMount() {
    addScrollAnimate();
    addWriting('O ever youthful, O ever weeping.', '.write-content');    
  }
}

export default App;
