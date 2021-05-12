import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button/index';

import { Container } from './styles';

const Main: React.FC = () => {

  const navigation = useNavigation();

  return (
    <Container>
      <Button
      onPress={ () => navigation.navigate('SignIn')}
      >
        Sair
      </Button>
    </Container>
  );
}

export default Main;