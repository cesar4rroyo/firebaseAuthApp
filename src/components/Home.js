import React, { Component, useCallback, useContext } from "react";
import fire from "../config/fire";
import { AuthContext } from "../Auth";
import HeaderHome from "./HeaderHome";
import Note from "./Note";
import NoteForm from "./NoteForm";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };
        this.addNote = this.addNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
        this.logOut = this.logOut.bind(this);
        this.db = fire
            .database()
            .ref()
            .child("notes");
    }
    logOut() {
        fire.auth().signOut();
    }

    componentDidMount() {
        const { notes } = this.state;
        this.db.on("child_added", snap => {
            notes.push({
                noteId: snap.key,
                noteContent: snap.val().noteContent
            });
            this.setState({ notes });
        });

        this.db.on("child_removed", snap => {
            for (let i = 0; i < notes.length; i++) {
                if (notes[i].noteId === snap.key) {
                    notes.splice(i, 1);
                }
            }
            this.setState({ notes });
        });
    }

    addNote(note) {
        this.db.push().set({
            noteContent: note
        });
    }

    removeNote(noteId) {
        this.db.child(noteId).remove();
    }

    llenarDatos() {
        return (
            <div className="container">
                <h3>You have to complete your profile!</h3>
                <form className="datos" onSubmit={this.handleProfile}>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="exampleInputEmail1">
                                First Name
                            </label>
                            <input
                                type="text"
                                name="nombre"
                                className="form-control"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="exampleInputEmail1">
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="apellido"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success mt-3">
                        Update!
                    </button>
                </form>
            </div>
        );
    }

    render() {
        const user = fire.auth().currentUser;
        return (
            <div className="container_app" id="container_home">
                <HeaderHome>
                    <button
                        onClick={this.logOut}
                        type="button"
                        className="btn btn-secondary"
                    >
                        Log Out
                    </button>
                </HeaderHome>
                {/* {user.displayName === null ? this.llenarDatos() : null} */}
                <NoteForm addNote={this.addNote} />
                <div className="container" id="container_notes">
                    {this.state.notes.map(note => {
                        return (
                            <Note
                                noteContent={note.noteContent}
                                noteId={note.noteId}
                                key={note.noteId}
                                deleteNote={this.removeNote}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}
export default Home;
