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

  body {
    background-color: ${({ theme }) => theme.COLORS.BLUE_700};
    font-family: 'Mulish', sans-serif;
  }
`;
