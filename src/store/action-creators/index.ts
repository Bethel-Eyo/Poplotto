import axios from 'axios';
import {Alert} from 'react-native';
import {Dispatch} from 'redux';
import {calculateSingleWin} from '../../helpers/utils';
import {getDetailsAction, getLotteryAction, totalWinsAction} from '../actions';
import {ActionType} from '../types';
import {Ticket} from '../../config/interfaces';

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
      getTicketDetails(1);
    })
    .catch(error => {
      console.log(error);
    });
};

// Get ticket details
export const getTicketDetails =
  (id: number) => async (dispatch: Dispatch<getDetailsAction>) => {
    const resp: any = await fetchDetailsData(id);
    let data = resp.data.numbers;
    if (data) {
      ship(dispatch, ActionType.SET_LOTTO_DETAILS, data);
      let win = calculateSingleWin(data);
      ship(dispatch, ActionType.SET_SINGLE_SUM, win);
    } else {
      ship(dispatch, ActionType.SET_DETAIL_ERROR, true);
    }
  };

const fetchDetailsData = async (id: number) => {
  try {
    return await axios.get(
      `https://by82fsbdwk.execute-api.eu-west-1.amazonaws.com/prod/ticket/${id}`,
    );
  } catch (error) {
    return error;
  }
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

export const getTotalWins =
  (tickets: Array<Ticket>) => async (dispatch: Dispatch<totalWinsAction>) => {
    const winsArr: Array<number> = [];
    for (let ticket of tickets) {
      let resp: any = await fetchDetailsData(ticket.id);
      //console.log('id: ' + ticket.id + 'resp ' + JSON.stringify(resp));
      let numberList = resp?.data?.numbers;
      if (numberList) {
        let win = calculateSingleWin(numberList);
        winsArr.push(win);
      }
    }

    console.log(winsArr);
    let sum = 0;
    winsArr.forEach(win => {
      sum = sum + win;
    });

    console.log(sum);
    dispatch({
      type: ActionType.SET_TOTAL_WINS,
      payload: sum,
    });
  };
