import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';
import { storeItems } from '../mock-data/mockData';
import { search } from '../actions';

test('should render App component', () => {
  render(<App />);
  const appComponent = screen.getByTestId('test-app');
  const data = screen.getByTestId('test-data');
  expect(appComponent).toBeInTheDocument();
  expect(appComponent).toHaveTextContent('Store Parts');
  expect(data).toBeInTheDocument();
});

test('should perform search action and return the correct elements', () => {
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

afterEach(() => cleanup());
