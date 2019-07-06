import React from 'react';
import { View } from '../../components/~reusables/atoms/atoms';

function ProjectSandboxView({ match }) {
  const { id } = match.params;
  return (
    <View hCenter>
      <p>Project {id}</p>
      <button>View Project Code</button>
    </View>
  )
}

export default ProjectSandboxView;