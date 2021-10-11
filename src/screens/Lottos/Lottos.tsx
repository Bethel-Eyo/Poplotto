import React, {FC, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import ListView from '../../components/ListView';
import Loader from '../../components/Loader';
import {background, primary} from '../../config/color';
import {ScreenProps, Ticket} from '../../config/interfaces';
import {LottosLogic} from './LottosLogic';

const Lottos: FC<ScreenProps> = ({navigation}) => {
  const {getData, lottories} = LottosLogic();

  useEffect(() => {
    if (lottories.length === 0) {
      getData();
    }
  });

  return (
    <Container testID="root">
      <HomeHeader testID="Header">
        <Title>Poplotto</Title>
        <Text>
          View the list of our lotto tickets and see their wins, total wins
          column is coming soon
        </Text>
      </HomeHeader>
      {lottories.length === 0 ? (
        <Loader />
      ) : (
        <LottoList<any>
          testID="lotto-list"
          data={lottories}
          renderItem={({item}: {item: Ticket}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('LottoDetails', {item});
              }}>
              <ListView name={'ticket ' + item.id} dateCreated={item.created} />
            </TouchableOpacity>
          )}
        />
      )}
    </Container>
  );
};

export default Lottos;

// Flatlist component
const LottoList = styled.FlatList`
  width: 100%;
  margin-left: 10%;
`;

// View components
const Container = styled.SafeAreaView`
  align-items: center;
  flex: 1;
  width: 100%;
  background: ${background.main};
`;

const HomeHeader = styled.View`
  height: 140px;
  width: 90%;
  background: ${background.light};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-top: 5px;
  align-items: center;
`;

// Text Components
const Title = styled.Text`
  font-weight: bold;
  font-size: 30px;
  margin-top: 7%;
  color: ${primary.text};
`;

const Text = styled.Text`
  color: ${primary.text};
  text-align: center;
  width: 80%;
  margin-top: 10px;
  font-weight: 500;
`;
