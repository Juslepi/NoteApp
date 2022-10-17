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
    }, [notes]);

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

        try {
            Axios.put(apiPrefix + "note", {
                data: {
                    id: note._id,
                    name: note.name,
                    content: note.content,
                },
            });
            setActiveNote(note);
        } catch (e) {
            console.log(e);
        }
    };

    const onDeleteNote = (e: any) => {
        e.preventDefault();

        try {
            Axios.delete(apiPrefix + "note", { data: { id: activeNote._id } });
            const newNotes = notes.filter(
                (n: INote) => n._id !== activeNote._id
            );
            setNotes(newNotes);
            setActiveNote({} as INote);
            setEditModalOpen(false);
        } catch (e) {
            console.log(e);
        }
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
