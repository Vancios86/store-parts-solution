import './App.css';
import { useState, useEffect } from 'react';
import {
  StoreObject,
  Data,
  ClickEventHandler,
  ItemType,
  Arrow,
  Route,
} from './types';
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

const App = () => {
  const [route, setRoute] = useState<Route>('');
  const [data, setData] = useState<Data>([
    {
      name: 'loading...',
      price: '',
      type: '',
    },
  ]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [ascendingPrice, setAscendingPrice] = useState<boolean>(false);
  const [itemTypes, setItemTypes] = useState<Array<ItemType>>([]);
  const [selectedType, setSelectedType] = useState<string>('');
  const [details, setDetails] = useState<StoreObject>({
    name: '',
    price: '',
    type: '',
  });
  const [arrow, setArrow] = useState<Arrow>('');

  //fetch the data asynchronously on first component mount
  useEffect(() => {
    async function getData() {
      try {
        setRoute('home');
        let response = await fetch('http://localhost:8081/store/parts');
        let data: Data = await response.json();
        setItemTypes(
          eliminateDuplicates(data.map((item): ItemType => item.type))
        );
        return setData(data);
      } catch (error) {
        console.log('waiting for data...', error);
      }
    }
    getData();
  }, []);

  const onItemSelect = (item: StoreObject): void => {
    setDetails(item);
    setRoute('details');
  };

  return (
    <div className='App' data-testid='test-app'>
      {route === 'home' ? (
        <div className='home-page'>
          <h2 className='page-title'>Store Parts</h2>

          <div className='inputs-area flex'>
            <SearchInput
              onChange={(searchValue): void => {
                setSearchValue(searchValue);
                search(searchValue, data);
              }}
            />
            <PriceOrder
              arrow={arrow}
              ascending={ascendingPrice}
              onChange={(ascendingPrice): void => {
                setAscendingPrice(ascendingPrice);
                setArrow(ascendingPrice ? '↓' : '↑');
                orderByPrice(ascendingPrice, data);
              }}
            />
            <TypeSelect
              itemTypes={itemTypes}
              onChange={(selectedType): void => {
                setSelectedType(selectedType);
                filterByType(selectedType, data);
              }}
            />
          </div>

          <div className='data-display' data-testid='test-data'>
            <ul>
              {search(searchValue, filterByType(selectedType, data)).map(
                (item) => (
                  <Item
                    itemProps={item}
                    key={item.name}
                    onItemSelect={onItemSelect}
                  />
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
              NAME: <strong>{details.name}</strong>
            </p>
            <p>
              PRICE: <strong>{details.price}</strong>
            </p>
            <p>
              TYPE: <strong>{details.type}</strong>
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
