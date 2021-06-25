import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import googleLogo from '../../images/google.png';
import { useHistory, useLocation } from 'react-router-dom';

if (firebase.apps.length === 0 ) {
    firebase.initializeApp(firebaseConfig);
 }
const Login = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const history = useHistory();
    const location = useLocation();
    const [error, setError] = useState('');


    let { from } = location.state || { from: {pathname: "/"}};
    const handleGoogleLogin = () => {
        firebase.auth()
  .signInWithPopup(googleProvider)
  .then((result) => {
    const user = result.user;
    const loggedInUser = {name: user.displayName, email: user.email, image: user.photoURL};
    localStorage.setItem('user', JSON.stringify(loggedInUser));
    history.replace(from);
  }).catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage);
  });
    }
    return (
        <div className="container text-center mt-5 pt-5">
            <button onClick={handleGoogleLogin} className="btn btn-light">Log in with Google  <img width="25px" src={googleLogo} alt="" /></button>
            <p>{error}</p>
        </div>
    );
};

export default Login;