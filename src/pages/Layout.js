// Layout.js
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

function Layout() {
  return (
    <div>
      <Navbar className='px-5' bg="dark" variant={"dark"} expand="lg">
        <Navbar.Brand className="brand-large" as={Link} to="/">
          SHINE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="navLink" as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <NavDropdown title="project" id="basic-nav-dropdown">
              <NavDropdown.Item href="test1">test1</NavDropdown.Item>
              <NavDropdown.Item href="test2">test2</NavDropdown.Item>
              <NavDropdown.Item href="test3">test3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="test4">test4</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Layout;