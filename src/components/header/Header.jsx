import React from 'react'
import { Navbar, Container } from "react-bootstrap";


const Header = () => {
  return (
  //   <Navbar expand="lg" variant="light" bg="dark" fixed="top">
  //   <Navbar.Brand>Trivia Tests</Navbar.Brand>
  //   <Navbar.Toggle />
  //   <Navbar.Collapse className="justify-content-end">
  //     <Navbar.Text>
  //       Signed in as: <a href="#login">AIF</a>
  //     </Navbar.Text>
  //   </Navbar.Collapse>
  // </Navbar>
  <Navbar variant='dark' bg='dark' fixed='top'>
  <Container fluid>
    <Navbar.Brand href="#home">Trivia APP</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        Signed in as: <a href="#login">AIF</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header
