import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';

test('should render App component', () => {
  render(<App />);
  const appComponent = screen.getByTestId('test-app');
  const data = screen.getByTestId('test-data');
  expect(appComponent).toBeInTheDocument();
  expect(data).toBeInTheDocument();
  expect(appComponent).toHaveTextContent('Store Parts');
});

afterEach(() => cleanup());
