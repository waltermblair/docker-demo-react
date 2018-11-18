import {Navbar} from "react-bootstrap";
import React from "react";

export default class NavInstance extends React.Component {
  render(){
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Docker Demo
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    )
  }
}