import React from 'react';
import { Link } from 'react-router-dom';

function SkillsView() {
  return (
    <>
      <h2>Skills Stack</h2>
      <Link to='/projects'>
        <button>↓</button>
      </Link>
    </>
  )
}

export default SkillsView;