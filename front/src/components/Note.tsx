import { FC } from "react";
import Container from "react-bootstrap/Container";

type NoteProps = {
  name?: string;
  content: string;
  id: string;
};

const Note: FC<NoteProps> = ({ name, content, id }) => {
  return (
    <Container className="bg-warning p-3 m-3 w-25 shadow rounded ">
      <h6>{name}</h6>
      <p className="">
        {content}
      </p>
    </Container>
  );
};

export default Note;
