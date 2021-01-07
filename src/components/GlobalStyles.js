import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #1b1b1b;
  font-family: 'Inter', sans-serif;
  overflow-y: hidden;
}
a {
  font-size: 1.1rem
}
button {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1em 1.5rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5 ease;
    font-family: 'Inter', sans-serif;
    border-radius: 8px;
    &:hover {
      background-color: #23d997;
      color: white
    }
  }
  span {
      font-weight: bold;
      color: #23d997;
    }
    h2 {
      font-size: 3rem;
    }
`;

export default GlobalStyles;
