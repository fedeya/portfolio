import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Button from '../ui/button';

const Container = styled.div`
  /* background-color: var(--dark); */
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 30px;
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
  color: var(--white);
  justify-self: flex-start;

  span.color {
    color: var(--orange);
  }

  span.block {
    display: block;
  }
`;

const Image = styled(Img)`
  border-radius: 50%;
  clip-path: polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%);
  z-index: -1;

  @media screen and (min-width: 768px) {
    order: 2;
    margin-left: 30px;
  }
`;

function HomeContent() {

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
    <>
      <Container>
        <Image alt="Me" fixed={image.sharp.fixed} />
        <Column>
          <Title>
            <span className="block">
              I’m <span className="color">Federico Minaya</span>.
            </span>
            <span className="color block">Frontend Developer</span>
          </Title>
          <Button>
            Next <Icon className="bx bx-right-arrow-alt"></Icon>
          </Button>
        </Column>
      </Container>
    </>
  );
}

export default HomeContent;