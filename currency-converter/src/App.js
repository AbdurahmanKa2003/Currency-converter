import React from 'react';
import useStore from './store';
import './App.css';

const App = () => {
  const { usd, eur, setUsd, setEur } = useStore();

  const handleUsdChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setUsd(value);
    }
  };

  const handleEurChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setEur(value);
    }
  };

  const handleReset = () => {
    setUsd('');
    setEur('');
  };

  return (
    <div className="container">
      <div className="input-group">
        <label htmlFor="usd">USD</label>
        <input
          type="text"
          id="usd"
          value={usd}
          onChange={handleUsdChange}
          placeholder="Enter amount in USD"
        />
      </div>
      <div className="input-group">
        <label htmlFor="eur">EUR</label>
        <input
          type="text"
          id="eur"
          value={eur}
          onChange={handleEurChange}
          placeholder="Enter amount in EUR"
        />
      </div>
      <div className="button-group">
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default App;
