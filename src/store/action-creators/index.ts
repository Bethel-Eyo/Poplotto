import axios from 'axios';
import {Alert} from 'react-native';
import {Dispatch} from 'redux';
import {getLotteryAction} from '../actions';
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

export const getTicketDetails = (id: number) => () => {
  axios
    .get(
      `https://by82fsbdwk.execute-api.eu-west-1.amazonaws.com/prod/ticket/${id}`,
    )
    .then(res => {
      console.log(res.data);
      //calculateSingleTotal(res.data.numbers);
    })
    .catch(error => {
      console.log(error);
    });
};
