import React from 'react';
import {Container, Nav, Navbar, Stack,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import useAuth from '../hooks/useAuth';
import image from '../img/logo.png';
import './NavBar.css';

const NavBar = () => {
//   const {user,signOutUsingGoogle} = useAuth();
    return (
        <div>
        <Navbar className="bg-light" collapseOnSelect expand="lg">
          {/* container */}
          <Container>
          <Navbar.Brand href="/home">
                     <img
                        src={image}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {/* stack */}
            <Stack direction="horizontal" gap={3}>
            {/* <i class="fas fa-shopping-cart"></i> */}
                <NavLink to="/home" className="f-13" style={{color:"black"}}   activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}>Home</NavLink>
                <NavLink to="/doctors" className="f-13" style={{color:"black"}}   activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}>My Orders</NavLink>
                <NavLink to="/blogs" className="f-13" style={{color:"black"}}   activeStyle={{
                    fontWeight: "bold",
                  color: "black"
                }}>All Orders</NavLink>

                <NavLink to="/about" className="f-13" style={{color:"black"}}   activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}>Add a Service</NavLink>
                {/* <span>{user.displayName}</span> */}
                
                  {/* <NavLink to="" onClick={''} className="f-13" style={{color:"black"}} activeStyle={{
                    fontWeight:"bold",
                    color:"black"
                  }}>
                    <Button variant="dark" className="rounded-pill">LogOut</Button>
                  </NavLink> */}
                
                  <NavLink to="/login" className="f-13" style={{color:"black"}}   activeStyle={{
                  fontWeight: "bold",
                  color: "black"
                }}>Login</NavLink>
                
            </Stack>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
    );
};

export default NavBar;