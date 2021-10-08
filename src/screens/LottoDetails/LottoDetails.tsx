import React, {FC} from 'react';
import styled from 'styled-components/native';
import {background, primary} from '../../config/color';
import {ScreenProps} from '../../config/interfaces';

const LottoDetails: FC<ScreenProps> = () => {
  return (
    <Container>
      <Title>Lotto Details Component</Title>
    </Container>
  );
};

export default LottoDetails;

// View components
const Container = styled.SafeAreaView`
  align-items: center;
  flex: 1;
  width: 100%;
  background: ${background.main};
`;

// Text Components
const Title = styled.Text`
  font-weight: bold;
  font-size: 30px;
  margin-top: 7%;
  color: ${primary.text};
`;
