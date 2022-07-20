import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';
import { storeItems, keyboards } from '../mock-data/mockData';
import { search, orderByPrice, filterByType } from '../actions';
import Item from '../components/Item';

test('should render App component', () => {
  render(<App />);
  const appComponent = screen.getByTestId('test-app');
  const data = screen.getByTestId('test-data');
  expect(appComponent).toBeInTheDocument();
  expect(appComponent).toHaveTextContent('Store Parts');
  expect(data).toBeInTheDocument();
});

test('should filter the items by search value', () => {
  expect(search('k', storeItems)).toMatchObject([
    {
      name: 'Keyboard 1',
      price: '15.00$',
      type: 'Keyboard',
    },
    {
      name: 'Keyboard 2',
      price: '154.00$',
      type: 'Keyboard',
    },
    {
      name: 'Keyboard 3',
      price: '83.00$',
      type: 'Keyboard',
    },
  ]);
});

test('should sort the items by price', () => {
  expect(orderByPrice(true, keyboards)).toMatchObject([
    {
      name: 'Keyboard 1',
      price: '15.00$',
      type: 'Keyboard',
    },
    {
      name: 'Keyboard 3',
      price: '83.00$',
      type: 'Keyboard',
    },
    {
      name: 'Keyboard 2',
      price: '154.00$',
      type: 'Keyboard',
    },
  ]);
});

test('should filter the elements by type', () => {
  expect(filterByType('mouse', storeItems)).toMatchObject([
    {
      name: 'Mouse 1',
      price: '112.00$',
      type: 'Mouse',
    },
    {
      name: 'Mouse 2',
      price: '35.99$',
      type: 'Mouse',
    },
  ]);
});

test('should return correct items when filtering by both search and selected type', () => {
  expect(
    filterByType('keyboard', search('2', storeItems)).map((item) => (
      <Item itemProps={item} />
    ))
  ).toMatchObject([
    <Item
      itemProps={{ name: 'Keyboard 2', price: '154.00$', type: 'Keyboard' }}
    />,
  ]);
});

afterEach(() => cleanup());
