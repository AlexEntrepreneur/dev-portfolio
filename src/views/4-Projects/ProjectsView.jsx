import React from 'react';
import { Link } from 'react-router-dom';

function ProjectsView() {
  return (
    <>
      <h2>Notable Projects</h2>
      <Link to='/resume'>
        <button>↓</button>
      </Link>
    </>
  )
}

export default ProjectsView;