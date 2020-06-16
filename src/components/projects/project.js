import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { ThemeContext } from '../../context/theme/ThemeContext';

const Card = styled.div`
  border-radius: 10px;
  background-color: ${props => props.dark ? '#383A3F' : '#F2F2F2'};
  margin: 1.5rem;
  width: 70%;

  h2 {
    padding: 1rem;
    color: var(--orange);
    text-align: center;
  }

  img {
    border-radius: 10px 10px 100% 100%;
    border: none;
    width: 100%;
    background-color: transparent;
    overflow: hidden;
    z-index: 1;
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    width: 30%;
  }
`;

const IconLink = styled.a`
  font-size: 3rem;
  text-align: center;
  color: ${props => props.dark ? 'var(--white)' : 'var(--black)'};
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
  margin: 0 auto;
  align-items: center;
`;

const TextContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Project({ project }) {

  const { dark } = useContext(ThemeContext);

  const { images } = useStaticQuery(graphql`
    query {
      images: allFile(filter: { relativeDirectory: {eq: "projects"} }) {
        nodes {
          name
          sharp: childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  const image = images.nodes.find(img => img.name === project.image);

  return (
    <Card dark={dark}>
      <Img alt={project.title} fluid={image.sharp.fluid} />
      <TextContent>
        <h2>{project.title}</h2>
        <Icons>
          {
            project.repo && (
              <IconLink dark={dark} href={project.repo} target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-github"></i>
              </IconLink>
            )
          }
          {
            project.link && (
              <IconLink dark={dark} href={project.link} target="_blank" rel="noopener noreferrer">
                <i className="bx bx-link"></i>
              </IconLink>
            )
          }
        </Icons>
      </TextContent>
    </Card>
  );
}

export default Project;