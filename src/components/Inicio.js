import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../Auth";
import fire from "../config/fire";
import { Link } from "react-router-dom";
import Header from "./Header";

const Inicio = ({ history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await fire
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );
    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }
    return (
        <div className="container_app">
            <Header />
            <div className="container">
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                            Email address
                        </label>
                        <input
                            name="email"
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            autoComplete="off"
                        />
                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            autoComplete="off"
                        />
                    </div>
                    <button
                        to="/home"
                        type="submit"
                        className="btn btn-success"
                    >
                        Login
                    </button>
                    <Link to="/signup" className="btn btn-primary ml-2">
                        Signup
                    </Link>
                </form>
            </div>
        </div>
    );
};
export default withRouter(Inicio);
