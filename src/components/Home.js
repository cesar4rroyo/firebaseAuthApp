import React, { Component } from "react";
import fire from "../config/fire";
import HeaderHome from "./HeaderHome";
import Note from "./Note";
import NoteForm from "./NoteForm";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.logOut = this.logOut.bind(this);
    }
    logOut() {
        fire.auth().signOut();
    }
    llenarDatos() {
        return (
            <div className="container">
                <form className="datos">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="exampleInputEmail1">
                                First Name
                            </label>
                            <input
                                type="text"
                                name="nombre"
                                className="form-control"
                                // placeholder="First name"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="exampleInputEmail1">
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="apelllido"
                                className="form-control"
                                // placeholder="Last name"
                            />
                        </div>
                    </div>
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
                {user.displayName === null ? this.llenarDatos() : null}
                <NoteForm />
                <div className="container" id="container_notes">
                    <Note />
                    <Note />
                    <Note />
                    {console.log(fire.auth().currentUser)}
                </div>
            </div>
        );
    }
}
export default Home;
