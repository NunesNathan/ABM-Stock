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

  const verifyItems = () => {
    if (typeof items === 'string') {
      return (
        <div>
          <a href={`https://crudcrud.com/Dashboard/${Stock.crudCrudId}`}>
            <span className="display-5">{items}</span>
          </a>
        </div>
      );
    }
    if (items && items.length > 0) {
      return (
        <StockTable items={items} setItems={setItems} />
      );
    }
    return (
      <div>
        <span className="display-5">Empty Stock</span>
        <RegisterProductButton />
      </div>
    );
  };

  return (
    <main>
      {verifyItems()}
    </main>
  );
}
