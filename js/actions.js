import { users, front, patient } from "./data.js";
import { auth } from "./auth.js";

// API endpoint
const base_url = 'https://dummyjson.com/';
const db = JSON.parse(localStorage.getItem("db"));
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Add Sidebar to all pages
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

// Loader controls
function showLoading() {
    $("#loading").show();
}

function hideLoading() {
    $("#loading").hide();
}

function addDb() {

    var dbt = {
        students: [],
        patient: [],
        front: [12, 48, 53, 60]
    };

    if (!localStorage.getItem("db")) {
        dbt.students.push(
            {
                regno: '2018514100',
                name: 'Nnanna Johnson Emeka',
                faculty: 'Physical Science',
                department: 'Computer Science',
                history: 3,
                data: {
                    Appearance: "Amber",
                    pH: "Neutral",
                    Protein: "null",
                    Glucose: "null",
                    Ketones: "null",
                    Bilirubin: "null",
                    Urobilinogen: "null",
                    "Blood (Lysed)": "null",
                    WBCs: "Couldn't fathom the writing",
                    RBCs: "null",
                    Casts: "null",
                    "T.Vaginalis": "null",
                    "Yeast Cells": "null",
                    Hb: 11.7,
                    "Hb - Genotype": "AA",
                    'Blood Group': "A",
                    'g/ dl': "73 %",
                    'Rh"D"': "Positive",
                    'VDRL': "Negative",
                    HBsAg: "Negative",
                    history: [
                        {
                            title: 'First title of the history',
                            body: 'Bala blu cassava highway from electricty garri bulaba agbado youths townhall broooom tia-tia highway 50million. Umbreleda garri electricty down-payment army army umbreleda. Recruit agbado corn transmission broooom electricty. Line agbado eba eba bala transmission electricty electricty townhall agbado recruit generated. ',
                            date: '23 Feb, 2023'
                        },
                        {
                            title: 'Second title of the history',
                            body: 'Bala blu cassava highway from electricty garri bulaba agbado youths townhall broooom tia-tia highway 50million. Umbreleda garri electricty down-payment army army umbreleda. Recruit agbado corn transmission broooom electricty. Line agbado eba eba bala transmission electricty electricty townhall agbado recruit generated. ',
                            date: '24 Feb, 2023'
                        },
                        {
                            title: 'Third title of the history',
                            body: 'Bala blu cassava highway from electricty garri bulaba agbado youths townhall broooom tia-tia highway 50million. Umbreleda garri electricty down-payment army army umbreleda. Recruit agbado corn transmission broooom electricty. Line agbado eba eba bala transmission electricty electricty townhall agbado recruit generated. ',
                            date: '7 Mar, 2023'
                        },
                    ],
                    notes: [
                        {
                            title: 'Wille Doctor\'s note',
                            body: 'Bala blu cassava highway from electricty garri bulaba agbado youths townhall broooom tia-tia highway 50million. Umbreleda garri electricty down-payment army army umbreleda. Recruit agbado corn transmission broooom electricty. Line agbado eba eba bala transmission electricty electricty townhall agbado recruit generated. ',
                            date: '23 Feb, 2023'
                        },
                        {
                            title: 'Second Doctor\'s note',
                            body: 'Bala blu cassava highway from electricty garri bulaba agbado youths townhall broooom tia-tia highway 50million. Umbreleda garri electricty down-payment army army umbreleda. Recruit agbado corn transmission broooom electricty. Line agbado eba eba bala transmission electricty electricty townhall agbado recruit generated. ',
                            date: '24 Feb, 2023'
                        },
                    ]

                }
            },
            {
                regno: '2018514101',
                name: 'Chimeremeze Prevail Exccellent',
                faculty: 'Physical Science',
                department: 'Computer Science',
                history: 3,
                data: {
                    Appearance: "Amber",
                    pH: "Neutral",
                    Protein: "null",
                    Glucose: "null",
                    Ketones: "null",
                    Bilirubin: "null",
                    Urobilinogen: "null",
                    "Blood (Lysed)": "null",
                    WBCs: "Couldn't fathom the writing",
                    RBCs: "null",
                    Casts: "null",
                    "T.Vaginalis": "null",
                    "Yeast Cells": "null",
                    Hb: 11.7,
                    "Hb - Genotype": "AA",
                    'Blood Group': "A",
                    'g/ dl': "73 %",
                    'Rh"D"': "Positive",
                    'VDRL': "Negative",
                    HBsAg: "Negative",
                    history: [
                        {
                            title: 'First title of the history',
                            body: 'Bala blu cassava highway from electricty garri bulaba agbado youths townhall broooom tia-tia highway 50million. Umbreleda garri electricty down-payment army army umbreleda. Recruit agbado corn transmission broooom electricty. Line agbado eba eba bala transmission electricty electricty townhall agbado recruit generated. ',
                            date: '23 Feb, 2023'
                        },
                        {
                            title: 'Second title of the history',
                            body: 'Bala blu cassava highway from electricty garri bulaba agbado youths townhall broooom tia-tia highway 50million. Umbreleda garri electricty down-payment army army umbreleda. Recruit agbado corn transmission broooom electricty. Line agbado eba eba bala transmission electricty electricty townhall agbado recruit generated. ',
                            date: '24 Feb, 2023'
                        },
                        {
                            title: 'Third title of the history',
                            body: 'Bala blu cassava highway from electricty garri bulaba agbado youths townhall broooom tia-tia highway 50million. Umbreleda garri electricty down-payment army army umbreleda. Recruit agbado corn transmission broooom electricty. Line agbado eba eba bala transmission electricty electricty townhall agbado recruit generated. ',
                            date: '7 Mar, 2023'
                        },
                    ],
                    notes: [
                        {
                            title: 'Wille Doctor\'s note',
                            body: 'Bala blu cassava highway from electricty garri bulaba agbado youths townhall broooom tia-tia highway 50million. Umbreleda garri electricty down-payment army army umbreleda. Recruit agbado corn transmission broooom electricty. Line agbado eba eba bala transmission electricty electricty townhall agbado recruit generated. ',
                            date: '23 Feb, 2023'
                        },
                        {
                            title: 'Second Doctor\'s note',
                            body: 'Bala blu cassava highway from electricty garri bulaba agbado youths townhall broooom tia-tia highway 50million. Umbreleda garri electricty down-payment army army umbreleda. Recruit agbado corn transmission broooom electricty. Line agbado eba eba bala transmission electricty electricty townhall agbado recruit generated. ',
                            date: '24 Feb, 2023'
                        },
                    ]

                }
            },
            {
                regno: '2018514102',
                name: 'Odumodu Elijah Precious',
                faculty: 'Physical Science',
                department: 'Mathematics',
                history: 3,
                data: {
                    Appearance: "Amber",
                    pH: "Neutral",
                    Protein: "null",
                    Glucose: "null",
                    Ketones: "null",
                    Bilirubin: "null",
                    Urobilinogen: "null",
                    "Blood (Lysed)": "null",
                    WBCs: "Couldn't fathom the writing",
                    RBCs: "null",
                    Casts: "null",
                    "T.Vaginalis": "null",
                    "Yeast Cells": "null",
                    Hb: 11.7,
                    "Hb - Genotype": "AA",
                    'Blood Group': "A",
                    'g/ dl': "73 %",
                    'Rh"D"': "Positive",
                    'VDRL': "Negative",
                    HBsAg: "Negative",
                    history: [
                        {
                            title: 'First title of the history',
                            body: 'Bala blu cassava highway from electricty garri bulaba agbado youths townhall broooom tia-tia highway 50million. Umbreleda garri electricty down-payment army army umbreleda. Recruit agbado corn transmission broooom electricty. Line agbado eba eba bala transmission electricty electricty townhall agbado recruit generated. ',
                            date: '23 Feb, 2023'
                        },
                        {
                            title: 'Second title of the history',
                            body: 'Bala blu cassava highway from electricty garri bulaba agbado youths townhall broooom tia-tia highway 50million. Umbreleda garri electricty down-payment army army umbreleda. Recruit agbado corn transmission broooom electricty. Line agbado eba eba bala transmission electricty electricty townhall agbado recruit generated. ',
                            date: '24 Feb, 2023'
                        },
                        {
                            title: 'Third title of the history',
                            body: 'Bala blu cassava highway from electricty garri bulaba agbado youths townhall broooom tia-tia highway 50million. Umbreleda garri electricty down-payment army army umbreleda. Recruit agbado corn transmission broooom electricty. Line agbado eba eba bala transmission electricty electricty townhall agbado recruit generated. ',
                            date: '7 Mar, 2023'
                        },
                    ],
                    notes: [
                        {
                            title: 'Wille Doctor\'s note',
                            body: 'Bala blu cassava highway from electricty garri bulaba agbado youths townhall broooom tia-tia highway 50million. Umbreleda garri electricty down-payment army army umbreleda. Recruit agbado corn transmission broooom electricty. Line agbado eba eba bala transmission electricty electricty townhall agbado recruit generated. ',
                            date: '23 Feb, 2023'
                        },
                        {
                            title: 'Second Doctor\'s note',
                            body: 'Bala blu cassava highway from electricty garri bulaba agbado youths townhall broooom tia-tia highway 50million. Umbreleda garri electricty down-payment army army umbreleda. Recruit agbado corn transmission broooom electricty. Line agbado eba eba bala transmission electricty electricty townhall agbado recruit generated. ',
                            date: '24 Feb, 2023'
                        },
                    ]

                }
            });

        // Store the object into storage
        localStorage.setItem("db", JSON.stringify(dbt));
    }
}
addDb();

