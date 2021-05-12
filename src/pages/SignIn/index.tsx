import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button/index';

import { Container, Title } from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    style={{ flex: 1 }}
    enabled
    >
      <Container>
        <Title>SignIn</Title>

        <Input name="email" placeholder="Email" />
        <Input secureTextEntry={true} name="password" placeholder="Password" />

        <Button
        onPress={() => navigation.navigate('Main')}
        >
          Entrar
        </Button>
      </Container>
    </KeyboardAvoidingView>
  );
}

export default SignIn;