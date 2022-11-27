/**
 * @file App.js
 * @author jingxiangzheng
 */
import React from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Card from './components/Card/CardList';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import Resume from './components/Resume/Resume';
import './App.css';
import logo from './assets/logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {addScrollAnimate, addWriting} from './utils/index';
import './utils/lang';
import i18next from 'i18next';

export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          isLoaded: false
      };
  }
  render() {
      const isLoaded = this.state.isLoaded;
      return <div className={(isLoaded ? '' : 'isloading') + ' App'}>
        <img src={logo} className="spinner" alt="spinner"/>
        <Navbar></Navbar>
        <Carousel></Carousel>
        <Resume></Resume>
        <Card></Card>
        <a href='/OliviaJing-CV.pdf' 
          className='cv-letter animate__animated hover-underline-animation'>
          {i18next.t('To See Her Cover Letter')}
        </a>
        <Link to="/detail">
          <Button className='m-t-2 m-b-5 animate__animated start-btn'
            variant="outline-light">
            {i18next.t('Click me')} (*￣︶￣)
          </Button>
        </Link>
      </div>;
  }
  componentDidMount() {
      addScrollAnimate();
      const lang = localStorage.getItem('lang');
      const content = lang === 'CN' ? '永远年轻，永远热泪盈眶' : 'O ever youthful, O ever weeping.';
      addWriting(content, '.write-content');
      setTimeout(() => {
          this.setState({
              isLoaded: true
          });
      }, 1200);
  }
}
