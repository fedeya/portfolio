import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { AboutContext } from '../../context/about/AboutContext';
import { ThemeContext } from '../../context/theme/ThemeContext';

const Container = styled.div`
  text-align: center;
  display: inline-block;
  margin: 10px auto;

  p {
    color: ${props => (props.color ? props.color : 'var(--orange)')};
    font-size: 1.4rem;
    width: 100%;
    overflow-wrap: break-word;
  }

  span {
    color: ${props => (props.dark ? 'var(--gray)' : 'var(--black)')};
    font-size: 1.3rem;
    width: 100%;
    overflow-wrap: break-word;
  }
`;

const Icons = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: ${props => (props.dark ? 'var(--white)' : 'var(--black)')};
    transition: color 200ms ease;

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
      <p>
        Full Name<span>: Federico Minaya</span>
      </p>
      <p>
        Residence<span>: Argentina</span>
      </p>
      <p>Description</p>
      <span>
        I am a self-taught programmer from Argentina, Buenos Aires, Necochea.
        <br />
        I am very passionate about working with new technologies, I enjoy
        creating high performance applications both in Backend and Frontend.
        <br />
        I contribute to Open Source projects and programming communities helping
        other users.
        <br />
        In the future I would like to be able to create my own business.
      </span>
      <Icons dark={dark}>
        <a
          href="https://www.github.com/Fedeya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/federico-minaya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-linkedin-square"></i>
        </a>
      </Icons>
    </Container>
  );
}

export default Info;
