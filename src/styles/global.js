import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;
  }

  html, body, input {
    font-family: 'Mulish', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BLUE_700};
  }
`;
