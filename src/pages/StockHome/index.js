import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Stock from '../../services/api';
import RegisterProductButton from '../../components/RegisterProductButton';
import StockTable from './StockTable';
import './index.css';

export default function StockHome() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState();

  useEffect(async () => {
    setItems(await Stock.getAll());
    setLoading(false);
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
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : verifyItems()}
    </main>
  );
}
