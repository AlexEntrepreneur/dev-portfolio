import React from 'react';
import { Link } from 'react-router-dom';

function ProjectInfoView(props) {
  const { id } = props.match.params;
  return (
    <>
      <h2>Project { id }</h2>
    <Link to={`${id}/sandbox`}>View Project</Link>
    </>
  )
}

export default ProjectInfoView;