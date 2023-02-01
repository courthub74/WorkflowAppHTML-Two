// Send it to the Database first

// config firebase
const firebaseConfig = {
    apiKey: "AIzaSyATc5lxId7q3aWvm2bTy2oVjX3JzqJJszE",
    authDomain: "workflowapp-c191d.firebaseapp.com",
    databaseURL: "https://workflowapp-c191d-default-rtdb.firebaseio.com",
    projectId: "workflowapp-c191d",
    storageBucket: "workflowapp-c191d.appspot.com",
    messagingSenderId: "205004352373",
    appId: "1:205004352373:web:89d233c2cdc4e4ccbf413c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// create the reference point of your database
var freelanceFormDB = firebase.database().ref("freelance");

// TO DATABASE
// Event Listener to submit button(get the submit button ID)
document.querySelector("#new-task-submit").addEventListener('click', () => {
    // set a variable to get the value of the input field
    const freelanceinput = document.getElementById('new-task-input');

    // Error handling 
    if (!freelanceinput){
        alert("Please enter your freelance job");
        return;
    }
    // push the value to the firebase reference point
    freelanceFormDB.push(freelanceinput);
    // test print the input
    console.log(freelanceinput);
});