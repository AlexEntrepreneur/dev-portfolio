import React from 'react';
import { Link } from 'react-router-dom';

function ResumeView() {
  return (
    <>
      <h2>Resumé</h2>
      <Link to='/contact'>
        <button>↓</button>
      </Link>
    </>
  )
}

export default ResumeView;