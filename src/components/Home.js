import React, { Component } from "react";
import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import Cards from "./Cards";
import Search from "./Search";
import Drop from "./Drop";

// import {IoMoonOutline} from "react-icons/io"

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.setFiltered = this.setFiltered.bind(this);

    this.state = {
      allCountries: [],
      countries: [],
      filteredCountries: [],
      searchField: "",
    };
  }

  async fetchCountries() {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      this.setState({ countries: response.data, allCountries: response.data });
      this.setState({
        filteredCountries: this.state.countries.filter((country) => {
          if (
            country.name.common
              .toLowerCase()
              .includes(this.state.searchField.toLowerCase())
          ) {
            return country;
          }
        }),
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.fetchCountries();
  }

  setCountries(countries) {
    this.setState({ countries });
  }

  setFiltered(countries) {
    this.setState({ filteredCountries: countries });
  }

  render() {
    const { countries, searchField } = this.state;
    return (
      <div>
        {/* <Header /> */}
        <Search
          placeholder="Search for a country...."
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <Drop
          setCountries={this.setFiltered}
          allCountries={this.state.allCountries}
        />
        <Col>
          {/* {this.state.countries.map((c) => {
      return <h1>{c.name.common}</h1>
    })} */}
          <Cards countryData={this.state.filteredCountries} />
        </Col>
      </div>
    );
  }
}
