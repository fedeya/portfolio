import React from 'react';
import styled from '@emotion/styled';

import Project from './project';
import projects from '../../content/projects.json';

const Container = styled.div`
  width: 95%;
  margin: 0 auto;

  h1 {
    color: var(--orange);
    font-size: 3rem;
    text-align: center;
  }
`;

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function ProjectsContent() {
  return (
    <Container>
      <h1>Projects</h1>
      <ProjectList>
        {projects.projects.map(project => (
          <Project key={project.title} project={project} />
        ))}
      </ProjectList>
    </Container>
  );
}

export default ProjectsContent;
