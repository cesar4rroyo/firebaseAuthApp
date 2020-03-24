import React, { useCallback } from "react";
import fire from "../config/fire";
import { withRouter } from "react-router";
import Header from "./Header";

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await fire
                    .auth()
                    .createUserWithEmailAndPassword(
                        email.value,
                        password.value
                    );
                history.push("/");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    return (
        <div className="container_app">
            <Header />
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
                <form onSubmit={handleSignUp}>
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
                        <label for="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            autoComplete="off"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary ">
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
};

export default withRouter(SignUp);
