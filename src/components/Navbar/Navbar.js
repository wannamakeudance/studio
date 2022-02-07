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
            <Navbar.Brand href="#home" className='animate__animated animate__rubberBand'>
                Olivia's Studio
            </Navbar.Brand>
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
            <Offcanvas.Title className='animate__animated animate__flipInX'>Let us explore fun together.</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='animate__animated animate__zoomIn'>
            I will develop more lovely and amusing gizmos, due to <span className='c-yellow f-w-b'>creation </span> 
            truly brings <span className='c-yellow f-w-b'>happiness</span> to me.
            <br/><br/>If you have any ideas to share, you can contact with me through 15652112068@163.com.
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
 
 