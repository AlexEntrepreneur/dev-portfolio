import React from 'react';
import { Link } from 'react-router-dom';
import { View } from '../../components/~reusables/atoms/atoms';

function SkillsView() {
  return (
    <View hCenter>
      <h2>Skills Stack</h2>
      <Link to='/projects'>
        <button>↓</button>
      </Link>
    </View>
  )
}

export default SkillsView;