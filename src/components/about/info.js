import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { AboutContext } from '../../context/about/AboutContext';

const Container = styled.div`
  text-align: left;
  display: inline-block;
  margin: 10px auto;

  p {
    color: ${props => props.color ? props.color : 'var(--orange)'};
    font-size: 1.4rem;
    span {
      color: var(--gray);
      font-size: 1.3rem;

      &:hover {
        color: var(--white);
      }
    }
  }
`;

const Icons = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  a {
    color: var(--white);
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

  return (
    <Container color={color}>
      <p>Full Name<span>: Federico Minaya</span></p>
      <p>Age<span>: 16</span></p>
      <p>Email<span>: elfedeminaya@gmail.com</span></p>
      <p>Residence<span>: Argentina</span></p>
      <p>Description<span>: nothing</span></p>
      <Icons>
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