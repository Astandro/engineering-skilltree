import logo from "./img/logo.png";
import "./App.css";
import { useState, useEffect } from "react";
import firebase from "firebase";
import Intro from "./components/Intro"
import Skilltree from "./components/Skilltree"
import Profile from "./components/Profile"
import Content from "./components/Content"

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoURL, setPhotoURL] = useState("");
  const [name, setName] = useState("");

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  var firebaseConfig = {
    apiKey: "AIzaSyA7xpdYV4wEJswezNE-el1-inSqibWv3og",
    authDomain: "engineering-skilltree.firebaseapp.com",
    projectId: "engineering-skilltree",
    storageBucket: "engineering-skilltree.appspot.com",
    messagingSenderId: "906391863820",
    appId: "1:906391863820:web:19605a1ba3b0afe77e2429",
  };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // console.log(user)
      setPhotoURL(user.photoURL);
      setName(user.displayName);
    } else {
      console.log("user not logged in");
      window.location.replace("/login.html");
    }
  });

  function logOut() {
    firebase.auth().signOut();
  }

  return (
    <div className="App">
      <div className="ltIE9-hide">
        <div className={isOpen ? "page animated open" : "page animated"}>
          <header>
            <img src={logo} className="logo" onClick={toggleOpen} />
          </header>

          <Intro toggleOpen={toggleOpen} />
          <Skilltree />
          <Profile logOut={logOut} photoURL={photoURL} name={name} />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
