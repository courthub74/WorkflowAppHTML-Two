// JS for calendar


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

// REFERENCE THE DATABASES

// ZOOMS
var firebaseZoomCallRef = firebase.database().ref("zooms");

// test print
console.log("Here is the DB for the firebaseZooms", firebaseZoomCallRef);

// PHONE CALLS
// IN PERSONS
// APPEARENCES 
// DEADLINES

// gather info
// use conditionals to determine each
// 

// TO SEND THE CLICKED DATE OVER TO
    // MAKE APPOINTMENT PAGE
// Get the first date
let first = document.getElementById("first").value;
console.log('The first date:', first);
localStorage.setItem("DATE1", first);