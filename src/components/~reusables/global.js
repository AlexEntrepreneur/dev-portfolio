import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    ${props => (props.boxSizing ? `box-sizing: ${props.boxSizing};` : null) };
  }
`