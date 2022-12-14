import { FC, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/esm/CloseButton";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { INote } from "./Note";

type NoteModalProps = {
  note: INote;
  modalOpen: boolean;
  closeModal: () => void;
  saveNote: (e: React.MouseEvent<HTMLElement>, note: INote) => void;
  deleteNote: (e: React.MouseEvent<HTMLElement>, note: INote) => void;
};

const NoteModal: FC<NoteModalProps> = ({
  note,
  modalOpen: open,
  closeModal,
  saveNote,
  deleteNote,
}) => {
  const [activeNote, setActiveNote] = useState<INote>({} as INote);

  useEffect(() => {
    setActiveNote(note);
  }, [note]);

  return (
    <Modal show={open}>
      <Modal.Header>
        <Form.Control
          value={activeNote.name}
          onChange={(e) =>
            setActiveNote({ ...activeNote, name: e.target.value })
          }
        ></Form.Control>
        <CloseButton onClick={closeModal} />
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
            <Button variant="danger" onClick={(e) => deleteNote(e, activeNote)}>
              Delete
            </Button>
            <Button onClick={(e) => saveNote(e, activeNote)}>Save Note</Button>
          </Container>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default NoteModal;
