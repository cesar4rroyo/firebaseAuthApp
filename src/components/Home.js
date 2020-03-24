import React, { Component } from "react";
import fire from "../config/fire";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.logOut = this.logOut.bind(this);
    }
    logOut() {
        fire.auth().signOut();
    }
    componentDidMount() {
        var user = fire.auth().currentUser;
        var name, email, photoUrl, uid, emailVerified;
        if (user != null) {
            name = user.displayName;
            email = user.email;
            photoUrl = user.photoURL;
            emailVerified = user.emailVerified;
            uid = user.uid;
        }
    }

    // <form className="datos">
    //                 <div className="row">
    //                     <div className="col">
    //                         <label htmlFor="exampleInputEmail1">
    //                             First Name
    //                         </label>
    //                         <input
    //                             type="text"
    //                             name="nombre"
    //                             className="form-control"
    //                             // placeholder="First name"
    //                         />
    //                     </div>
    //                     <div className="col">
    //                         <label htmlFor="exampleInputEmail1">
    //                             Last Name
    //                         </label>
    //                         <input
    //                             type="text"
    //                             name="apelllido"
    //                             className="form-control"
    //                             // placeholder="Last name"
    //                         />
    //                     </div>
    //                 </div>
    //             </form>

    render() {
        var user = fire.auth().currentUser;
        if (user != null) {
            user.providerData.forEach(function(profile) {
                console.log("Sign-in provider: " + profile.providerId);
                console.log("  Provider-specific UID: " + profile.uid);
                console.log("  Name: " + profile.displayName);
                console.log("  Email: " + profile.email);
                console.log("  Photo URL: " + profile.photoURL);
            });
        }
        return (
            <div className="card">
                <h3>You are Logged in!!</h3>
                <button onClick={this.logOut}>Log Out</button>
            </div>
        );
    }
}
export default Home;
