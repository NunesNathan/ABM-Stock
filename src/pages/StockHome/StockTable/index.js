import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import { Table, Button, Pagination } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Stock from '../../../services/api';
import RegisterProductButton from '../../../components/RegisterProductButton';
import './index.css';

const tableHeaders = [
  '_id', 'quantity', 'price', 'product name',
  'pack quantity', 'client name', 'client email', 'is active',
];

export default function StockTable({ items, setItems }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(1);

  const history = useHistory();

  useEffect(() => {
    setPages(Math.ceil(items.length / 7));
  }, []);

  const deleteItem = async (id) => {
    await Stock.delete(id);
    setItems(await Stock.getAll());
  };

  const verifyIndex = (i) => {
    if (currentPage === 1) {
      if (i < 7) {
        return true;
      }
      return false;
    }
    if (i >= ((currentPage - 1) * 7)) {
      if (i < (currentPage * 7)) {
        return true;
      }
    }
    return false;
  };

  return (
    <Table hover className="text-center" variant="dark">
      <thead>
        <tr>
          {tableHeaders.map((head) => (
            <th key={head}>{head}</th>
          ))}
          <th colSpan={2}>
            <RegisterProductButton />
          </th>
        </tr>
      </thead>
      <tbody>
        {
          items.map(({ _id: id, ...item }, index) => {
            if (verifyIndex(index)) {
              return (
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
                    <Button
                      className="w-100"
                      onClick={() => history.push(`/item/${id}`)}
                    >
                      Select
                    </Button>
                  </td>
                  <td>
                    <Button
                      className="w-100"
                      onClick={() => deleteItem(id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            }
            return null;
          })
        }
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={10}>
            <Pagination>
              <Pagination.Prev
                disabled={currentPage === 1}
                onClick={() => {
                  if (currentPage > 0) {
                    setCurrentPage(currentPage - 1);
                  }
                }}
              />
              <Pagination.Item>{currentPage}</Pagination.Item>
              <Pagination.Next
                disabled={currentPage === pages}
                onClick={() => {
                  if (currentPage < pages) {
                    setCurrentPage(currentPage + 1);
                  }
                }}
              />
            </Pagination>
          </td>
        </tr>
      </tfoot>
    </Table>
  );
}

StockTable.propTypes = {
  items: PropType.arrayOf(PropType.objectOf({
    id: PropType.string.isRequired,
    quantity: PropType.number.isRequired,
    price: PropType.number.isRequired,
    product: PropType.objectOf({
      name: PropType.string.isRequired,
      packQuantity: PropType.number.isRequired,
    }).isRequired,
    client: PropType.objectOf({
      name: PropType.string.isRequired,
      email: PropType.string.isRequired,
    }).isRequired,
    active: PropType.bool.isRequired,
  })).isRequired,
  setItems: PropType.func.isRequired,
};
