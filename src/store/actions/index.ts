import {ActionType} from '../types';

export interface getLotteryAction {
  type: ActionType.SET_LOTTO_DATA;
  payload: Array<object>;
}

export interface getDetailsAction {
  type:
    | ActionType.SET_LOTTO_DETAILS
    | ActionType.SET_SINGLE_SUM
    | ActionType.SET_DETAIL_ERROR;
  payload: Array<number> | number | boolean;
}

export interface totalWinsAction {
  type: ActionType.SET_TOTAL_WINS;
  payload: number;
}
