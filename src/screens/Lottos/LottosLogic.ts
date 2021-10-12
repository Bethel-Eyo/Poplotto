import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Ticket} from '../../config/interfaces';
import {getLotteryList, getTotalWins} from '../../store/action-creators';
import {RootState} from '../../store/reducers';
import {ActionType} from '../../store/types';
import {AsyncStorage} from 'react-native';
import {storeTotalWins} from '../../helpers/utils';

export const LottosLogic = () => {
  const dispatch = useDispatch();
  const {lottories, status, totalWins} = useSelector(
    (state: RootState) => state.lotto,
  );
  const [total, setTotal] = useState<number>(totalWins);

  const getData = () => {
    dispatch(getLotteryList());
  };

  const calculateTotal = (tickets: Array<Ticket>) => {
    dispatch({
      type: ActionType.SET_LOADING,
      payload: true,
    });
    dispatch(getTotalWins(tickets));
  };

  /** After the data is fetched, check if the data is stored on the device, if yes, check
   * if the new data is equal to the previous data stored on the device, if yes then set
   * it to total, if no then set the new data to total and update the local storage
   */
  const getTotal = async () => {
    try {
      const value = await AsyncStorage.getItem('total_wins');
      if (value !== null) {
        // value previously stored
        let intVal = parseInt(value, 10); // second param is a radix
        if (intVal === totalWins) {
          setTotal(intVal);
        } else {
          updateTotal(totalWins);
        }
      } else {
        updateTotal(totalWins);
      }

      // update the status state in the store
      dispatch({
        type: ActionType.SET_SYNCED,
        payload: 'synced',
      });
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  // update total abstraction
  const updateTotal = (totSum: number) => {
    setTotal(totSum);
    storeTotalWins(totSum);
  };

  return {getData, lottories, status, calculateTotal, total, getTotal};
};
