import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from '../Header';
import TechnicalSkills from '../TechnicalSkills';

// DARK RED #7E1F27 RED #B4202E BLACK #010400 GREY #30332E WHITE #FFFFFF

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Header />
    <TechnicalSkills />
  </Fragment>
);

export default App;
