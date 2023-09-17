import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


const Headers = () => {

  const auth = localStorage.getItem('user')
  const data = auth ? JSON.parse(auth).role : null




  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <NavLink to="#" className="navbar-brand">
          HRM System
        </NavLink>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
          </Nav>
          <Nav className="ml-auto">
            <NavLink to="/registration" className="nav-link" activeClassName="active">
              Registration
            </NavLink>
            {
              auth ?
                <button onClick={() => localStorage.clear('user')}>Logout</button>
                :
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="registration">Login</NavLink>
                </li>

            }

            {/* 
            <NavLink to="/login" className="nav-link" activeClassName="active">
              Login
            </NavLink> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Headers;