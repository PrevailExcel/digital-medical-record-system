import { users, front, history } from "./data.js";
import { auth } from "./auth.js";

const base_url = '127.0.0.1:8000/';

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("mySidebar");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("mySidebar");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

includeHTML()

$(document).ready(function () {
    let page = $('body').data('page');
    if (page == 'result') {
        $(".full_name").text(JSON.parse(localStorage.getItem('user')).name)
        $(".regno").text(JSON.parse(localStorage.getItem('user')).regno)
        $(".fac").text(JSON.parse(localStorage.getItem('user')).faculty)
        $(".dep").text(JSON.parse(localStorage.getItem('user')).department)
        $(".his").text(JSON.parse(localStorage.getItem('user')).history)

        let myHistory = history.filter(item => item.regno == JSON.parse(localStorage.getItem('user')).regno)
        myHistory.forEach(user => {
            var lastSection = $('#hist');
            var newSection = lastSection.clone(true);
            newSection.attr('id', user.regno);
            newSection.attr('data-user', user.name);
            newSection.show()
            $('#title', newSection).text(user.title);
            $('#date', newSection).text(user.date);
            $('#body', newSection).text(user.body);
            // $('#result_button', newSection).attr('data-user', JSON.stringify(user));
            lastSection.after(newSection);

        });
    } else if (page == 'dashboard') {
        $("#d1").text(front[1])
        $("#d2").text(front[2])
        $("#d3").text(front[3])
        $("#d4").text(front[0])

        $("#submit").click(function () {
            var query = $("#query").val().trim();

            if (query != "") {
                // $.ajax({
                //     url: base_url+'heckUser.php',
                //     type:'post',
                //     data:{query:query},
                //     success:function(response){
                //         var msg = "";
                //         if(response == 1){
                //             window.location = "home.php";
                //         }else{
                //             msg = "Invalid username and password!";
                //         }
                //         $("#message").html(msg);
                //     }
                // });

                users.forEach(user => {

                    var lastSection = $('#ree');
                    var newSection = lastSection.clone(true);
                    newSection.attr('id', 'setthenewid');
                    newSection.attr('data-user', user.name);
                    newSection.show()
                    $('#name', newSection).text(user.name);
                    $('#regno', newSection).text(user.regno);
                    $('#result_button', newSection).attr('data-user', JSON.stringify(user));
                    lastSection.after(newSection);

                });

            }
        });

        $("#result_button").click(function () {
            var user = $(this).data('user');
            window.localStorage.setItem('user', JSON.stringify(user))
            location.assign('/result.html?user=' + user.regno)
        });
    } else if (page == 'patients') {

        users.forEach(user => {
            var lastSection = $('#row');
            var newSection = lastSection.clone(true);
            newSection.attr('id', user.regno);
            newSection.show()            
            $('#full_name', newSection).text(user.name);
            $('#regno', newSection).text(user.regno);
            $('#fac', newSection).text(user.faculty);
            $('#dep', newSection).text(user.department);
            $('#result_button', newSection).attr('data-user', JSON.stringify(user));
            lastSection.after(newSection);

        })

        $("#result_button").click(function () {
            var user = $(this).data('user');
            window.localStorage.setItem('user', JSON.stringify(user))
            location.assign('/result.html?user=' + user.regno)
        });
    } else {
        alert(getat)
    }

    $("#logout").on("click", function () {
        auth.logOut();
    });
});
