import { createGlobalStyle } from 'styled-components';
import { theme_dark, theme_secondary } from './variables/colors';

export const GlobalStyles = createGlobalStyle`
  * {
    ${props => (props.boxSizing ? `box-sizing: ${props.boxSizing};` : null) };
  }

  html {
    font-size: 62.5%;
    color: ${theme_secondary};
    background-color: ${theme_dark};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  a:-webkit-any-link {
    text-decoration: none;
    color: inherit;
  }
`