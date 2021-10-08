import moment from 'moment';
import React, {FC} from 'react';
import styled from 'styled-components/native';
import {background, primary} from '../config/color';

export interface ListViewProps {
  name: string;
  dateCreated: string;
}

const ListView: FC<ListViewProps> = ({name, dateCreated}) => {
  return (
    <Container testID="contact-item">
      <Title>{name}</Title>
      <Text>{'Date added: ' + moment(dateCreated).format('LL')}</Text>
    </Container>
  );
};

export default ListView;

const Container = styled.View`
  justify-content: center;
  width: 90%;
  padding: 2%;
  padding-bottom: 3%;
  background: ${background.light};
  border-radius: 5px;
  margin-top: 10px;
`;

const Title = styled.Text`
  color: ${primary.text};
  font-size: 18px;
  margin-left: 3%;
  font-weight: 500;
`;

const Text = styled.Text`
  color: ${primary.text};
  font-size: 13px;
  margin-left: 3%;
  font-weight: 300;
  margin-top: 5px;
`;
