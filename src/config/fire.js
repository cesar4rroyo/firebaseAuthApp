import firebase from "firebase";
import "firebase/auth";
var firebaseConfig = {
    apiKey: "AIzaSyBHBx1By22bx1x9qXcjDOWYCoS_oBfTFjs",
    authDomain: "pruebaapp-7bfcc.firebaseapp.com",
    databaseURL: "https://pruebaapp-7bfcc.firebaseio.com",
    projectId: "pruebaapp-7bfcc",
    storageBucket: "pruebaapp-7bfcc.appspot.com",
    messagingSenderId: "695368278559",
    appId: "1:695368278559:web:f4c4d8fc3330bb64206b2a"
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