$(document).ready(function () {
    // Get the current page 
    let page = $('body').data('page');

    if (page == 'result') {

        // Make call and get patient data
        $.ajax({
            url: base_url + 'users/1', // replace 1 wth user reg number
            type: 'get',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('auth'),
                'Content-Type': 'application/json'
            },
            onload: showLoading(),
            success: function (response) { // remember to change "response" to "patient"

                $(".a").text(patient.Appearance)
                $(".b").text(patient.pH)
                $(".c").text(patient.Protein)
                $(".d").text(patient.Glucose)
                $(".e").text(patient.Ketones)
                $(".f").text(patient.Bilirubin)
                $(".g").text(patient.Urobilinogen)
                $(".h").text(patient["Blood (Lysed)"])
                $(".i").text(patient.WBCs)
                $(".j").text(patient.RBCs)
                $(".k").text(patient.Casts)
                $(".l").text(patient["T.Vaginalis"])
                $(".m").text(patient["Yeast Cells"])
                $(".n").text(patient.Hb)
                $(".o").text(patient["Blood Group"])
                $(".p").text(patient["g/ dl"])
                $(".q").text(patient["Rh\"D\""])
                $(".r").text(patient.VDRL)
                $(".s").text(patient.HBsAg)
                $(".t").text(patient["Hb - Genotype"])


                // read the DB
                db.students.forEach((stu) => {
                    if (stu.regno == JSON.parse(localStorage.getItem('user')).regno) {
                        stu.data.history.forEach(user => {
                            var lastSection = $('#hist');
                            var newSection = lastSection.clone(true);
                            newSection.attr('id', JSON.parse(localStorage.getItem('user')).regno);
                            newSection.attr('data-user', user.name);
                            newSection.show()
                            $('#title', newSection).text(user.title);
                            $('#date', newSection).text(user.date);
                            $('#body', newSection).text(user.body);
                            // $('#result_button', newSection).attr('data-user', JSON.stringify(user));
                            lastSection.after(newSection);
                        });
                    }
                });

                db.students.forEach((stu) => {
                    if (stu.regno == JSON.parse(localStorage.getItem('user')).regno) {
                        stu.data.notes.forEach(note => {
                            var lastSection = $('#note');
                            var newSection = lastSection.clone(true);
                            newSection.attr('id', JSON.parse(localStorage.getItem('user')).regno);
                            newSection.show()
                            $('#ntitle', newSection).text(note.title);
                            $('#ndate', newSection).text(note.date);
                            $('#nbody', newSection).text(note.body);
                            // $('#result_button', newSection).attr('data-user', JSON.stringify(user));
                            lastSection.after(newSection);
                        });
                    }
                });

                hideLoading()
            }
        });

        // Get remaining data from local strorage
        $(".full_name").text(JSON.parse(localStorage.getItem('user')).name)
        $(".regno").text(JSON.parse(localStorage.getItem('user')).regno)
        $(".fac").text(JSON.parse(localStorage.getItem('user')).faculty)
        $(".dep").text(JSON.parse(localStorage.getItem('user')).department)
        $(".his").text(JSON.parse(localStorage.getItem('user')).history)

        // Function for History data entry 
        function addHistory() {
            let title = $('#write_title').val();
            let body = $('#write_body').val();
            
            // Set date
            const d = new Date();
            let day = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();

            // write to DB
            db.students.forEach((stu) => {
                if (stu.regno == JSON.parse(localStorage.getItem('user')).regno) {
                    stu.data.history.push(
                        {
                            title: title,
                            body: body,
                            date: day + ' ' + month + ', ' + year
                        }
                    );
                    localStorage.setItem("db", JSON.stringify(db));
                    window.location.reload()
                } else {
                    console.log(stu.data)
                }
            });
        }

        // Function for doctor's note data entry 
        function addNote() {
            let title = $('#write_title').val();
            let body = $('#write_body').val();
            
            // Set date
            const d = new Date();
            let day = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();

            // write to DB
            db.students.forEach((stu) => {
                if (stu.regno == JSON.parse(localStorage.getItem('user')).regno) {
                    stu.data.notes.push(
                        {
                            title: title,
                            body: body,
                            date: day + ' ' + month + ', ' + year
                        }
                    );
                    localStorage.setItem("db", JSON.stringify(db));
                    window.location.reload()
                } else {
                    console.log(stu.data)
                }
            });
        }

        $('#add_history').click(function () {
            $('#type_to_add').text('History')
        });
        $('#add_note').click(function () {
            $('#type_to_add').text('Note')
        });
        $('#save_history_or_note').click(function () {
            if ($('#type_to_add').text() == 'Note') {
                addNote()
            } else {
                addHistory()
            }
        });


    } else if (page == 'dashboard') {
        $("#d1").text(front[1])
        $("#d2").text(front[2])
        $("#d3").text(front[3])
        $("#d4").text(front[0])

        $("#submit").click(function () {
            var query = $("#query").val().trim();

            if (query != "") {

                // Make call and get patient data
                $.ajax({
                    url: base_url + 'users', // replace endpoint
                    type: 'get',
                    onload: showLoading(),
                    // data:{query:query},
                    success: function (response) { // remember to change "response" to "users"
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
                        hideLoading()
                    }
                });


            }
        });

        $("#result_button").click(function () {
            var user = $(this).data('user');
            window.localStorage.setItem('user', JSON.stringify(user))
            location.assign('/result.html?user=' + user.regno)
        });
    } else if (page == 'patients') {

        // Make call and get patient data
        $.ajax({
            url: base_url + 'users', // replace 1 wth user reg number
            type: 'get',
            onload: showLoading(),
            // data:{limit: 5, skip: 10},
            success: function (response) { // remember to change "response" to "users"

                db.students.forEach(user => {
                    var lastSection = $('#row');
                    var newSection = lastSection.clone(true);
                    newSection.attr('id', user.regno);
                    newSection.show()
                    $('#full_name', newSection).text(user.name);
                    $('#regno', newSection).text(user.regno);
                    $('#fac', newSection).text(user.faculty);
                    $('#dep', newSection).text(user.department);
                    $('.result_button', newSection).attr('data-user', JSON.stringify(user));
                    lastSection.after(newSection);
                })

                hideLoading()
            }
        })

        $(".result_button").click(function () {
            var user = $(this).data('user');
            window.localStorage.setItem('user', JSON.stringify(user))
            location.assign('/result.html?user=' + user.regno)
        });
    } else {
    }

    $("#logout").on("click", function () {
        auth.logOut();
    });

    //Login capture
    $("#login_button").on("click", function () {

        let id = $('#staff_id').val();
        let password = $('#password').val();
        // Make call to server for token
        $.ajax({
            url: base_url + 'auth/login',
            type: 'post',
            data: {
                //Delete when server is ready.
                username: 'kminchelle', //for testing
                password: '0lelplR', //for testing

                // id: id,
                // password: password
            },
            onload: showLoading(),
            success: function (response) {
                auth.login(response);
            }
        })
    });

    // Function to add new student data
    $("#add_student").click(function () {
        let name = $('#write_name').val();
        let regno = $('#write_regno').val();
        let phone = $('#write_phone').val();
        let faculty = $('#write_faculty').val();
        let department = $('#write_department').val();

        // write to DB
        db.students.push(
            {
                regno: regno,
                name: name,
                faculty: faculty,
                department: department,
                history: 0,
                phone: phone,
                data: {
                    notes: [],
                    history: []
                }
            }
        );
        localStorage.setItem("db", JSON.stringify(db));
        window.location.reload()
    });

});
