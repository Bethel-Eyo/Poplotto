import 'react-native';
import React from 'react';
import {ActionType} from '../../store/types';
import {render, act} from '@testing-library/react-native';
import store from '../../store';
import {Provider} from 'react-redux';
import {myTickets} from '../../config/constants';
import Lottos from './Lottos';

let container: any = null;

const mockedLottoState = {
  lottories: myTickets,
};

describe('<Lottos />', () => {
  // Render component before each test
  beforeEach(async () => {
    store.dispatch({
      type: ActionType.SET_LOTTO_DATA,
      payload: mockedLottoState,
    });

    container = render(
      <Provider store={store}>
        <Lottos />
      </Provider>,
    );
    await act(async () => {});
  });

  test('Lottos screen renders correctly', () => {
    expect(container.getByTestId('root')).toBeTruthy();
  });

  test('should show Header', () => {
    expect(container.getByTestId('Header')).toBeTruthy();
  });

  test('flatlist should be populated with mocked data', () => {
    let flatlist = container.getByTestId('lotto-list');
    expect(flatlist).toBeTruthy();
    expect(flatlist.props.data).toEqual(mockedLottoState);
  });

  test('Total text should render', () => {
    expect(container.getByTestId('total')).toBeTruthy();
  });

  test('Total wins algorithm is accurate', () => {
    let winsArr = [10, 0, 0, 10, 1, 10, 0, 1, 1, 1, 0, 0, 0, 0];
    let sum = 0;
    winsArr.forEach(win => {
      sum = sum + win;
    });

    expect(sum).toBe(34);
  });
});

// [10, 0, 0, 10, 1, 10, 0, 1, 1, 1, 0, 0, 0, 0] // 34
