import moment from 'moment';
import React, {FC, useEffect} from 'react';
import styled from 'styled-components/native';
import Loader from '../../components/Loader';
import {background, primary} from '../../config/color';
import {ScreenProps} from '../../config/interfaces';
import {LottoDetailsLogic} from './LottoDetailsLogic';

const LottoDetails: FC<ScreenProps> = ({navigation}) => {
  const {getDetails, singleWin, entries, loading, detailError} =
    LottoDetailsLogic();
  const {id, created} = navigation.state.params.item;

  useEffect(() => {
    getDetails(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container testID="container">
      <CardView>
        {loading ? (
          <Loader />
        ) : (
          <View>
            {detailError ? (
              <Text>
                Oops! Sorry a server error occured, please try again later
              </Text>
            ) : (
              <View>
                <Hint>Ticket {id}</Hint>
                <Hint>Date Created</Hint>
                <Text>{moment(created).format('LL')}</Text>
                <Hint>Entries</Hint>
                <Text>{JSON.stringify(entries)}</Text>
                <Hint>Winning Amount</Hint>
                <Text>€{singleWin}</Text>
              </View>
            )}
          </View>
        )}
      </CardView>
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

const View = styled.View`
  width: 100%;
  align-items: center;
`;

const CardView = styled.View`
  width: 90%;
  background: ${background.light};
  border-radius: 30px;
  margin-top: 10%;
  align-items: center;
  padding-top: 2%;
  padding-bottom: 5%;
  min-height: 200px;
`;

// const Row = styled.View`
//   flex-direction: row;
// `;

// Text Components
const Hint = styled.Text`
  font-weight: 300;
  font-size: 14px;
  margin-top: 20px;
  color: ${primary.text};
`;

const Text = styled.Text`
  font-weight: 500;
  font-size: 14px;
  margin-top: 5px;
  color: ${primary.text};
  max-width: 270px;
`;
