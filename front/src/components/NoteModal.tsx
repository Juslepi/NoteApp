import { FC } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

type NoteModalProps = {
  id?: string;
  name?: string;
  content?: string;
  open?: boolean;
};

const NoteModal: FC<NoteModalProps> = ({ id, name, content, open }) => {
  const submitNote = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    throw new Error("Not implemented");
  };

  const deleteNote = (e: React.MouseEvent<HTMLButtonElement>) => {
    throw new Error("Not implemented");
  };

  return (
    <Modal show={open}>
      <Modal.Body color="warning">
        <Form className="">
          <Form.Control as="textarea" rows={12} className="mb-3"></Form.Control>
          {/* Buttons */}
          <Container className="d-flex justify-content-between">
            <Button variant="danger" onClick={deleteNote}>
              Delete
            </Button>
            <Button type="submit" onClick={submitNote}>
              Save Note
            </Button>
          </Container>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default NoteModal;
