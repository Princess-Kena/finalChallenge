import React, { Component } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

export default class Drop extends Component {
  handleSelect(e) {
    console.log(this.props);
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "15px",
        }}
      >
        <Dropdown onSelect={(e) => this.handleSelect(e)}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Filter by Region
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="africa">Africa</Dropdown.Item>
            <Dropdown.Item eventKey="northamerica">North America</Dropdown.Item>
            <Dropdown.Item eventKey="asia">Asia</Dropdown.Item>
            <Dropdown.Item eventKey="southamerica">South America</Dropdown.Item>
            <Dropdown.Item eventKey="antarctica">Antarctica</Dropdown.Item>
            <Dropdown.Item eventKey="europe">Europe</Dropdown.Item>
            <Dropdown.Item eventKey="oceania">Oceania</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}
