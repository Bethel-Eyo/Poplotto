import axios from 'axios';
import {Alert} from 'react-native';
import {Dispatch} from 'redux';
import {calculateSingleWin} from '../../helpers/utils';
import {getDetailsAction, getLotteryAction} from '../actions';
import {ActionType} from '../types';

export const getLotteryList = () => (dispatch: Dispatch<getLotteryAction>) => {
  axios
    .get('https://by82fsbdwk.execute-api.eu-west-1.amazonaws.com/prod/ticket')
    .then(res => {
      console.log(res.data);
      Alert.alert('Lottery list gotten successfully');
      dispatch({
        type: ActionType.SET_LOTTO_DATA,
        payload: res.data.tickets,
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const getTicketDetails =
  (id: number) => (dispatch: Dispatch<getDetailsAction>) => {
    axios
      .get(
        `https://by82fsbdwk.execute-api.eu-west-1.amazonaws.com/prod/ticket/${id}`,
      )
      .then(res => {
        console.log(res.data);
        let data = res.data.numbers;
        dispatch({
          type: ActionType.SET_LOTTO_DETAILS,
          payload: data,
        });
        dispatch({
          type: ActionType.SET_SINGLE_SUM,
          payload: calculateSingleWin(data),
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
