import React, { Fragment } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import logo from './logo.svg';

import Header from '../Header';

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

const StyledAppContainer = styled.div`
  text-align: center;
`;

const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const StyledLink = styled.a`
  color: #61dafb;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ReactLogo = styled.img`
  animation: ${rotate} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

const App = () => (
  <Fragment>
    <GlobalStyle />
    <StyledAppContainer>
      <Header />
      <StyledHeader>
        <ReactLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <StyledLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </StyledLink>
      </StyledHeader>
    </StyledAppContainer>
  </Fragment>
);

export default App;
