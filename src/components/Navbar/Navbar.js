/**
 * @file the navbar of homepage
 * @author jingxiangzheng
 */

 import React from 'react';
 import {Navbar, Nav, Container,Offcanvas, Button, ListGroup, Badge, NavDropdown} from 'react-bootstrap';
 import './Navbar.css';
 import i18next from 'i18next';

 class _Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
            shareList: [{
                url: 'https://github.com/wannamakeudance/redux-design-pattern',
                title: 'How to understand Redux?'
            }, {
                url:'https://github.com/wannamakeudance/react-redux-design-pattern',
                title: 'How to understand react-redux?'
            }, {
                url: 'https://github.com/wannamakeudance/redux-middleware-pattern',
                title: 'How to understand Redux Middlewares?'
            }, {
                url: 'https://github.com/wannamakeudance/redux-thunk-design-pattern',
                title: 'How to understand redux-thunk?'
            }],
            blogList: [{
                url: 'https://juejin.cn/post/6909289889955577863',
                title: 'Smart UI: to create ancillary coefficient greater than 1'
            }, {
                url: 'https://juejin.cn/post/6845166890914955278',
                title: "MiniApp Pats you: Here's how to Avoid a Routing Minefield"
            }, {
                url: 'https://juejin.cn/post/6855129006552514568',
                title: '10 Minutes to Understand Single-page Application Routing'
            }, {
                url: 'https://juejin.cn/post/6862213193171894280',
                title: 'Into the Principles of Mini Program: Uncovering the same Layer rendering of Components'
            }]
        };
        this.toggleShow = this.toggleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.ChangeLanguage = this.ChangeLanguage.bind(this);
    }
    render() {
        const {shareList, blogList} = this.state;
        return <div className='nav-bar-container'>
        <Navbar className='nav-bar-fixed' fixed="top">
            <Container>
            <Navbar.Brand href="/" className='animate__animated animate__rubberBand'>
                {i18next.t("Olivia's Studio")}
            </Navbar.Brand>
            </Container>
            <Navbar.Collapse>
                <Nav>
                    <NavDropdown
                    id="nav-dropdown-dark-example"
                    title={i18next.t('Language')}
                    menuVariant="dark"
                    >
                    <NavDropdown.Item onClick={this.ChangeLanguage}>
                        中文
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={this.ChangeLanguage}>
                        English
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <Button className='nav-button'
            variant="outline-secondary" 
            onClick={this.toggleShow}>
            三
            </Button>
        </Navbar>
        <Offcanvas className="nav-dialog"
            show={this.state.show} onHide={this.handleClose}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title className="animate__animated animate__flipInX">
                {i18next.t('More About Me')}
            </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="animate__animated animate__zoomIn">
            <Badge bg="warning" text="dark">{i18next.t('Share Knowledge')}</Badge>    
            <ListGroup variant="flush">
                {
                    shareList.map((item,index) => {
                        return <ListGroup.Item 
                        key={index}
                        className="hover-underline-animation" >
                        <a href={item.url}>
                            {i18next.t(item.title)}
                        </a>
                    </ListGroup.Item>
                    })
                }
            </ListGroup>
            <Badge bg="info" text="dark">
                {i18next.t('Technology Blog')}
            </Badge>
            <ListGroup variant="flush">
            {
                blogList.map(item => {
                    return <ListGroup.Item className="hover-underline-animation" >
                        <a href={item.url}>
                        {i18next.t(item.title)}
                        </a>
                    </ListGroup.Item>
                })
            }
            </ListGroup>
            <Badge bg="success" text="light">
                {i18next.t('Contact Me')}
            </Badge>
            <br/><br/>
            {i18next.t('I will develop more lovely and amusing gizmos, due to')}
            <span className='c-yellow f-w-b'>
                {i18next.t('creation')}
            </span> 
            {i18next.t('truly brings')} 
            <span className="c-yellow f-w-b">
            {i18next.t('happiness')} 
            </span> {i18next.t('to me. If you have any ideas to share, you can contact me through')} <span className="c-yellow f-w-b">15652112068@163.com</span>.
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
    ChangeLanguage(e) {
        const text = e.target.innerText; 
        localStorage.setItem('lang', text === '中文' ? 'CN' : 'EN');
        window.location.reload();
    }
 }
 export default _Navbar;
 
 