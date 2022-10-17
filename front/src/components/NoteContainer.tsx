import { useState, useEffect } from "react";
import Axios from "axios";
import Container from "react-bootstrap/Container";
import Note from "./Note";
import { INote } from "./Note";
import NoteModal from "./NoteModal";

const apiPrefix = "http://localhost:3001/";

const NoteContainer = () => {
    const [notes, setNotes] = useState<any>([]);
    const [activeNote, setActiveNote] = useState<INote>({} as INote);
    const [editModalOpen, setEditModalOpen] = useState(false);

    useEffect(() => {
        Axios.get(apiPrefix + "note").then((res) => setNotes(res.data));
    }, []);

    console.log(notes);

    const onClickNote = (e: any, note: INote) => {
        setActiveNote(note);
        setEditModalOpen(true);
    };

    const closeEditModal = () => {
        setActiveNote({} as INote);
        setEditModalOpen(false);
    };

    const onSaveNote = (e: any, note: INote) => {
        e.preventDefault();

        throw new Error("Not implemented");
    };

    const onDeleteNote = (e: any, note: INote) => {
        e.preventDefault();
        throw new Error("Not implemented");
    };

    return (
        <Container className="d-flex flex-wrap" role="button">
            <NoteModal
                note={activeNote}
                modalOpen={editModalOpen}
                closeModal={closeEditModal}
                saveNote={onSaveNote}
                deleteNote={onDeleteNote}
            />
            {notes.map((note: INote) => (
                <Note key={note._id} note={note} onClickNote={onClickNote} />
            ))}
        </Container>
    );
};

export default NoteContainer;
