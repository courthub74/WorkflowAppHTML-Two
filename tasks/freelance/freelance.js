// JS for the Projects Todos

// set up firebase
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
var firebaseFreelanceRef = firebase.database().ref("freelances");

// test print
console.log("Here is the DB object for the firebaseFreelanceRef:", firebaseFreelanceRef);

// NOW lets set up the page through the DOM

// event listener for the elements of the WHOLE PAGE
window.addEventListener('load', () => {
    // Once the page is loaded
    // queryselect the whole form by id
        // you will add the event listener to this
    const form = document.querySelector("#freelance-fill-form");
    // queryselect the input field
    const input = document.querySelector("#new-freelance-input");
    // queryselect the output fields field
    const freelance_list_element = document.querySelector("#freelance_block");

    // NOW populate the list element upon the submit button click
    // THIS part is the form that goes TO the database
    form.addEventListener('submit', (e) =>{
        // keeps page from refreshing
        e.preventDefault();
        // test print the submit button
        console.log("Freelance submit button pressed");
        // get the value of the 'input' variable above and store it in another variable
            // get the input by id
        const freelance = input.value;
        // Error handling
         // if no value entered just alert
        if (!freelance){
            alert("Please fill out the freelance field");
            return;
        }

        // clear the input field after button pressed
        input.value = '';

        // TO DATABASE

        // NOW this is where we push the todo variable to the firebaseTodo db reference
        firebaseFreelanceRef.push({freelance});
        // test the input
        console.log('FREELANCE===', freelance);
    });

    // FROM DATABASE

    // utilize the on function on the db reference
        // based on value
        // pass getProject and errProject functions
            // getProject locates fb db
            // errProject test for errors
                // i.e. permissions, other blocks
});