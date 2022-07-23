import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';
import { keyboards } from '../mock-data/mockData';
import { StoreObject, ItemType } from '../types';
import Item from '../components/Item';
import PriceOrder from '../components/PriceOrder';
import SearchInput from '../components/SearchInput';
import TypeSelect from '../components/TypeSelect';

test('should render App component', () => {
  render(<App />);
  const appComponent = screen.getByTestId('test-app');
  const searchInputComponent = screen.getByTestId('test-search-input');
  const itemComponent = screen.getByTestId('test-item');
  const priceOrderComponent = screen.getByTestId('test-price-order');
  const typeSelectComponent = screen.getByTestId('test-type-select');
  expect(appComponent).toBeInTheDocument();
  expect(searchInputComponent).toBeInTheDocument();
  expect(itemComponent).toBeInTheDocument();
  expect(priceOrderComponent).toBeInTheDocument();
  expect(typeSelectComponent).toBeInTheDocument();
});

test('should render PriceOrder component with correct button content', () => {
  render(<PriceOrder onChange={() => {}} arrow={'↑'} ascending={true} />);
  expect(screen.getByRole('button')).toContainHTML(
    '<button data-testid="test-price-order">Arrange by price ↑</button>'
  );
});

test('should render Item component with correct HTML content', () => {
  render(
    <Item
      itemProps={keyboards[0]}
      onItemSelect={function (item: StoreObject): void {
        throw new Error('Function not implemented.');
      }}
    />
  );
  const itemComponent = screen.getByTestId('test-item');
  expect(itemComponent).toContainHTML(
    '<li data-testid="test-item"><p>Keyboard 1</p><p>15.00$</p><p>keyboard</p></li>'
  );
});

test('should render SearchInput component', () => {
  render(
    <SearchInput
      onChange={function (item: string): void {
        throw new Error('Function not implemented.');
      }}
    />
  );
  expect(screen.getByRole('textbox')).toContainHTML('placeholder="Search..."');
});

test('should render TypeSelect component', () => {
  render(
    <TypeSelect
      itemTypes={['keyboard', 'mouse']}
      onChange={function (item: ItemType): void {
        throw new Error('Function not implemented.');
      }}
    />
  );
  expect(screen.getByRole('combobox')).toContainHTML(
    '<option value="keyboard">keyboard</option><option value="mouse">mouse</option>'
  );
});

afterEach(cleanup);
