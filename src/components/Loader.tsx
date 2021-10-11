import React, {FC} from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import {primary} from '../config/color';

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => {
  return (
    <Container>
      <ActivityIndicator animating color={primary.main} size="large" />
    </Container>
  );
};

export default Loader;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-self: center;
`;
