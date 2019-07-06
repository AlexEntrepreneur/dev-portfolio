import React from 'react';
import { Link } from 'react-router-dom';
import { View } from '../../components/~reusables/atoms/atoms';

function ContactView() {
  return (
    <View hCenter>
      <h2>Contact</h2>
      <Link to='/'>
        Home
      </Link>
    </View>
  )
}

export default ContactView;