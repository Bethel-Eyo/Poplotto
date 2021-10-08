import {useSelector, useDispatch} from 'react-redux';
import {getLotteryList} from '../../store/action-creators';
import {RootState} from '../../store/reducers';

export const LottosLogic = () => {
  const dispatch = useDispatch();
  const {lottories} = useSelector((state: RootState) => state.lotto);

  const getData = () => {
    dispatch(getLotteryList());
  };

  return {getData, lottories};
};
