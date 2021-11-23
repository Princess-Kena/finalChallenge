import React, { Component } from "react";
import Carde from "./Carde";
import { Container , Row} from "react-bootstrap";



const Cards =(props) =>{
  return(
    <Container>
      <Row>
        {
          props.countryData.map((country)=>{
            return<Carde countryInfo ={country}/>
          })
        }
      </Row>
    </Container>
  )
}
export default Cards;
