import { FC, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { INote } from "./Note";

type NoteModalProps = {
  note: INote;
  modalOpen?: boolean;
  closeModal: () => void;
};

const NoteModal: FC<NoteModalProps> = ({
  note,
  modalOpen: open,
  closeModal,
}) => {
  
  useEffect(() => {
    setActiveNote(note);
  }, [note]);

  const [activeNote, setActiveNote] = useState<INote>({} as INote);

  const submitNote = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    throw new Error("Not implemented");
  };

  const deleteNote = (e: React.MouseEvent<HTMLButtonElement>) => {
    throw new Error("Not implemented");
  };

  return (
    <Modal show={open}>
      <Modal.Header>
        <Form.Control
          value={activeNote.name}
          onChange={(e) =>
            setActiveNote({ ...activeNote, name: e.target.value })
          }
        ></Form.Control>
        <Button onClick={closeModal}>X</Button>
      </Modal.Header>
      <Modal.Body color="warning">
        <Form>
          <Form.Control
            as="textarea"
            value={activeNote.content}
            onChange={(e) =>
              setActiveNote({ ...activeNote, content: e.target.value })
            }
            rows={12}
            className="mb-3"
          ></Form.Control>
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
