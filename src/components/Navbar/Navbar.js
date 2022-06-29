/**
 * @file the navbar of homepage
 * @author jingxiangzheng
 */

import React from 'react';
import {Navbar, Nav, Container,Offcanvas, Button, ListGroup, Badge, NavDropdown} from 'react-bootstrap';
import './Navbar.css';
import i18next from 'i18next';
import {SHARES_LIST, BLOGS_LIST} from '../../utils/config';
class _Navbar extends React.Component {
constructor(props){
    super(props);
    this.state = {
        show: false,
        shareList: SHARES_LIST,
        blogList: BLOGS_LIST
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
            blogList.map((item,index) => {
                return <ListGroup.Item key={index}
                    className="hover-underline-animation" >
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
        <p className="bottom-tips">
            {i18next.t('I will develop more lovely and amusing gizmos, due to')}
            <span className='c-yellow f-w-b'>
                {i18next.t(' creation ')}
            </span> 
            {i18next.t('truly brings')} 
            <span className="c-yellow f-w-b">
            {i18next.t(' enormous happiness ')} 
            </span> {i18next.t('to me. If you have any ideas to share, you can contact me through')} <span className="c-yellow f-w-b">15652112068@163.com</span>.
        </p>
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

