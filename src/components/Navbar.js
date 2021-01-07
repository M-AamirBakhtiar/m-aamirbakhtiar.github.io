import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <h1>
        <a id="logo" href="#home">
          Aamir Bakhtiar
        </a>
      </h1>
      <ul>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  min-height: 10vh;
  display: flex;
  padding: 1em 5em;
  align-items: center;
  justify-content: space-between;
  background-color: #282828;
  position: sticky;
  top: 0;
  left: 0;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 5em;
  }
  #logo {
    font-size: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }
`;

export default Navbar;
