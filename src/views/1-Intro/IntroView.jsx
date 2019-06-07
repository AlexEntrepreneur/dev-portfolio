import React from 'react';
import { Link } from 'react-router-dom';

function IntroView() {
  return (
    <div className="view intro">
      <h1>"Writing Good Code is a UX Problem."</h1>
      <p>Hello! I’m Alex, a designer turned fullstack web developer.</p>
      <Link to='/about'>About Me</Link>
      <Link to='/skills'>
        <button>↓</button>
      </Link>
    </div>
  );
}

export default IntroView;