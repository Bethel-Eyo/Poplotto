import axios from 'axios';
import {Alert} from 'react-native';
import {Dispatch} from 'redux';
import {calculateSingleWin} from '../../helpers/utils';
import {getDetailsAction, getLotteryAction} from '../actions';
import {ActionType} from '../types';

// get the list of lottery tickets
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

// Get ticket details
export const getTicketDetails =
  (id: number) => (dispatch: Dispatch<getDetailsAction>) => {
    axios
      .get(
        `https://by82fsbdwk.execute-api.eu-west-1.amazonaws.com/prod/ticket/${id}`,
      )
      .then(res => {
        console.log(res.data);
        Alert.alert('successful');
        let data = res.data.numbers;
        console.log(data);
        ship(dispatch, ActionType.SET_LOTTO_DETAILS, data);
        let win = calculateSingleWin(data);
        ship(dispatch, ActionType.SET_SINGLE_SUM, win);
      })
      .catch(error => {
        console.log(error);
        ship(dispatch, ActionType.SET_DETAIL_ERROR, true);
      });
  };

// abstract dispatch details
const ship = (
  dispatch: Dispatch<getDetailsAction>,
  dispatchType: any,
  data: any,
) => {
  dispatch({
    type: dispatchType,
    payload: data,
  });
};
