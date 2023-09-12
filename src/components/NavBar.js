import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from '../assets/logo.png'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
  return (
    <div>
      <Navbar className={styles.NavBar} expand="md" fixed='top'>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} height='45' alt='logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <Nav.Link><i className='fas fa-home'></i>Home</Nav.Link>
            <Nav.Link><i className='fas fa-sign-in-alt'></i>Sign In</Nav.Link>
            <Nav.Link><i className='fas fa-sign-out'></i>Sign Up</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
