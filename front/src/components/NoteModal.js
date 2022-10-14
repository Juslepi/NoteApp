import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const NoteModal = () => {
  const submitNote = (e) => {
    e.preventDefault();

    throw new Error("Not implemented");
  };

  const deleteNote = (e) => {
    throw new Error("Not implemented");
  };

  return (
    <Modal>
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
