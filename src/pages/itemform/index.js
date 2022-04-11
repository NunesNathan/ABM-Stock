import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  Button, Form, FormControl, InputGroup,
} from 'react-bootstrap';
import Stock from '../../services/api';

export default function ItemForm() {
  const [quantity, setQuantity] = useState();
  const [productPrice, setProductPrice] = useState();
  const [productName, setProductName] = useState();
  const [packQuantity, setPackQuantity] = useState();
  const [clientName, setClientName] = useState();
  const [clientEmail, setClientEmail] = useState();
  const [active, setActive] = useState(false);

  const { id } = useParams();
  const history = useHistory();

  useEffect(async () => {
    if (id) {
      const item = await Stock.getOneById(id);

      setQuantity(item.quantity);
      setProductPrice(item.price);
      setProductName(item.product.name);
      setPackQuantity(item.product.packQuantity);
      setClientName(item.client.name);
      setClientEmail(item.client.email);
      setActive(item.active);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      quantity,
      price: productPrice,
      product: {
        name: productName,
        packQuantity,
      },
      client: {
        name: clientName,
        email: clientEmail,
      },
      active,
    };

    if (id) {
      await Stock.update(id, body);
    } else {
      await Stock.insert(body);
    }
    history.push('/');
  };

  return (
    <Form>
      {id && (
        <Form.Group>
          <Form.Label>Id</Form.Label>
          <Form.Control type="text" defaultValue={id} />
        </Form.Group>
      )}
      <Form.Group>
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="number"
          name="quantity"
          defaultValue={quantity}
          onChange={({ target: { value } }) => setQuantity(value)}
        />
      </Form.Group>
      <InputGroup>
        <Form.Label>Product price</Form.Label>
        <InputGroup.Text>$</InputGroup.Text>
        <FormControl
          type="number"
          name="product price"
          defaultValue={productPrice}
          onChange={({ target: { value } }) => setProductPrice(value)}
          aria-label="Amount"
        />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>
      <Form.Group>
        <Form.Label>Product name</Form.Label>
        <Form.Control
          type="text"
          name="product name"
          defaultValue={productName}
          onChange={({ target: { value } }) => setProductName(value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Pack quantity</Form.Label>
        <Form.Control
          type="number"
          name="pack quantity"
          defaultValue={packQuantity}
          onChange={({ target: { value } }) => setPackQuantity(value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Client name</Form.Label>
        <Form.Control
          type="text"
          name="client name"
          defaultValue={clientName}
          onChange={({ target: { value } }) => setClientName(value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Client email</Form.Label>
        <Form.Control
          type="email"
          name="client email"
          defaultValue={clientEmail}
          onChange={({ target: { value } }) => setClientEmail(value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label onChange={({ target: { value } }) => setActive(value)}>
          Is active
          <Form.Check name="active" defaultChecked label="false" type="radio" id="false-active" />
          <Form.Check name="active" label="true" type="radio" id="true-active" />
        </Form.Label>
      </Form.Group>
      <Button type="submit" onClick={(e) => handleSubmit(e)}>
        {id ? (
          'Update product!'
        ) : (
          'Register product!'
        )}
      </Button>
    </Form>
  );
}
