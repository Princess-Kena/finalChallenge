import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { InputGroup, FormControl } from "react-bootstrap";

const Search = (props) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);

    props.setCountries(
      props.data.filter((country) => {
        if (country.name.common.toLowerCase().includes(query.toLowerCase()))
          return country;
      })
    );
  };

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
              onChange={handleChange}
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
