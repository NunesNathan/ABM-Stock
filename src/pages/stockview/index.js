import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Stock from '../../services/api';

const tableHeaders = [
  '_id', 'quantity', 'price', 'product name',
  'pack quantity', 'client name', 'client email', 'is active',
];

export default function StockView() {
  const [items, setItems] = useState([]);

  useEffect(async () => {
    setItems(await Stock.getAll());
  }, []);

  const deleteItem = async (id) => {
    await Stock.delete(id);
    setItems(await Stock.getAll());
  };

  return (
    <Table striped variant="dark">
      <thead>
        <tr>
          {tableHeaders.map((head) => (
            <th key={head}>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {
          items.map(({ _id: id, ...item }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.product.name}</td>
              <td>{item.product.packQuantity}</td>
              <td>{item.client.name}</td>
              <td>{item.client.email}</td>
              <td>
                {item.active ? (
                  <i className="fa-solid fa-circle-check" />
                ) : (
                  <i className="fa-solid fa-rectangle-xmark" />
                )}
              </td>
              <td>
                <Link to={`/item/${id}`}>Select</Link>
              </td>
              <td>
                <button type="button" onClick={() => deleteItem(id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
}
