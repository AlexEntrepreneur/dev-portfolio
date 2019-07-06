import React from 'react';
import { Link } from 'react-router-dom';
import { View } from '../../components/~reusables/atoms/atoms';

function IntroView() {
  return (
    <View vCenter hCenter>
      <h1>"Writing Good Code is a UX Problem."</h1>
      <p>Hello! I’m Alex, a designer turned fullstack web developer.</p>
      <Link to='/about'>About Me</Link>
      <Link to='/skills'>
        <button>↓</button>
      </Link>
    </View>
  );
}

export default IntroView;