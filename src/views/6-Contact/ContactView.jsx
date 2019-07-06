import React from 'react';
import { Link } from 'react-router-dom';
import { View, HeadingText, Text, Container, Button, APrimary, A, Section } from '../../components/~reusables/atoms/atoms';
import { small_space } from '../../components/~reusables/variables/spacing';
import { theme_primary } from '../../components/~reusables/variables/colors';

function ContactView() {
  return (
    <View hCenter>
      <HeadingText>Contact</HeadingText>
      <Section>
        <Text>Pellentesque habitant morbi tristique senectus.</Text>
      </Section>
      
      <A href="mailto:hi@email.com" noUnderline>
        <Container column>
          <Button marginBottom={small_space}>Icon</Button>
          <Text color={theme_primary} underline>hi@email.com</Text>
        </Container>
      </A>

      <Container>
        <A href="https://github.com/AlexEntrepreneur" target="_blank" noUnderline>
          <Container column>
            <Button marginBottom={small_space}>Icon</Button>
            <Text underline>GitHub</Text>
          </Container>
        </A>
        <A href="https://twitter.com/AlexEntrprnr" target="_blank" noUnderline>
          <Container column>
            <Button marginBottom={small_space}>Icon</Button>
            <Text underline>Twitter</Text>
          </Container>
        </A>
        <A href="https://linkedin.com/" target="_blank" noUnderline>
          <Container column>
            <Button marginBottom={small_space}>Icon</Button>
            <Text underline>LinkedIn</Text>
          </Container>
        </A>
      </Container>
      <Link to='/'>
        Home
      </Link>
    </View>
  )
}

export default ContactView;