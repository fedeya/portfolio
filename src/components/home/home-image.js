import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

function HomeImage() {

  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "me.jpeg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  console.log(image);

  return (
    <Img fluid={image.sharp.fluid} />
  );
}

export default HomeImage;