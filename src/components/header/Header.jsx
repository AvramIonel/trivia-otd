import React from 'react'
import { Navbar, Container } from "react-bootstrap";


const Header = () => {
  return (
  <Navbar variant='dark' bg='dark' fixed='top'>
  <Container fluid>
    <Navbar.Brand href="/">Trivia APP</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Player name: <a>{localStorage.getItem("playerValueInLocalStorage")}</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header
