import React, { Component } from 'react'
import * as firebase from "firebase/app";
import "firebase/auth";
var firebaseConfig = {
    apiKey: "AIzaSyDuMbOXcHe9USmZv1YJfPF--Qmt-pYJViQ",
    authDomain: "e-commerce-e25e9.firebaseapp.com",
    databaseURL: "https://e-commerce-e25e9.firebaseio.com",
    projectId: "e-commerce-e25e9",
    storageBucket: "e-commerce-e25e9.appspot.com",
    messagingSenderId: "444543157894",
    appId: "1:444543157894:web:448af30f9c9aa66a"
  };
  firebase.initializeApp(firebaseConfig);

export default class index extends Component {
    googleLogin(){
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log(user.displayName,user.email);
          // ...
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      }
    render() {
        return (
            <div>
                <button onClick={this.googleLogin}>Login</button>
            </div>
        )
    }
}
