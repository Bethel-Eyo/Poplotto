import {ActionType} from '../types';

export interface getLotteryAction {
  type: ActionType.SET_LOTTO_DATA;
  payload: Array<object>;
}
