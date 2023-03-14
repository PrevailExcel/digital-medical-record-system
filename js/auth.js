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
    login(response) {

        // var token = "509ec58a-893b-431c-89aa-d1cd720725f5"; //delete or comment this.
        var token = response.token // Uncomment this when the server is ready

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