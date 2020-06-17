import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'gatsby';
import { useWindowWidth } from '@react-hook/window-size';

import styled from '@emotion/styled';

import { AboutContext } from '../../context/about/AboutContext';
import { ThemeContext } from '../../context/theme/ThemeContext';

const Nav = styled.nav`
  background-color: var(--dark);
  display: flex;
  flex-direction: ${props => props.opened ? 'column' : 'right'};
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 0;
  position: ${props => props.opened ? 'fixed' : 'sticky'};
  height: ${props => props.opened ? '100%' : 'auto'};
  width: ${props => props.opened ? '100%' : 'auto'};
  top: 0px;
  left: 0px;
  z-index: 10;

  @keyframes open {
    0% {
      transform: translateY(-200px);
    }

    100% {
      transform: translateY(0);
    }
  }

  ul {
    display: ${props => props.opened ? 'flex' : 'none'};
    list-style: none;
    flex-direction: ${props => props.opened ? 'column' : 'row'};
    height: ${props => props.opened ? '80%' : '90%'};
    width: 100%;
    align-items: center;
    margin: 0 1rem;
    justify-content: ${props => props.opened ? 'space-around' : 'flex-end'};
    font-size: ${props => props.opened ? '30px': '19px'};
    ${props => props.opened && 'animation: open 1s ease 1'};

    li {
      margin: 0 1.3rem;
    }

    @media screen and (min-width: 768px) {
      display: flex;
      position: sticky;
      align-items: flex-start;
      top: 10;
    }
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--gray);
  
  @keyframes appear {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  &.active {
    color: ${props => props.color ? props.color : 'var(--orange)'};
    border-bottom: 1px solid ${props => props.color ? props.color : 'var(--orange)'};;
    animation: appear 500ms ease;
  }

  &:hover {
    color: ${props => props.color ? props.color : 'var(--orange)'};
  }
`;

const NavBranch = styled(Link)`
  text-decoration: none;
  color: ${props => props.color ? props.color : 'var(--orange)'};
  font-size: 3rem;
  font-family: 'Roboto Slab', serif;

  @media screen and (min-width: 768px) {
    margin: 0px 1.5rem;
  }
`;

const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 3rem;
  outline: none;
  color: var(--gray);
  cursor: pointer;
  
  @keyframes open {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(320deg);
    }

    100% {
      transform: scale(90deg);
    }
  }

  i {
    animation: ${props => props.opened ? 'rotate' : 'open'} 500ms ease;
  }
  

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const DarkModeButton = styled.button`
  font-size: 2.5rem;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  i {
    color: ${props => !props.dark ? 'var(--black)' : 'var(--gray)'};
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

function Header() {

  const { color } = useContext(AboutContext);
  const { dark, setDark } = useContext(ThemeContext);

  const [opened, setOpened] = useState(false);
  const width = useWindowWidth();

  useEffect(() => {
    if(width >= 768 && opened) {
      setOpened(false);
    }
  }, [width, opened])

  const toggle = () => setOpened(!opened);
  const toggleTheme = () => setDark(!dark);

  return (
    <header>
      <Nav opened={opened}>
        <Container>
          <NavBranch color={color} to="/">FM</NavBranch>
          <DarkModeButton aria-label="Change Color Theme" dark={dark} onClick={toggleTheme}>
            {
              dark ? (<i className="bx bxs-sun"></i>)
              : (<i className="bx bxs-moon"></i>)
            }
          </DarkModeButton>
          <MenuButton aria-label="Menu" opened={opened} onClick={toggle}>
            {
              !opened ? ( <i className="bx bx-menu-alt-right"></i> ) 
              : ( <i className="bx bx-x"></i> )
            }
          </MenuButton>
        </Container>
        <ul>
          <li>
            <NavLink color={color} activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink color={color} activeClassName="active" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink color={color} activeClassName="active" to="/projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink color={color} activeClassName="active" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </Nav>
    </header>
  );
}

export default Header;