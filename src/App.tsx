import './App.css';
import { useState, useEffect, FC } from 'react';
import { storeItemProps, dataType } from './types';
import SearchInput from './components/SearchInput';
import { search } from './actions';

const App: FC = () => {
  const [data, setData] = useState<dataType>([
    {
      name: 'loading...',
      price: '',
      type: '',
    },
  ]);

  const [searchValue, setSearchValue] = useState<string>('');

  //fetch the data asynchronously on first component mount
  useEffect(() => {
    async function getData() {
      try {
        let response = await fetch('http://localhost:8081/store/parts');
        let data = await response.json();
        return setData(data || []);
      } catch (error) {
        console.log('data could not be loaded', error);
      }
    }
    getData();
  }, []);

  return (
    <div className='App' data-testid='test-app'>
      <h2 className='page-title'>Store Parts</h2>

      <div className='inputs-area flex'>
        <SearchInput
          onChange={(searchValue: string) => {
            setSearchValue(searchValue);
            search(searchValue, data);
          }}
        />
        <input className='input price-input' placeholder='price ↑' />
        <input className='input type-input' placeholder='type' />
      </div>

      <div className='data-display' data-testid='test-data'>
        {/* <ul>
          {data.map((item: storeItemProps) => (
            <li key={item.name}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.type}</p>
            </li>
          ))}
        </ul>
        <hr /> */}
        <ul>
          {search(searchValue, data).map((item: storeItemProps) => (
            <li key={item.name}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.type}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
