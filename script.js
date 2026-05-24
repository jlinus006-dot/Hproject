const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

function myFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "90px",
    origin: "bottom",
    duration: 1000,
};


// header container
ScrollReveal().reveal(".header__container p", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
    ...scrollRevealOption,
    delay: 2000,
});

// room container
ScrollReveal().reveal(".room__card", {
    ...scrollRevealOption,
    interval: 500,
});

// service container
ScrollReveal().reveal(".service__list li", {
    ...scrollRevealOption,
    interval: 500,
    origin: "right",
});


document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop page reload

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simple check (demo only ⚠️)
  if (username === "admin" && password === "1234") {
    alert("Login successful!");
    window.location.href = "form.html"; // redirect
  } else {
    alert("Invalid username or password");
  }
});

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
  import {
     getloginform,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
     onLoginformStateChanged,
     signOut
   } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-loginform.js";
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
  const loginform = getloginform(app);

  const userEmail = document.querySelector("#userEmail");
  const userPassword = document.querySelector("#userPassword");
  const loginForm = document.querySelector("#loginForm");
  const logInButton = document.querySelector("#loginButton");
  const registerLink = document.querySelector("#registerLink");

    const userRegisterLink = async () => {
    const email = userEmail.value;
    const password = userPassword.value;
    createUserWithEmailAndPassword(loginform, email, password)
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

    const userLoginButton = async () => {
    const email = userEmail.value;
    const password = userPassword.value;
    signInWithEmailAndPassword(loginform, email, password)
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

    const CheckLoginformState = () => {
    onLoginformStateChanged(linusfirebase, (user) => {
        if (user) {
            console.log("User is logged in:", user);
        } else {
            console.log("No user is logged in.");
        }
    });
    };

    CheckLoginformState();
    userLoginButton.addEventListener("click", userLoginButton);
    userRegisterLink.addEventListener("click", userRegisterLink);

    