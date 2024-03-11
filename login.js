
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
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
 
 var email = document.getElementById("email");
 var password = document.getElementById("password");
 window.login= function(e) {
   e.preventDefault();
   var obj = {
     email: email.value,
     password: password.value,
   };
 
   signInWithEmailAndPassword(auth, obj.email, obj.password)
     .then(function (success) {
       alert("logined Successfully")
       var aaaa =  (success.user.uid);
       localStorage.setItem("uid",aaaa)
       console.log(aaaa)
       window.location.href = "UserPage.html";
      // localStorage.setItem(success,user,uid)
       
     })
     .catch(function (err) {
       alert("login error"+err);
     });
 
   console.log(obj);
 }