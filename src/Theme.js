import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  fontColor: "hsl(200, 15%, 8%)",
  body: "hsl(0, 0%, 100%)",
};
export const darkTheme = {
  fontColor: "hsl(0, 0%, 100%)",
  body: "hsl(200, 15%, 8%)",
};

export const GlobalStyles = createGlobalStyle`
    
body{
    background-color :${(props) => props.theme.body}
}

`;
