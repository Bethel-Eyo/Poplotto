import {ActionType} from '../types';

type State = {
  lottories: Array<object> | [];
  loading: boolean;
};

const initialState: State = {
  lottories: [],
  loading: false,
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
