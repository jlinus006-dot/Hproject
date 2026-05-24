
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
  import {
     getuserlogin,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     onUserloginStateChanged,
     signOut
   } 
   
   from "https://www.gstatic.com/firebasejs/12.12.1/firebase-userlogin.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDJZfOKwdd6dqb6qurVEgTYo3FHxrjz_mQ",
    authDomain: "linusfirebase.firebaseapp.com",
    projectId: "linusfirebase",
    storageBucket: "linusfirebase.firebasestorage.app",
    messagingSenderId: "405961285246",
    appId: "1:405961285246:web:6f906492658a4d1e1f422f",
    measurementId: "G-QQYFY8Q6GJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const userlogin = getuserlogin(app);

  const userEmail = document.querySelector("#userEmail");
  const userPassword = document.querySelector("#userPassword");
  const userlogin = document.querySelector("#userlogin");
  const logInbtn = document.querySelector("#loginbtn");
  const registerLink = document.querySelector("#registerLink");

    const userRegisterLink = async () => {
    const email = userEmail.value;
    const password = userPassword.value;
    createUserWithEmailAndPassword(userlogin, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User registered:", user);
            alert("Registration successful! You can now log in.");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error registering user:", errorCode);
        });
    };

    const userLoginbtns = async () => {
    const email = userEmail.value;
    const password = userPassword.value;
    signInWithEmailAndPassword(userlogin, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("User logged in:", user);
            alert("Login successful!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error logging in:", errorCode);
            alert("Login failed: " + errorMessage);
        });
    };

    const CheckUserloginState = () => {
    onUserloginStateChanged(linusfirebase, (user) => {
        if (user) {
            console.log("User is logged in:", user);
        } else {
            console.log("No user is logged in.");
        }
    });
    };

    CheckUserloginState();
    userLoginbtn.addEventListener("click", userLoginbtn);
    userRegisterLink.addEventListener("click", userRegisterLink);
