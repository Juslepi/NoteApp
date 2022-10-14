import { useState } from "react";
import Container from "react-bootstrap/Container";

import Note from "./Note";
import { NoteProps as INote } from "./Note";
import NoteModal from "./NoteModal";

const NoteContainer = () => {
  const [activeNote, setActiveNote] = useState<INote>();

  const onClickNote = (e: any) => {
    // setActiveNote(note);
    console.log("vaikee");
  };

  const notes = [
    {
      name: "Note1",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis est et perspiciatis voluptas nisi quisquam animi mollitia earum minus eveniet aperiam, consectetur tenetur nesciunt assumenda molestias vel cum, ipsam repellendus?",
      id: "1",
    },
    {
      name: "Note 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quibusdam suscipit voluptatum! Voluptatem obcaecati ullam, dignissimos id iusto dolores sit voluptatibus corporis quidem nam, fuga maiores excepturi distinctio culpa eius ipsum dolor repellendus consectetur, sapiente omnis! Eaque provident neque cum illo libero quod quis, dolore iure facilis tempore consequatur nisi adipisci pariatur ut a.",
      id: "2",
    },
    {
      name: "Note 3",
      content: "Lorem ipsum dolor sit amet.",
      id: "3",
    },
    {
      name: "Note 4",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      id: "4",
    },
    {
      name: "Note 66",
      content: "How Does it Work?",
      id: "5",
    },
  ];
  return (
    <Container className="d-flex flex-wrap" role="button">
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          onClickNote={onClickNote}
        />
      ))}
      <NoteModal />
    </Container>
  );
};

export default NoteContainer;
