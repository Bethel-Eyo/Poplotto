import {ActionType} from '../types';

type State = {
  lottories: Array<object> | [];
  loading: boolean;
  singleWin: number;
  entries: Array<number>;
};

const initialState: State = {
  lottories: [],
  loading: false,
  singleWin: 0,
  entries: [],
};

const lottoReducer = (state = initialState, {type, payload}: any) => {
  switch (type) {
    case ActionType.SET_LOTTO_DATA:
      return {
        ...state,
        lottories: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default lottoReducer;
