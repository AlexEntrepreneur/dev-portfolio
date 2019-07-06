import React from 'react';
import { Link } from 'react-router-dom';
import { View, HeadingText, Text, Button } from '../../components/~reusables/atoms/atoms';
import { small_space } from '../../components/~reusables/variables/spacing';

function IntroView() {
  return (
    <View vCenter hCenter>
      <HeadingText marginBottom={small_space}>"Writing Good Code is a UX Problem."</HeadingText>
      <Text>Hello! I’m Alex, a designer turned fullstack web developer.</Text>
      <Link to='/about'>About Me</Link>
      <Link to='/skills'>
        <Button>↓</Button>
      </Link>
    </View>
  );
}

export default IntroView;