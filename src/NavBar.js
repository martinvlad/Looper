import React, { Component } from 'react'
import {Navbar, Nav } from 'react-bootstrap'
import './NavBar.css';
class NavBar extends Component {
    render() {
        return (
            <div className="all">
                <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand  ><p className="font">React Practice</p></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>

            </div>
        )
    }
}
export default NavBar;