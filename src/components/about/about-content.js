import React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';

import Info from './info';
import Skills from './skills';

import { AboutContext } from '../../context/about/AboutContext';


const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  color: var(--white);
  text-align: center;
`;

const Title = styled.h1`
  color: ${props => props.color ? props.color : 'var(--orange)'};
  font-size: 3rem;
`;

const SubTitle = styled.h2`
  color: ${props => props.color ? props.color : 'var(--orange)'};
  font-size: 2rem;
`;

function AboutContent() {

  const { color, setColor } = useContext(AboutContext);

  useEffect(() => {
    return () => setColor(null); // eslint-disable-next-line
  }, [])

  return (
    <Container>
      <Title color={color}>About</Title>
      <SubTitle color={color}>Info</SubTitle>
      <Info />
      <SubTitle color={color}>Skills</SubTitle>
      <Skills />
    </Container>
  );
}

export default AboutContent;