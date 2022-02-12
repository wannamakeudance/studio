import React from 'react';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Resume from './components/Resume/Resume';
import './App.css';
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
      <div className="spinner"></div>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <Resume></Resume>
      <Card></Card>
  </div>;
  }
  componentDidMount() {
    addScrollAnimate();
    addWriting('O ever youthful, O ever weeping.', '.write-content');    
    setTimeout(() => {
      this.setState({
        isLoaded: true
      });
    }, 1000);
  }
}

export default App;
