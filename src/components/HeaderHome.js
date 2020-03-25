import React, { Component } from "react";

class HeaderHome extends Component {
    render() {
        return (
            <div className="header">
                <nav className="navbar navbar-light bg-light">
                    <a
                        className="navbar-brand"
                        href="https://cesar4rroyo.github.io/myPortfolio/"
                    >
                        <img
                            src="icon.png"
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                            alt=""
                        />
                        React and Firebase project
                    </a>
                    {this.props.children}
                </nav>
            </div>
        );
    }
}

export default HeaderHome;
