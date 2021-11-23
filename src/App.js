import React from "react";
import Router from "./Router";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Theme";
import { RiMoonLine } from "react-icons/ri";
import { Container, Navbar } from "react-bootstrap";
import { useState } from "react";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    console.log("clicked");
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Where in the world?</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <RiMoonLine onClick={() => themeToggler()} /> Dark Mode
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Router />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
