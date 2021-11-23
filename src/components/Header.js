import React, { Component } from "react";
import { Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { RiMoonLine } from "react-icons/ri";

export default class Header extends Component {
  render() {
    return (
      <div className="Navbar">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Where in the world?</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <RiMoonLine /> Dark Mode
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
