import React from "react";
import { Col } from "react-bootstrap";

import { BiArrowBack } from "react-icons/bi";

const CountryDetails = (props) => {
  let countryDetails = props.location.state;
  let currency;
  let currencies = countryDetails.currencies;
  for (const prop in currencies) {
    currency = currencies[prop];
  }

  let nativeName;
  let nativeNames = countryDetails.name.nativeName;
  for (const prop in nativeNames) {
    nativeName = nativeNames[prop];
  }
  let language;
  let languages = countryDetails.languages;
  for (const prop in languages) {
    language = languages[prop];
  }

  console.log(countryDetails);

  const borders = () => {
    if (countryDetails.borders) {
      return (
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "50px" }}
        >
          <text>Border Countries:</text>
          {countryDetails.borders.map((border) => (
            <div
              style={{
                width: "70px",
                height: "25px",
                backgroundColor: "hsl(209, 23%, 22%)",
                marginRight: "5px",
                marginLeft: "15px",
                borderRadius: "3px",
                textAlign: "center",
              }}
            >
              <text>{border}</text>
            </div>
          ))}
        </div>
      );
    }
  };

  console.log(countryDetails);
  return (
    <div>
      <div
        style={{
          borderRadius: "4px",
          marginTop: "70px",
          marginBottom: "50px",
          flexDirection: "row",
        }}
      >
        <a href="/">
          <button
            style={{
              display: "flex",
              alignSelf: "flex-start",
              marginLeft: "50px",
            }}
          >
            <BiArrowBack />
            <text>Back</text>
          </button>
        </a>
      </div>

      <div style={{ display: "flex", flexDirection: "row", margin: "50px" }}>
        <Col md="6">
          <img
            src={countryDetails.flags.png}
            alt="Germany"
            height={400}
            width={500}
          />
        </Col>
        <Col md="6">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              textAlign: "start",
            }}
          >
            <Col md="6">
              <h3>{countryDetails.name.official}</h3>
              <text>Native Name:{nativeName.official}</text>
              <br />
              <text>Population: {countryDetails.population}</text>
              <br />
              <text>Region:{countryDetails.region}</text>
              <br />
              <text>Sub Region: {countryDetails.subregion}</text>
              <br />
              <text>Capital: {countryDetails.capital}</text>
            </Col>
            <Col md="6">
              <text>Top Level Domain: be</text>
              <br />
              <text>Currency: {currency.name}</text>
              <br />
              <text>Languages: {language}</text>
            </Col>
          </div>

          {borders()}
        </Col>
      </div>
    </div>
  );
};
export default CountryDetails;
