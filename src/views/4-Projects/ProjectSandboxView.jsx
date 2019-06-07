import React from 'react';

function ProjectSandboxView({ match }) {
  const { id } = match.params;
  return (
    <>
      <button>View Project Code</button>
    </>
  )
}

export default ProjectSandboxView;