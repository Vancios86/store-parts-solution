import './App.css';
import { useState, useEffect, FC } from 'react';
import { storeItemProps, dataType } from './types';
import Item from './components/Item';
import SearchInput from './components/SearchInput';
import PriceOrder from './components/PriceOrder';
import TypeSelect from './components/TypeSelect';
import {
  search,
  orderByPrice,
  filterByType,
  eliminateDuplicates,
} from './actions';

const App: FC = () => {
  const [data, setData] = useState<dataType>([
    {
      name: 'loading...',
      price: '',
      type: '',
    },
  ]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [ascendingPrice, setAscendingPrice] = useState<boolean>(false);
  const [itemTypes, setItemTypes] = useState<object>([]);
  const [selectedType, setSelectedType] = useState<string>('');

  //fetch the data asynchronously on first component mount
  useEffect(() => {
    async function getData() {
      try {
        let response = await fetch('http://localhost:8081/store/parts');
        let data = await response.json();
        setItemTypes(
          eliminateDuplicates(data.map((item: storeItemProps) => item.type))
        );
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
          onChange={(searchValue: string): void => {
            setSearchValue(searchValue);
            search(searchValue, data);
          }}
        />
        <PriceOrder
          onChange={(ascendingPrice: boolean): void => {
            setAscendingPrice(ascendingPrice);
            orderByPrice(ascendingPrice, data);
          }}
        />
        <TypeSelect
          itemTypes={itemTypes}
          onChange={(selectedType: string): void => {
            setSelectedType(selectedType);
            filterByType(selectedType, data);
          }}
        />
      </div>

      <div className='data-display' data-testid='test-data'>
        <ul>
          {filterByType(selectedType, search(searchValue, data)).map(
            (item: storeItemProps) => (
              <Item itemProps={item} />
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
