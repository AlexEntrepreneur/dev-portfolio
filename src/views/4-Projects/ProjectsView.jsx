import React from 'react';
import { Link } from 'react-router-dom';
import { View } from '../../components/~reusables/atoms/atoms';

function ProjectsView() {
  return (
    <View hCenter>
      <h2>Notable Projects</h2>
      <Link to='/resume'>
        <button>↓</button>
      </Link>
    </View>
  )
}

export default ProjectsView;