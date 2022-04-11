import React, { useEffect, useState } from 'react';
import RegisterProductButton from '../../components/RegisterProductButton';
import Stock from '../../services/api';
import StockTable from './StockTable';
import './index.css';

export default function StockHome() {
  const [items, setItems] = useState([]);

  useEffect(async () => {
    setItems(await Stock.getAll());
  }, []);

  return (
    <main>
      {items && items.length > 0 ? (
        <StockTable items={items} setItems={setItems} />
      ) : (
        <div>
          <span className="display-5">Empty Stock</span>
          <RegisterProductButton />
        </div>
      )}
    </main>
  );
}
