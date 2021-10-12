import 'react-native';
import React from 'react';
import {ActionType} from '../../store/types';
import {render, act} from '@testing-library/react-native';
import store from '../../store';
import {Provider} from 'react-redux';
import {mockedDetail, myTickets} from '../../config/constants';
import '@testing-library/jest-native/extend-expect';
import {calculateSingleWin} from '../../helpers/utils';
import LottoDetails from './LottoDetails';

let container: any = null;

const ItemProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
    state: {
      params: {
        item: myTickets[0],
      },
    },
  },
  ...props,
});

const win = calculateSingleWin(mockedDetail.numbers);

describe('<LottoDetails />', () => {
  let props: any;
  beforeEach(async () => {
    props = ItemProps({});
    // set entries
    store.dispatch({
      type: ActionType.SET_LOTTO_DETAILS,
      payload: mockedDetail.numbers,
    });

    // assign calculated win for single entry
    store.dispatch({
      type: ActionType.SET_SINGLE_SUM,
      payload: win,
    });

    container = render(
      <Provider store={store}>
        <LottoDetails {...props} />
      </Provider>,
    );
    await act(async () => {});
  });

  test('Lotto details screen renders correctly', () => {
    expect(container.getByTestId('container')).toBeTruthy();
  });

  test('win for single entry should be exact', () => {
    let lottery = store.getState().lotto;
    expect(lottery.singleWin).toBe(10);
  });

  // 14 test cases that ensures that the lottery rules are followed
  test('Lottery Algorithm - 1st case', () => {
    expect(calculateSingleWin([2, 1, 1])).toBe(1);
  });

  test('Lottery Algorithm - 2nd case', () => {
    expect(calculateSingleWin([1, 1, 0])).toBe(10);
  });

  test('Lottery Algorithm - 3rd case', () => {
    expect(calculateSingleWin([2, 0, 2])).toBe(0);
  });

  test('Lottery Algorithm - 4th case', () => {
    expect(calculateSingleWin([1, 0, 0])).toBe(1);
  });

  test('Lottery Algorithm - 5th case', () => {
    expect(calculateSingleWin([2, 1, 1])).toBe(1);
  });

  test('Lottery Algorithm - 6th case', () => {
    expect(calculateSingleWin([0, 2, 1])).toBe(1);
  });

  test('Lottery Algorithm - 7th case', () => {
    expect(calculateSingleWin([2, 1, 2])).toBe(0);
  });

  test('Lottery Algorithm - 8th case', () => {
    expect(calculateSingleWin([1, 0, 2])).toBe(1);
  });

  test('Lottery Algorithm - 9th case', () => {
    expect(calculateSingleWin([0, 1, 1])).toBe(10);
  });

  test('Lottery Algorithm - 10th case', () => {
    expect(calculateSingleWin([1, 1, 0])).toBe(10);
  });

  test('Lottery Algorithm - 11th case', () => {
    expect(calculateSingleWin([2, 0, 1])).toBe(1);
  });

  test('Lottery Algorithm - 12th case', () => {
    expect(calculateSingleWin([1, 1, 1])).toBe(5);
  });

  test('Lottery Algorithm - 13th case', () => {
    expect(calculateSingleWin([2, 0, 2])).toBe(0);
  });

  test('Lottery Algorithm - 14th case', () => {
    expect(calculateSingleWin([2, 2, 2])).toBe(5);
  });
});
