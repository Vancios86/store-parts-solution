import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
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
    <div className='App'>
      <h2 className='page-title'>Store Parts</h2>

      <div className='inputs-area flex'>
        <input className='input search-input' placeholder='search...' />
        <input className='input price-input' placeholder='price ↑' />
        <input className='input type-input' placeholder='type' />
      </div>

      <div className='data-display'>
        <ul>
          {data.map((item: { name: string; price: string; type: string }) => (
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
}

export default App;
