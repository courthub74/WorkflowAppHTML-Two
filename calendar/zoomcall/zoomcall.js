// first connect to the firebase db

const firebaseConfig = {
    apiKey: "AIzaSyATc5lxId7q3aWvm2bTy2oVjX3JzqJJszE",
    authDomain: "workflowapp-c191d.firebaseapp.com",
    databaseURL: "https://workflowapp-c191d-default-rtdb.firebaseio.com",
    projectId: "workflowapp-c191d",
    storageBucket: "workflowapp-c191d.appspot.com",
    messagingSenderId: "205004352373",
    appId: "1:205004352373:web:89d233c2cdc4e4ccbf413c"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// create a reference for your database (give it a name to id by in firebase)
    // access the fb db
    // name it (set it's reference)
    // store that all in a variable
var firebaseZoomCallRef = firebase.database().ref("zooms");

// test print
console.log("Here is the DB object for the firebaseZoomCallRef:", firebaseZoomCallRef);

// window add event listener for form submit
window.addEventListener('load', () => {
    // query the form field for submit button
    const form = document.querySelector("#zoomform");

    // query each input field
        // get the input.value for each

    // NAME field
    const name = document.querySelector("#name");
    // DATE field
    const date = document.querySelector("#date");
    // TIME field
    // ISSUE BELOW
    // try to get each input-field by each input clicked on
        // if input is pressed get tile id and change that
    // rendered by parent div
    var property = document.getElementById("timebuttons");
    // add event listener to each button
    property.addEventListener('click', (e) => {
        // if 2pm change the button style to opposite colors
            // when clicked the first time
        if(e.target && e.target.id === "two"){
            // test print the target
            console.log(e.target.value);
            // HERE we get the input container 
                // and change the background and border
            // NOW get the input-container
            var containtwo = document.getElementById("containertwo");
            // test print 
            console.log('Container Two:', containtwo);
            // NOW change the background color
            containtwo.style.backgroundColor = "#4375C0";
            // change the border
            containtwo.style.border = "#ffffff solid 1px";
            // NOW get the label by id
            var labeltwo = document.getElementById("labeltwo");
            // test print
            console.log('Label Two:', labeltwo);
            // NOW change the text color through label
            labeltwo.style.color = "#ffffff";
        } else {
            // if target NOT 2 (or another button pressed)
            //then change it back
            if (e.target && e.target.id !== "two"){
                // change color back
                // NOW get the input-container
                var containtwo = document.getElementById("containertwo");
                // NOW change the background color
                containtwo.style.backgroundColor = "#ffffff";
                // change the border
                containtwo.style.border = "none";
                // in order to change the label 
                // retrieve it by id
                var labeltwo = document.getElementById("labeltwo");
                 // change the text color
                labeltwo.style.color = "#4375C0";
            }
        }
        // if 3pm change the button style to opposite colors
            // when clicked the first time
        if(e.target && e.target.id === "three"){
            // test print the target
            console.log(e.target.value);
            // HERE we get the input container 
                // and change the background and border
            // NOW let's get the input-container
            var containthree = document.getElementById("containerthree");
            // test print
            console.log('Container Three:', containthree);
            // NOW change the background color
            containthree.style.backgroundColor = "#4375C0";
            // change the border
            containthree.style.border = "#ffffff solid 1px";
            // NOW get the label by id
            var labelthree = document.getElementById("labelthree");
            // test print
            console.log('Label Three:', labelthree);
            // change the text color through label
            labelthree.style.color = "#ffffff";
        } else {
            // if target NOT 3 (or another button pressed)
                // then change it back
            if (e.target && e.target.id !== "three"){
                // change color back
                // NOW get the input-container
                var containthree = document.getElementById("containerthree");
                // NOW change the background color
                containthree.style.backgroundColor = "#ffffff";
                // change the border
                containthree.style.border = "none";
                // in order to change the label 
                // retrieve it by id
                var labelthree = document.getElementById("labelthree");
                    // change the text color
                labelthree.style.color = "#4375C0";
                }
        }
        // if 4pm change the button style to opposite colors
            // when clicked the first time
        if(e.target && e.target.id == "four"){
            // test print the target
            console.log(e.target.value);
            // HERE we get the input container 
                // and change the background and border
            // NOW let's get the input-container
            var containfour = document.getElementById("containerfour");
            // test print
            console.log('Container Four:', containfour);
            // change the background color
            containfour.style.backgroundColor = "#4375C0";
            // change the border
            containfour.style.border = "#ffffff solid 1px";
            // HERE we change the text color for the label
            // NOW get the label by id
            var labelfour = document.getElementById("labelfour");
            // test print
            console.log('Label Four:', labelfour);
            // change the text color through label
            labelfour.style.color = "#ffffff";
        } else {
            if(e.target && e.target.id != "four"){
                // change color back
                var containfour = document.getElementById("containerfour");
                // change back background color
                containfour.style.backgroundColor = "#ffffff";
                // no need to change border
                // HERE we change the text color for the label
                // NOW get the label by id
                var labelfour = document.getElementById("labelfour");
                // change the label text color
                labelfour.style.color = "#4375C0";
            }
        }
        // if 5pm change the button style to opposite colors
            // when clicked the first time
        if(e.target && e.target.id == "five"){
            console.log(e.target.value);
            // HERE we get the input container 
                // and change the background and border
            // NOW let's get the input-container
            var containfive = document.getElementById("containerfive");
            // test print
            console.log('Container Five:', containfive);
            // change the background color
            containfive.style.backgroundColor = "#4375C0";
            // change the border
            containfive.style.border = "#ffffff solid 1px";
            // HERE we change the text color for the label
            // NOW get the label by id
            var labelfive = document.getElementById("labelfive");
            // test print
            console.log('Label Five:', labelfive);
            // change the text color through label
            labelfive.style.color = "#ffffff";
        } else {
            if (e.target && e.target.id != "five"){
                // change color back
                var containfive = document.getElementById("containerfive");
                // change back background color
                containfive.style.backgroundColor = "#ffffff";
                // no need to change border
                // HERE we change the text color for the label
                // NOW get the label by id
                var labelfive = document.getElementById("labelfive");
                // change the label text color
                labelfive.style.color = "#4375C0";
            }
        }
        // if 6pm change the button style to opposite colors
            // when clicked the first time
        if(e.target && e.target.id == "six"){
            console.log(e.target.value);
            // HERE we get the input container 
                // and change the background and border
            // NOW let's get the input-container
            var containsix = document.getElementById("containersix");
            // test print
            console.log('Container Six:', containsix);
            // change the background color
            containsix.style.backgroundColor = "#4375C0";
            // change the border
            containsix.style.border = "#ffffff solid 1px";
            // HERE we change the text color for the label
            // NOW get the label by id
            var labelsix = document.getElementById("labelsix");
            // test print
            console.log('Label Six:', labelsix);
            // change the text color through label
            labelsix.style.color = "#ffffff";
        } else {
            if (e.target && e.target.id != "six"){
                // change color back
                var containsix = document.getElementById("containersix");
                // change back background color
                containsix.style.backgroundColor = "#ffffff";
                // no need to change border
                // HERE we change the text color for the label
                // NOW get the label by id
                var labelsix = document.getElementById("labelsix");
                // change the label text color
                labelsix.style.color = "#4375C0";
            }
        }
        // if 7pm change the button style to opposite colors
            // when clicked the first time
        if(e.target && e.target.id == "seven"){
            // test print the target
            console.log(e.target.value);
            // HERE we get the input container 
                // and change the background and border
            // NOW let's get the input-container
            var containseven = document.getElementById("containerseven");
            // test print
            console.log('Container Seven:', containseven);
            // change the background color
            containseven.style.backgroundColor = "#4375C0";
            // change the border
            containseven.style.border = "#ffffff solid 1px";
            // HERE we change the text color for the label
            // NOW get the label by id
            var labelseven = document.getElementById("labelseven");
            // test print
            console.log('Label Seven:', labelseven);
            // change the text color through label
            labelseven.style.color = "#ffffff";
        } else {
            if (e.target && e.target.id != "seven"){
                // change color back
                var containseven = document.getElementById("containerseven");
                // change back background color
                containseven.style.backgroundColor = "#ffffff";
                // no need to change border
                // HERE we change the text color for the label
                // NOW get the label by id
                var labelseven = document.getElementById("labelseven");
                // change the label text color
                labelseven.style.color = "#4375C0";
            }
        }
        // NOW print that value to the div like the other fields
            // somehow send it to the form
        const timevar = e.target.value;
        console.log("This is the time pressed: ",timevar);
        // function for the Timebuttons
        // get's the value from the button by id
        // send it with the press of the submit button
    });

    // PHONE field
    const phone = document.querySelector("#phone");
    // TOPIC field
    const topic = document.querySelector("#topic");
    // LINK field
    const link = document.querySelector("#link");

    // FORM field
    // query select the form in order to 
    // add event listener to the submit button repping the form
        // when clicked, send data from each queried input
            // to the firebase db
                // most likely you will place it in key value form
        // FOR THE TIME BUTTONS you will change the color back to original

    // add event listener to the form submit button
    form.addEventListener('submit', (e) => {
        // keeps page from refreshing
        e.preventDefault();
        // test print the submit button
        console.log("Zoom submit button pressed");
        // for NAME
        // get the value of the 'name' variable
            // store it in a variable
        const zoomname = name.value;
        // Error handling
            // if no value entered just alert
        if (!zoomname) {
            alert("Please fill out the name field");
            return;
        }
        // clear the name field after button pressed
        name.value = '';

        // test print
        console.log(zoomname);

        // push to firebase from here

        // for DATE
        // get the value of the 'date' variable
            // store it in a variable
        const zoomdate = date.value;
        // Error handling
            // if no value entered just alert
        if (!zoomdate) {
            alert("Please fill out the date field");
            return;
        }
        // clear the date field after button pressed
        date.value = 'Select Here';

        // test print
        console.log(zoomdate);



        // for TIME VALUES

        // TIME input fields go under the same variable
        const zoomtimes = document.querySelector('input[name="timebutt"]:checked').value;
        // Error handling
            // if no value entered just alert
        if (!zoomtimes) {
            alert("Please select a time");
            return;
        }

        // CLEAR THE TIME BUTTONS
        // NOW change the style to original colors after submit button pressed

        // 2PM
        // HERE we get the input container 
                // and change the background and border
        // get the container for 2pm
        var containtwo = document.getElementById("containertwo");
        // clear the field button
        // twopm.value = '';
        // change the style back
        containtwo.style.backgroundColor = "#ffffff";
        containtwo.style.border = "none";
        // get the label 
        var labeltwo = document.getElementById("labeltwo");
        // change the text style back
        labeltwo.style.color = "#4375C0";


        // 3PM
        // HERE we get the input container 
                // and change the background and border
        // get the container for 3pm
        var containthree = document.getElementById("containerthree");
        // change the style back
        containthree.style.backgroundColor = "#ffffff";
        containthree.style.border = "none";
        // get the label
        var labelthree = document.getElementById("labelthree");
        // change the text style back
        labelthree.style.color = "#4375C0";


        // 4PM
        // HERE we get the input container 
                // and change the background and border
        // get the container for 4pm
        var containfour = document.getElementById("containerfour");
        // test print
        console.log(containfour);
        // change the style back
        containfour.style.backgroundColor = "#ffffff";
        containfour.style.border = "none";
        // get the label
        var labelfour = document.getElementById("labelfour");
        // change the text style back
        labelfour.style.color = "#4375C0";

        // 5PM
        // HERE we get the input container 
                // and change the background and border
        // get the container for 5pm
        var containfive = document.getElementById("containerfive");
        // test print
        console.log(containfive);
        // change the style back
        containfive.style.backgroundColor = "#ffffff";
        containfive.style.border = "none";
        // get the label
        var labelfive = document.getElementById("labelfive");
        // change the text style back
        labelfive.style.color = "#4375C0";

        // 6PM
        // HERE we get the input container 
                // and change the background and border
        // get the container for 6pm
        var containsix = document.getElementById("containersix");
        // test print
        console.log(containsix);
        // change the style back
        containsix.style.backgroundColor = "#ffffff";
        containsix.style.border = "none";
        // get the label
        var labelsix = document.getElementById("labelsix");
        // change the text style back
        labelsix.style.color = "#4375C0";

        // 7PM
        // HERE we get the input container 
                // and change the background and border
        // get the container for 7pm
        var containseven = document.getElementById("containerseven");
        // test print
        console.log(containseven);
        // change the style back
        containseven.style.backgroundColor = "#ffffff";
        containseven.style.border = "none";
        // get the label
        var labelseven = document.getElementById("labelseven");
        // change the text style back
        labelseven.style.color = "#4375C0";

        // test print the zoom time checked
        console.log('Time submitted is:', zoomtimes);

        // for PHONE
        // get the value of the 'date' variable
            // store it in a variable
        const zoomphone = phone.value;
        // Error handling
            // if no value entered just alert
        if (!zoomphone) {
            alert("Please fill out the phone field");
            return;
        }
        // clear the date field after button pressed
        phone.value = '';

        // test print
        console.log(zoomphone);

        // push to firebase from here

        // for TOPIC
        // get the value of the 'topic' variable
            // store it in a variable
        const zoomtopic = topic.value;
        // Error handling
            // if no value entered just alert
        if (!zoomtopic) {
            alert("Please fill out the topic field");
            return;
        }
        // clear the date field after button pressed
        topic.value = '';

        // test print
        console.log(zoomtopic);

        // push to firebase from here

        // for LINK
        // get the value of the 'topic' variable
            // store it in a variable
        const zoomlink = link.value;
        // Error handling
            // if no value entered just alert
        if (!zoomlink) {
            alert("Please fill out the zoomlink field");
            return;
        }
        // clear the date field after button pressed
        link.value = '';

        // test print
        console.log(zoomlink);

        // clear the timefield field button (perhaps)

        // NOW grab the Zoom Call Submitted div by id and change the HTML
        document.getElementById("submit").innerHTML = "Submitted!";

        // push to firebase from here
        // create a new variable
        // push to fb list but in the new variable 
            // set all of the inputs into a library
        var newZoomRef = firebaseZoomCallRef.push();
        newZoomRef.set({
            name: zoomname,
            date: zoomdate,
            time: zoomtimes,
            phone: zoomphone,
            topic: zoomtopic,
            link: zoomlink,
        });
    });
});




