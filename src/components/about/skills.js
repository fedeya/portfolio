import React from 'react';
import styled from '@emotion/styled';

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
  color: ${props => (props.color ? props.color : 'var(--white)')};
  margin: 20px;

  i {
    font-size: 4rem;
  }

  h3 {
    font-size: 2rem;
  }
`;

function Skills() {
  return (
    <Container>
      {skills.content.map(skill => (
        <Skill key={skill.name} color={skill.color}>
          <i className={skill.logo}></i>
          <h3>{skill.name}</h3>
        </Skill>
      ))}
    </Container>
  );
}

export default Skills;
