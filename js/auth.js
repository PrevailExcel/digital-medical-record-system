class Auth {
    // setup the class and hide the body by default
   constructor() {
       document.querySelector("body").style.display = "none";
       const auth = localStorage.getItem("auth");
       this.validateAuth(auth);
   }
   // check to see if the localStorage item passed to the function is valid and set
   validateAuth(auth) {
       if (!auth) {
           window.location.replace("/index.html");
       } else {
           document.querySelector("body").style.display = "block";
       }
   }
   
   // will set the token in localStorage item and redirect to dashboard  screen
   login() {
    // Make call to server for token,
    // get it and then save it.
        var token = "509ec58a-893b-431c-89aa-d1cd720725f5";
       localStorage.setItem("auth", token);
       window.location.replace("/dashboard.html");
   }

   // will remove the localStorage item and redirect to login  screen
   logOut() {
       localStorage.removeItem("auth");
       window.location.replace("/index.html");
   }
}
export const auth = new Auth();