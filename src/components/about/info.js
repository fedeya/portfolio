import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { AboutContext } from '../../context/about/AboutContext';
import { ThemeContext } from '../../context/theme/ThemeContext';

const Container = styled.div`
  text-align: left;
  display: inline-block;
  margin: 10px auto;

  p {
    color: ${props => props.color ? props.color : 'var(--orange)'};
    font-size: 1.4rem;
    span {
      color: ${props => props.dark ? 'var(--gray)' : 'var(--black)'};
      font-size: 1.3rem;
    }
  }
`;

const Icons = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  a {
    color: ${props => props.dark ? 'var(--white)' : 'var(--black)'};
    &:hover {
      color: var(--orange);
    }
  }

  i {
    font-size: 4rem;
    &:first-of-type {
      margin-right: 30px;
    }
  }
`;

function Info() {

  const { color } = useContext(AboutContext);
  const { dark } = useContext(ThemeContext);

  return (
    <Container color={color} dark={dark}>
      <p>Full Name<span>: Federico Minaya</span></p>
      <p>Age<span>: 16</span></p>
      <p>Residence<span>: Argentina</span></p>
      <p>Description<span>: i love work with new and modern technologies using the best practices</span></p>
      <Icons dark={dark}>
        <a href="https://www.github.com/Fedeya" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/federico-minaya/" target="_blank" rel="noopener noreferrer">
          <i className="bx bxl-linkedin-square"></i>
        </a>
      </Icons>
    </Container>
  );
}

export default Info;