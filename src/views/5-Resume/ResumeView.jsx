import React from 'react';
import { Link } from 'react-router-dom';
import { View } from '../../components/~reusables/atoms/atoms';

function ResumeView() {
  return (
    <View hCenter>
      <h2>Resumé</h2>
      <Link to='/contact'>
        <button>↓</button>
      </Link>
    </View>
  )
}

export default ResumeView;