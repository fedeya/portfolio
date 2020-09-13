import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { ButtonLink } from '../ui/button';

import { ThemeContext } from '../../context/theme/ThemeContext';

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  height: 86vh;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.i`
  font-size: 30px;
`;

const Title = styled.h1`
  color: ${props => (props.dark ? 'var(--white)' : 'var(--black)')};
  justify-self: flex-start;
  text-align: center;

  span.color {
    color: var(--orange);
  }

  span.block {
    display: block;
  }

  @media screen and (min-width: 768px) {
    font-size: 2.1rem;
  }

  @media screen and (min-width: 1200px) {
    font-size: 3rem;
  }
`;

const Image = styled(Img)`
  border-radius: 50%;
  z-index: 1;

  @media screen and (min-width: 768px) {
    order: 2;
    margin-left: 30px;
  }
`;

function HomeContent() {
  const { dark } = useContext(ThemeContext);

  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "me.jpeg" }) {
        sharp: childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Container>
      <Image alt="Me" fixed={image.sharp.fixed} />
      <Column>
        <Title dark={dark}>
          <span className="block">
            I’m <span className="color">Federico Minaya</span>.
          </span>
          <span className="color block">Full Stack Developer</span>
        </Title>
        <ButtonLink aria-label="Next" to="/about">
          Next <Icon className="bx bx-right-arrow-alt"></Icon>
        </ButtonLink>
      </Column>
    </Container>
  );
}

export default HomeContent;
