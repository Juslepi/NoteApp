import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const LoginModal = () => {
  const [formDetails, setformDetails] = useState({
    email: "",
    password: "",
  });

  const submit = () => {
    throw new Error("Not implemented")
  }

  return (
    <Modal show={true} centered>
      <Modal.Header closeButton>
        <Modal.Title>Log In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={formDetails.email}
              autoFocus
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setformDetails({ ...formDetails, email: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              value={formDetails.password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setformDetails({ ...formDetails, password: e.target.value })
              }
            ></Form.Control>
          </Form.Group>
          <Button variant="dark" type="submit" onClick={submit}>
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
