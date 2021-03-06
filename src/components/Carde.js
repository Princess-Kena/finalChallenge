import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Carde extends Component {
  render() {
    return (
      <Col md="3">
        <div className="cards">
          <Link
            as
            Card
            to={{ pathname: "/countryDetails", state: this.props.countryInfo }}
          >
            <Card.Img
              variant="top"
              src={this.props.countryInfo.flags.svg}
              alt="Image"
            />
            <Card.Body>
              <Card.Title>{this.props.countryInfo.name.common}</Card.Title>
              <Card.Text>
                Population:{this.props.countryInfo.population}
              </Card.Text>
              <Card.Text>Region:{this.props.countryInfo.region}</Card.Text>
              <Card.Text>Capital:{this.props.countryInfo.capital}</Card.Text>
            </Card.Body>
          </Link>
        </div>
      </Col>
    );
  }
}
