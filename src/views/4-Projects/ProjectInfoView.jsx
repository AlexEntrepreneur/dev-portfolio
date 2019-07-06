import React from 'react';
import { Link } from 'react-router-dom';
import { View } from '../../components/~reusables/atoms/atoms';

function ProjectInfoView(props) {
  const { id } = props.match.params;
  return (
    <View hCenter>
      <h2>Project { id }</h2>
      <Link to={`${id}/sandbox`}>View Project</Link>
    </View>
  )
}

export default ProjectInfoView;