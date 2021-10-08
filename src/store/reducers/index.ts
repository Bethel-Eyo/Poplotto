import {combineReducers} from 'redux';
import lottoReducer from './lottoReducer';

const reducers = combineReducers({
  lotto: lottoReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
