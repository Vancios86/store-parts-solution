import './App.css';
import { useState, useEffect, FC } from 'react';
import { storeItemType, dataType, ClickEventHandler } from './types';
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
  const [route, setRoute] = useState<string>('');
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
  const [details, setDetails] = useState<storeItemType>({
    name: '',
    price: '',
    type: '',
  });
  const [arrow, setArrow] = useState<string>('');

  //fetch the data asynchronously on first component mount
  useEffect(() => {
    async function getData() {
      try {
        setRoute('home');
        let response = await fetch('http://localhost:8081/store/parts');
        let data = await response.json();
        setItemTypes(
          eliminateDuplicates(data.map((item: storeItemType) => item.type))
        );
        return setData(data || []);
      } catch (error) {
        console.log('waiting for data...', error);
      }
    }
    getData();
  }, []);

  return (
    <div className='App' data-testid='test-app'>
      {route === 'home' ? (
        <div className='home-page'>
          <h2 className='page-title'>Store Parts</h2>

          <div className='inputs-area flex'>
            <SearchInput
              onChange={(searchValue: string): void => {
                setSearchValue(searchValue);
                search(searchValue, data);
              }}
            />
            <PriceOrder
              arrow={arrow}
              ascending={ascendingPrice}
              onChange={(ascendingPrice: boolean): void => {
                setAscendingPrice(ascendingPrice);
                setArrow(ascendingPrice ? '↓' : '↑');
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
                (item: storeItemType) => (
                  <li
                    key={item.name}
                    onClick={(e: ClickEventHandler) => {
                      setDetails(item);
                      setRoute('details');
                    }}
                  >
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{item.type}</p>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      ) : (
        <>
          <h2>Item details page</h2>
          <div className='item-details'>
            <p>
              name: <strong>{details.name}</strong>
            </p>
            <p>
              price: <strong>{details.price}</strong>
            </p>
            <p>
              type: <strong>{details.type}</strong>
            </p>
            <p>detailed description: ...</p>
          </div>
          <button onClick={(click: ClickEventHandler) => setRoute('home')}>
            go back
          </button>
        </>
      )}
    </div>
  );
};

export default App;
