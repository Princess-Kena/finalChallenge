import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import Cards from "./Cards";
import Search from "./Search";
import Drop from "./Drop";

const Home = (props) => {
  const [data, setData] = useState([]);
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    try {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      setData(data);
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div>
      <Search data={data} setCountries={setCountries} />
      <Drop setCountries={setCountries} allCountries={data} />
      <Col>
        <Cards countryData={countries} />
      </Col>
    </div>
  );
};

export default Home;
