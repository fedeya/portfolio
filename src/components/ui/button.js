import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Button = styled.button`
  background-color: var(--orange);
  font-family: 'Roboto Slab', serif;
  text-align: center;
  border-radius: 10px;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  font-size: 20px;
  width: 181px;
  height: 64px;
  outline: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 500ms ease;
  color: var(--dark);

  &:hover {
    background-color: transparent;
    border: 1px solid var(--orange);
    color: var(--orange);
  }
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  background-color: var(--orange);
  font-family: 'Roboto Slab', serif;
  text-align: center;
  border-radius: 10px;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  font-size: 20px;
  width: 181px;
  height: 64px;
  outline: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 500ms ease;
  color: var(--dark);

  &:hover {
    background-color: var(--dark);
    border: 1px solid var(--orange);
    color: var(--orange);
  }
`;

export default Button;
