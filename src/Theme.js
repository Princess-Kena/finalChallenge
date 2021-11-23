import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  fontColor: "#000",
  body: "#fff",
};
export const darkTheme = {
  fontColor: "#fff",
  body: "#000",
};

export const GlobalStyles = createGlobalStyle`
    
body{
    background-color :${(props) => props.theme.body}
}

`;
