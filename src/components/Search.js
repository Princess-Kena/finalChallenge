import React, { Component } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { InputGroup, FormControl } from "react-bootstrap";

const Search = (props) => {
  return (
    <div>
      <div
        style={{
          marginTop: "30px",
          borderRadius: "4px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">
              <AiOutlineSearch />
            </InputGroup.Text>
            <FormControl
              placeholder={props.placeholder}
              onChange={props.handleChange}
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
      </div>
    </div>
  );
};
export default Search;
