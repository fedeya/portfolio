import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { AboutContext } from '../../context/about/AboutContext';

import skills from '../../content/skills.json';


const Container = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
`;

const Skill = styled.div`
  color: ${props => props.color ? props.color : 'var(--white)'};
  margin: 20px;
  cursor: pointer;

  i {
    font-size: 4rem;
  }

  h3 {
    font-size: 2rem;
  }
`;

function Skills() {

  const { setColor } = useContext(AboutContext);

  const changeColor = (color) => {
    if (color) {
      setColor(color);
    } else {
      setColor(null);
    }
  }

  return (
    <Container>
      {
        skills.content.map(skill => (
          <Skill color={skill.color} onClick={() => changeColor(skill.color)}>
            <i className={skill.logo}></i>
            <h3>{skill.name}</h3>
          </Skill>
        ))
      }
    </Container>
  );
}

export default Skills;