import React from 'react';
import {Navbar,Container, Nav,NavDropdown} from 'react-bootstrap'

import {
    BrowserRouter as Router,
    NavLink
  } from "react-router-dom";
import '../App.css';
import '../CSS/NavBarpage.css'; 

const Navbarpage = () => {
    return (
        <>
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        
        <NavDropdown className="nav_container_padding" title="Vedio Editing" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Vedio Editing</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Vedio Clipping</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Corporate Vedio</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Film Re-editing</NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        
        <NavDropdown className="nav_container_padding" title="Audio Editing" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        
        <NavDropdown className="nav_container_padding" title="Storyboard" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        
        <NavDropdown className="nav_container_padding" title="Animation" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        
        <NavDropdown className="nav_container_padding" title="Portfolio" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        
      </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
        </>
    )
}

export default Navbarpage;