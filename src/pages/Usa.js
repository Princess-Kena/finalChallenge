import React, { Component } from 'react'
import {Col, Dropdown, Navbar, InputGroup, FormControl, Container } from 'react-bootstrap'
import { AiOutlineSearch } from "react-icons/ai";
import "../Home.css"
 import {BiArrowBack} from "react-icons/bi"
 import usa from "../images/usa.png"
 import { RiMoonLine } from 'react-icons/ri';

export default class Usa extends Component {
    render() {
        return (
          <div>
          <div className="Navbar">
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Where in the world?</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text> < RiMoonLine/>Dark Mode</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>

   <div style={{height: "40px",width: "90px", backgroundColor:"grey", borderRadius:"4px", marginTop:"70px", marginBottom:"50px"}}>
<BiArrowBack/>
<text>Back</text>
   </div>

   <div style={{display:"flex", flexDirection:"row"}}>
   <Col md="6">
  <img src={usa} alt="Germany" height={300} width={400} />
  </Col>
  <Col  md="6">
 <div style={{display:"flex", flexDirection:"row", textAlign:"start"}}>
   <Col md="6"> 
   <h3>Germany</h3>
     <text>Native Name:</text>
     <br/>
     <text>Populatio: 1million</text>
     <br/>
     <text>Region: Europe</text>
     <br/>
     <text>Sub Region: Central Europe</text>
     <br/>
     <text>Capital: Berlin</text>
   </Col>
   <Col md="6"> 
   
   <text>Top Level Domain: be</text>
     <br/>
     <text>Currency: Euro</text>
     <br/>
     <text>Languages: German</text>
   </Col>
 </div>
 <div style={{display:"flex" , flexDirection:"row",  marginTop:"50px"}}>  
   <text>Border Countries:</text>
   <div style={{width:"70px", height:"20px", backgroundColor:"darkkhaki", marginRight:"7px",marginLeft:"20px", borderRadius:"2px"}}>
     <text>Autria</text>
   </div>
   <div style={{width:"70px", height:"20px", backgroundColor:"blue", marginRight:"7px", borderRadius:"2px"}}>
     <text>France</text>
   </div>
   <div style={{width:"70px", height:"20px", backgroundColor:"blue", marginRight:"7px", borderRadius:"2px"}}>
     <text>Czech</text>
   </div>
    </div>
  </Col>
  </div>

  
  

   
      </div>
        )
    }
}
