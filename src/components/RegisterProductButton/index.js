import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function RegisterProductButton() {
  const history = useHistory();
  return (
    <Button
      className="w-100"
      onClick={() => history.push('/item')}
    >
      Register a product!
    </Button>
  );
}
