import { FC } from "react";
import Container from "react-bootstrap/Container";

export interface INote {
  name?: string;
  content: string;
  id: string;
}

export type NoteProps = {
  note: INote;
  onClickNote: (e: any) => void;
};

const Note: FC<NoteProps> = ({ note, onClickNote }) => {
  return (
    <Container
      className="bg-warning p-3 m-3 w-25 shadow rounded "
      onClick={(e) => onClickNote(e)}
    >
      <h6>{note.name}</h6>
      <p className="">{note.content}</p>
    </Container>
  );
};

export default Note;
