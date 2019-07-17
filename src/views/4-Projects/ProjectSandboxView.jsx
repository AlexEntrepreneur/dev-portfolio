import React from 'react';
import styled from 'styled-components';
import { View, Button, Card } from '../../components/~reusables/atoms/atoms';

function ProjectSandboxView() {
  return (
    <View hCenter>
      <ProjectFrame>
        <iframe src="https://tipseaseapp.netlify.com/"></iframe>
      </ProjectFrame>
      {/* <Button>View Project Code</Button> */}
    </View>
  )
}

const ProjectFrame = styled(Card)`
  width: 100%;
  height: 100vh;
  padding: 3px;

  & iframe {
    width: 100%;
    height: 100%;
    border: unset;
  }
`;

export default ProjectSandboxView;