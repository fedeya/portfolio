import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { useWindowWidth } from '@react-hook/window-size';

import styled from '@emotion/styled';

const Nav = styled.nav`
  background-color: var(--dark);
  display: flex;
  flex-direction: ${props => props.opened ? 'column' : 'right'};
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 0;
  position: ${props => props.opened ? 'absolute' : 'sticky'};
  height: ${props => props.opened ? '100%' : 'auto'};
  width: ${props => props.opened ? '100%' : 'auto'};
  top: 0;

  ul {
    display: ${props => props.opened ? 'flex' : 'none'};
    list-style: none;
    flex-direction: ${props => props.opened ? 'column' : 'row'};
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: ${props => props.opened ? 'space-around' : 'center'};
    margin-right: 20px;
    font-size: ${props => props.opened ? '30px': '19px'};

    li {
      margin-right: 10px;

      &:last-of-type {
        margin-right: 0;
      }
    }

    @media screen and (min-width: 768px) {
      display: flex;
      position: sticky;
      top: 0;
    }
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--gray);

  &.active {
    color: var(--orange);
  }
`;

const NavBranch = styled(Link)`
  text-decoration: none;
  color: var(--orange);
  font-size: 59px;
  font-family: 'Roboto Slab', serif;

  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`;

const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 3rem;
  outline: none;
  color: var(--gray);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

function Header() {

  const [opened, setOpened] = useState(false);
  const width = useWindowWidth();

  useEffect(() => {
    if(width >= 768 && opened) {
      setOpened(false);
    }
  }, [width])

  const toggle = () => setOpened(!opened);

  return (
    <header>
      <Nav opened={opened}>
        <Container>
          <NavBranch to="/">FM</NavBranch>
          <MenuButton onClick={toggle}>
            <i className={!opened ? 'bx bx-menu-alt-right' : 'bx bx-x'}></i>
          </MenuButton>
        </Container>
        <ul>
          <li>
            <NavLink activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </Nav>
    </header>
  );
}

export default Header;