import {useSelector, useDispatch} from 'react-redux';
import {getTicketDetails} from '../../store/action-creators';
import {RootState} from '../../store/reducers';
import {ActionType} from '../../store/types';

export const LottoDetailsLogic = () => {
  const dispatch = useDispatch();
  const {singleWin, entries, loading, detailError} = useSelector(
    (state: RootState) => state.lotto,
  );

  const getDetails = (id: number) => {
    dispatch({
      type: ActionType.SET_LOADING,
      payload: true,
    });
    dispatch(getTicketDetails(id));
  };

  return {getDetails, singleWin, entries, loading, detailError};
};
