import {ActionType} from '../types';

export interface getLotteryAction {
  type: ActionType.SET_LOTTO_DATA;
  payload: Array<object>;
}

export interface getDetailsAction {
  type: ActionType.SET_LOTTO_DETAILS | ActionType.SET_SINGLE_SUM;
  payload: Array<number> | number;
}
