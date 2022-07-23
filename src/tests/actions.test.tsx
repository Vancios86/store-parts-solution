import { cleanup } from '@testing-library/react';
import { mockItems } from '../mock-data/mockData';
import {
  search,
  orderByPrice,
  filterByType,
  eliminateDuplicates,
  toNumber,
} from '../actions';
import { orderByPriceTrigger } from '../App';
import { Data } from '../types';

describe('orderByPrice', () => {
  test('should return the data ordered by price', () => {
    const data = [
      {
        name: 'item1',
        price: '100',
        type: 'type1',
      },
      {
        name: 'item2',
        price: '200',
        type: 'type2',
      },
      {
        name: 'item3',
        price: '300',
        type: 'type3',
      },
    ];
    const expected = [
      {
        name: 'item3',
        price: '300',
        type: 'type3',
      },
      {
        name: 'item2',
        price: '200',
        type: 'type2',
      },
      {
        name: 'item1',
        price: '100',
        type: 'type1',
      },
    ];
    expect(orderByPrice(false, data)).toEqual(expected);
  });
});

describe('orderByPriceTrigger descending', () => {
  test('should order the items by descending price', () => {
    const data = [
      {
        name: 'item1',
        price: '100',
        type: 'type1',
      },
      {
        name: 'item2',
        price: '200',
        type: 'type2',
      },
      {
        name: 'item3',
        price: '300',
        type: 'type3',
      },
    ];
    const expected = [
      {
        name: 'item3',
        price: '300',
        type: 'type3',
      },
      {
        name: 'item2',
        price: '200',
        type: 'type2',
      },
      {
        name: 'item1',
        price: '100',
        type: 'type1',
      },
    ];
    expect(orderByPriceTrigger('↓', data)).toEqual(expected);
  });
});

describe('orderByPriceTrigger ascending', () => {
  test('should order the data by ascending price', () => {
    const data = [
      {
        name: 'item1',
        price: '100',
        type: 'type1',
      },
      {
        name: 'item2',
        price: '200',
        type: 'type2',
      },
      {
        name: 'item3',
        price: '300',
        type: 'type3',
      },
    ];
    const expected = [
      {
        name: 'item1',
        price: '100',
        type: 'type1',
      },
      {
        name: 'item2',
        price: '200',
        type: 'type2',
      },
      {
        name: 'item3',
        price: '300',
        type: 'type3',
      },
    ];
    expect(orderByPriceTrigger('↑', data)).toEqual(expected);
  });
});

describe('search', () => {
  test('should filter the items by search value', () => {
    expect(search('k', mockItems as Data)).toMatchObject([
      {
        name: 'Keyboard 1',
        price: '15.00$',
        type: 'keyboard',
      },
      {
        name: 'Keyboard 2',
        price: '154.00$',
        type: 'keyboard',
      },
      {
        name: 'Keyboard 3',
        price: '83.00$',
        type: 'keyboard',
      },
    ]);
  });
});

describe('filterByType', () => {
  test('should filter the elements by type', () => {
    expect(filterByType('mouse', mockItems as Data)).toMatchObject([
      {
        name: 'Mouse 1',
        price: '112.00$',
        type: 'mouse',
      },
      {
        name: 'Mouse 2',
        price: '35.99$',
        type: 'mouse',
      },
    ]);
  });
});

describe('eliminateDuplicates', () => {
  test('should eliminate duplicates from any array', () => {
    expect(
      eliminateDuplicates(['mouse', 'mouse', 'keyboard', 'keyboard', 'monitor'])
    ).toMatchObject(['mouse', 'keyboard', 'monitor']);
    expect(eliminateDuplicates([1, 2, 3, 2])).toMatchObject([1, 2, 3]);
  });
});

describe('toNumber', () => {
  test('should convert string to number', () => {
    expect(toNumber('123')).toBe(123);
    expect(toNumber('123.45')).toBe(123.45);
    expect(toNumber('123.45$')).toBe(123.45);
    expect(toNumber('abc')).toBe(NaN);
  });
});

afterEach(() => cleanup());
