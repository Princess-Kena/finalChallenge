import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";

export default class Drop extends Component {
  constructor() {
    super();

    this.state = {
      filtered_countries: [],
    };
  }

  componentDidMount() {
    this.setState({
      filtered_countries: this.props.allCountries,
    });
  }

  handleSelect(e) {
    this.props.setCountries(
      this.props.allCountries.filter((country) => {
        return country.continents[0].toLowerCase() == e;
      })
    );
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
            <Dropdown.Item eventKey="north america">
              North America
            </Dropdown.Item>
            <Dropdown.Item eventKey="asia">Asia</Dropdown.Item>
            <Dropdown.Item eventKey="south america">
              South America
            </Dropdown.Item>
            <Dropdown.Item eventKey="antarctica">Antarctica</Dropdown.Item>
            <Dropdown.Item eventKey="europe">Europe</Dropdown.Item>
            <Dropdown.Item eventKey="oceania">Oceania</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}
