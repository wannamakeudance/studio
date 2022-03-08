/**
 * @file the navbar of homepage
 * @author jingxiangzheng
 */

 import React from 'react';
 import {Navbar, Container,Offcanvas, Button, ListGroup, Badge} from 'react-bootstrap';
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
        return <div className='nav-bar-container'>
        <Navbar className='nav-bar-fixed' fixed="top">
            <Container>
            <Navbar.Brand href="/" className='animate__animated animate__rubberBand'>
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
            <Offcanvas.Title className="animate__animated animate__flipInX">More About Me</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="animate__animated animate__zoomIn">
            <Badge bg="warning" text="dark">Share Knowledge</Badge>    
            <ListGroup variant="flush">
                <ListGroup.Item className="hover-underline-animation" >
                    <a href="https://github.com/wannamakeudance/redux-design-pattern">
                        How to understand Redux?
                    </a>
                </ListGroup.Item>
                <ListGroup.Item className="hover-underline-animation">
                    <a href="https://github.com/wannamakeudance/react-redux-design-pattern">
                        How to understand react-redux?
                    </a>
                </ListGroup.Item>
                <ListGroup.Item className="hover-underline-animation" >
                    <a href="https://github.com/wannamakeudance/redux-middleware-pattern">
                        How to understand Redux Middlewares?
                    </a>
                </ListGroup.Item>
                <ListGroup.Item className="hover-underline-animation" >
                    <a href="https://github.com/wannamakeudance/redux-thunk-design-pattern">
                        How to understand redux-thunk?
                    </a>
                </ListGroup.Item>
            </ListGroup>
            <Badge bg="info" text="dark">Technology Blog</Badge>
            <ListGroup variant="flush">
                <ListGroup.Item className="hover-underline-animation" >
                    <a href="https://juejin.cn/post/6909289889955577863">
                        Smart UI: to create ancillary coefficient greater than 1.
                    </a>
                </ListGroup.Item>
                <ListGroup.Item className="hover-underline-animation">
                    <a href="https://juejin.cn/post/6845166890914955278">
                    MiniApp Pats you: Here's how to Avoid a Routing Minefield
                    </a>
                </ListGroup.Item>
                <ListGroup.Item className="hover-underline-animation" >
                    <a href="https://juejin.cn/post/6855129006552514568">
                    10 Minutes to Understand Single-page Application Routing
                    </a>
                </ListGroup.Item>
                <ListGroup.Item className="hover-underline-animation" >
                    <a href="https://juejin.cn/post/6862213193171894280">
                    Into the Principles of Mini Program: Uncovering the same Layer rendering of Components
                    </a>
                </ListGroup.Item>
            </ListGroup>
            <Badge bg="success" text="light">Contact Me</Badge><br/><br/>
            I will develop more lovely and amusing gizmos, due to <span className='c-yellow f-w-b'>creation </span> 
            truly brings <span className="c-yellow f-w-b">happiness</span> to me. If you have any ideas to share, you can contact me through <span className="c-yellow f-w-b">15652112068@163.com</span>.
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
 
 