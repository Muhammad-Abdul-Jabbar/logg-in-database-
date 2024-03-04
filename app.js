
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAGy0jDfA06NeMCrAEK4b071YJ-sQClTFc",
    authDomain: "sign-fa67a.firebaseapp.com",
    projectId: "sign-fa67a",
    storageBucket: "sign-fa67a.appspot.com",
    messagingSenderId: "371599605888",
    appId: "1:371599605888:web:8005ce4af67836dca6e665"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 const auth = getAuth()

 var firstname = document.getElementById("firstname")
 var lastname = document.getElementById("lastname")
 var email = document.getElementById("Email")
 var password = document.getElementById("password")

 window.signup = function(e){
    e.preventDefault();
    var obj = {
        firstname:firstname.value,
        lastname:lastname.value,
        email:email.value,
        password:password.value,
    }
    createUserWithEmailAndPassword(auth, obj.email,obj.password)
    .then(function(success){
        alert("signup successfully")
    })
    .catch(function(err){
        alert("error" + err)
    })
    console.log(obj)
 };
 
