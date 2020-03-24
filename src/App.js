import React, { Component } from "react";
import "./App.css";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Inicio from "./components/Inicio";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

class App extends Component {
    render() {
        return (
            <AuthProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/login" component={Inicio} />
                        <Route exact path="/signup" component={Signup} />
                        <PrivateRoute exact path="/" component={Home} />
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
        );
    }
}
export default App;
