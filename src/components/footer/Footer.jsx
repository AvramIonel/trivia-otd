import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark" fixed="bottom">
      <Container fluid>
        <Navbar.Brand>
          App created using &nbsp;
          <a href="https://opentdb.com/" className="header-small-info">
            {""}
            Open Trivia Database
          </a>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Navbar.Brand href="https://github.com/AvramIonel/trivia-otd.git">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </Navbar.Brand>
          <Navbar.Brand href="https://www.linkedin.com/in/ionel-florin-avram-94a2715b">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </Navbar.Brand>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
