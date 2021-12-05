import React from 'react'
import { Navbar, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark" fixed="bottom">
      <Container>
        <Navbar.Brand>
          App created using {" "}
          &nbsp;<a href="https://opentdb.com/" className="header-small-info">
            {""}
             Open Trivia Database
          </a>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Footer
