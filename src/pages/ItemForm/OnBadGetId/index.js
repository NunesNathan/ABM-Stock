import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function OnBadGetId() {
  const [timeoutId, setTimeOutId] = useState();

  const history = useHistory();

  const toHome = () => {
    clearTimeout(timeoutId);
    history.push('/');
  };

  useEffect(() => {
    setTimeOutId(setTimeout(toHome, 5000));
  }, []);

  return (
    <Modal show>
      <Modal.Header>
        <Modal.Title>Oops, product not found!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Automatically redirect to stock list in 5 seconds...</Modal.Body>
      <Modal.Footer>
        <Button onClick={toHome} variant="primary">
          Back now!
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
