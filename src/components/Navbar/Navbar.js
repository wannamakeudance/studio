/**
 * @file the navbar of homepage
 * @author jingxiangzheng
 */

 import React from 'react';
 import {Navbar, Container,Offcanvas, Button} from 'react-bootstrap';
 import './Navbar.css';
 
 class _Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: false
        };
        this.toggleShow = this.toggleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    render() {
        return <div>
        <Navbar className='nav-bar-fixed' fixed="top">
            <Container>
            <Navbar.Brand href="#home">Olivia's Studio</Navbar.Brand>
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
        </div> ;
    }
    toggleShow() {
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
 export default _Navbar;
 
 