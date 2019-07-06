import React from 'react';
import { Link } from 'react-router-dom';
import { View, Container } from '../../components/~reusables/atoms/atoms';
import { SkillCard } from '../../components/~reusables/molecules/SkillCard';
import { small_space } from '../../components/~reusables/variables/spacing';

function SkillsView() {
  return (
    <View hCenter>
      <h2>Skills Stack</h2>
      <Container fullWidth column padding={small_space}>
        <SkillCard hCenter>
          UX
        </SkillCard>
        <SkillCard hCenter>
          <div className="title">UI Design</div>
          ...
        </SkillCard>
        <Container>
          <SkillCard fullWidth hCenter>
            <div className="title">Frontend Web</div>
            ...
          </SkillCard>
          <SkillCard hCenter width="30%">
            <div className="title">Tooling</div>
            ...
          </SkillCard>
        </Container>
        <Container>
          <SkillCard fullWidth hCenter>
            <div className="title">Backend</div>
            ...
          </SkillCard>
          <SkillCard hCenter width="30%">
            <div className="title">Tooling</div>
            ...
          </SkillCard>
        </Container>
        <SkillCard hCenter>
          <div className="title">Data Storage</div>
          ...
        </SkillCard>
        <SkillCard hCenter>
          <div className="title">Computer Science</div>
          ...
        </SkillCard>
      </Container>
      <Link to='/projects'>
        <button>↓</button>
      </Link>
    </View>
  )
}

export default SkillsView;