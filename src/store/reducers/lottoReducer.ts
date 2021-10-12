import {Ticket} from '../../config/interfaces';
import {ActionType} from '../types';

type State = {
  lottories: Array<Ticket> | [];
  loading: boolean;
  singleWin: number;
  entries: Array<number>;
  detailError: boolean;
  status: string;
  totalWins: number;
};

const initialState: State = {
  lottories: [],
  loading: false,
  singleWin: 0,
  entries: [],
  detailError: false,
  status: 'inactive',
  totalWins: 0,
};

const lottoReducer = (state = initialState, {type, payload}: any) => {
  switch (type) {
    case ActionType.SET_LOTTO_DATA:
      return {
        ...state,
        lottories: payload,
        loading: false,
        detailError: false,
        status: 'pending',
      };
    case ActionType.SET_LOTTO_DETAILS:
      return {
        ...state,
        entries: payload,
        loading: false,
        detailError: false,
      };
    case ActionType.SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case ActionType.SET_DETAIL_ERROR:
      return {
        ...state,
        detailError: payload,
        loading: false,
      };
    case ActionType.SET_SINGLE_SUM:
      return {
        ...state,
        singleWin: payload,
        loading: false,
      };
    case ActionType.SET_TOTAL_WINS:
      return {
        ...state,
        totalWins: payload,
        loading: false,
        status: 'fetched',
      };
    case ActionType.SET_SYNCED:
      return {
        ...state,
        status: payload,
      };
    default:
      return state;
  }
};

export default lottoReducer;
