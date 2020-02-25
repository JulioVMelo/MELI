import { createGlobalStyle } from 'styled-components';
import './reset.css';

const GlobalStyle = createGlobalStyle`

:root {
  font-size: 62.5%;
}

body {
  background-color: #eee;
  font-family: 'Montserrat', 'Helvetica neue', 'Lato', sans-serif;
}
`;

export default GlobalStyle;
