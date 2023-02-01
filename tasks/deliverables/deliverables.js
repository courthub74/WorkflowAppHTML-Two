// Send it to the Database first

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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// create a reference for your database (give it a name to id by in firebase)
var firebaseDeliverablesRef = firebase.database().ref("deliverables");

// create a variable to set both deliverable and the crossed
    // do I set it to true here?

// test print 
console.log("Here is the DB object for the firebaseDeliverablesRef:", firebaseDeliverablesRef);

// event listener for the elements of the WHOLE PAGE
window.addEventListener('load', () => {
    // Once the page is loaded
    // query the form field
        // the reason: to add an event listener to the form field
        const form = document.querySelector("#deliverables-fill-form");
        // queryselect the input field
            // the reason: to get the data submitted
        const input = document.querySelector("#deliverables-input");
        // queryselect the output fields field (list-elements)
            // the reason: to place the outputs as items
        const deliverable_list_element = document.querySelector("#deliverables_block");

        // NOW populate the list element upon the submit button click
        // THIS part is the form that goes TO the database
        form.addEventListener('submit', (e) => {

            // keeps page from refreshing
            e.preventDefault();

            // test print the submit button
            console.log("Deliverables submit button pressed");

            // get the value of the 'input' variable above and store it in anoter variable
            const deliverable = input.value;

            // define crossed as false
            const crossed = false;

            // Error handling
            // if no value entered just alert
            if (!deliverable) {
                alert("Please fill out the deliverables");
                return;
            }

            // clear the input field after button pressed
            input.value = '';

            // TO DATABASE

            // NOW this is where we push the todo variable to the firebaseTodo db reference
            // HERE is where you set the list for deliverable and crossed
                // set crossed as false by default
            // firebaseDeliverablesRef.push({deliverable});
            // store the push of fb ref into a variable
            var newDeliverableRef = firebaseDeliverablesRef.push();
            newDeliverableRef.set({
                deliverable,
                crossed: false
            });

            // test print the deliverable and crossed status
            console.log('DELIVERABLE ===', deliverable);
            console.log('CROSSED ===', crossed);
        });

        // FROM DATABASE

        // test print the firebase db object
        // console.log(firebaseDeliverablesRef);

        // utilize the on function on the db reference
        // based on value
        // pass getDeliverable and errDeliverable functions
            // getDeliverable locates fb db in order to get the values
            // errDeliverable test for errors
                // i.e. permissions, other blocks
        firebaseDeliverablesRef.on('value', getDeliverable, errDeliverable);
        // create the getDeliverables function
            // pass the arg 'deliverableitem' which comes from the on function from ABOVE
        function getDeliverable(deliverableitem){
            // console.log('deliverableitem ===', deliverableitem);
            // test print the value of the arg
            console.log(deliverableitem.val())
            // store the value in a variable
            var deliverables = deliverableitem.val();
            // test print the value of the arg
            console.log('deliverables ===', deliverables);

            // NOW get the keys and items entered 
                // to push them to an array 
                    // in order to have access to deleting and editing

            // create an array called data
                // that is going to consist of the data from fb
            var data = [];
            // NOW loop through the projects (input values) and push them into the 
                // data array by Object ids
            Object.keys(deliverables).forEach(element => {
                // test print the todo item with it's key
                console.log('item key and text ===', element, deliverables[element]);
                // NOW push the id (element-keys) and item (project)
                    // to the data array
                data.push({
                    id: element,
                    // item is value with id(key) set to the 'todo' name under the 
                        // firebase todo db list which happens to be deliverables
                            // the last bracket is for the render to locate the new key set 
                                // push the item with the key into the project key name['deliverable']
                                    // this is the name that was orig pushed to the fb db
                    item: deliverables[element]['deliverable'],
                });
                // test print the data array
                    // it prints for every todo item entered
                console.log('data ===', data);
            });
            // clear the project block each time
                // NOW you locate the list items id variable
            if (deliverable_list_element){
                deliverable_list_element.innerHTML = '';
            }
            // iterate through the deliverableitems pushed to the data array
            for(let i = 0; i < data.length; i++){
                // store them in a variable
                var deliverablesall = data[i];
                // test print
                console.log('deliverablesall ===', deliverablesall);
                // ABOVE is what you access to the output displays
                    // you are to create BELOW
                
                // The way these will be created:
                    // each time you hit the submit button
                        // everything above or the algorithm above is executed for the input entered
                        // THEN an output element is created in and of itself
                
                // THE ELEMENT CREATION PART

                // NOW we build the list elements below
                    // so each time the form is submitted 
                        // a separate todo element is created 
                            // so it can be manipulated individually
                
                            // start building the list elements 
                // in the for loop for each one
            

                // BELOW is for EACH todo item that gets populated

                // DELIVERABLE-ITEMS DIV

                // create the 'deliverable_items' div
                const deliverable_items = document.createElement('div');

                // test print it
                console.log(deliverable_items);

                // add the class to the div
                deliverable_items.classList.add('deliverable_items');

                // append the div to the parent (deliverable_list_element)
                deliverable_list_element.appendChild(deliverable_items);

                // CONTENT DIV

                // create the 'content' div 
                    // this is setup as an input that displays the output
                const deliverable_content_div = document.createElement('div');

                // test print it
                // console.log(deliverable_content_div);

                // set the div id
                deliverable_content_div.id = "content";

                // append the div to the parent (deliverable_items)
                deliverable_items.appendChild(deliverable_content_div);

                // INPUT ELEMENT
                    // create the input element that's going to be inside of the content
                    // which is actually a display of the output
                        // but you need to set as readonly so ....
                const deliverable_input_element = document.createElement('input');

                // test print it
                console.log(deliverable_input_element);
                // add it's class
                deliverable_input_element.classList.add('input');
                // set it's type
                deliverable_input_element.type = "text";
                // set it's id
                deliverable_input_element.id = "deliverable";

                // set it's value. Which is the input value 'todo' variable
                deliverable_input_element.value = deliverablesall.item;
                // set it's attribute to readonly
                deliverable_input_element.setAttribute('readonly', true);

                // append the input element to the parent div (deliverable_content_div)
                deliverable_content_div.appendChild(deliverable_input_element);

                // NOW FOR THE BUTTONS

                // FIRST SET THE BUTTONS DIV

                // BUTTONS DIV

                // this is the bar of buttons (edit, delete, cross-off)
                const deliverable_buttons_div = document.createElement('div');

                // test print
                console.log(deliverable_buttons_div);

                // set it's class
                deliverable_buttons_div.classList.add('buttons');
                // append the buttons div to the parent div (deliverable_content_div)
                deliverable_content_div.appendChild(deliverable_buttons_div);
                
                // NOW to put buttons on it

                // EDIT BUTTON

                // create the edit button
                const deliverable_edit_button = document.createElement('button');
                // test print
                console.log(deliverable_edit_button);
                // set it's class
                deliverable_edit_button.classList.add('edit');
                // set the id (for the key of the firebase item)
                    // the id is the actual key
                        // deliverablesall.id
                deliverable_edit_button.setAttribute('id', deliverablesall.id);
                // set the innerText
                deliverable_edit_button.innerText = "edit";
                // append edit button to parent (deliverable_buttons_div)
                deliverable_buttons_div.appendChild(deliverable_edit_button);

                // DELETE BUTTON

                // create the delete button
                const deliverable_delete_button = document.createElement('button');

                // test print
                console.log(deliverable_delete_button);

                // set it's class
                deliverable_delete_button.classList.add('delete');

                // set the id (for the key of the firebase item)
                    // the id is the actual key
                deliverable_delete_button.setAttribute('id', deliverablesall.id);

                // set the innerText
                deliverable_delete_button.innerText = "delete";

                // append delete button to the parent div
                deliverable_buttons_div.appendChild(deliverable_delete_button);

                // CROSS OFF BUTTON

                // create the cross off button
                const deliverable_cross_button = document.createElement('button');

                // test print
                console.log(deliverable_cross_button);

                // set it's class
                deliverable_cross_button.classList.add('cross');

                // set it's id
                deliverable_cross_button.setAttribute('id', deliverablesall.id);

                // set the innerText
                deliverable_cross_button.innerText = "cross-off";

                // test print
                // console.log(project_cross_button);

                // append cross button to the buttons div
                deliverable_buttons_div.appendChild(deliverable_cross_button);

                // EVENT LISTENER TIME

                // EDIT BUTTON
                    // this is where you:
                        // set the innertext change on the button
                        // toggle the readonly attribute
                        // edit the changes in firebase 
                deliverable_edit_button.addEventListener('click', (e) => {
                    // store the id in a variable that is the target of event (the key)
                    let id = e.target.id;
                    // test print
                    console.log('editbutton id for this deliverable ===', id);
                    // check the text in order to change it
                    if (deliverable_edit_button.innerText.toLowerCase() === "edit"){
                        // test print text with the id
                        // console.log(project_edit_button, id);
                        // change the innerText
                        deliverable_edit_button.innerText = "SAVE";
                        // remove the readonly attribute from the input field so you can edit the field
                        deliverable_input_element.removeAttribute('readonly', true);
                        // place the cursor inside the field to be edited
                        deliverable_input_element.focus();
                    } else {
                        // check the text in order to change it
                        if (deliverable_edit_button.innerText.toLowerCase() === "save"){
                            // test print text with the id
                            // console.log("save button pressed", id);
                            // change the innerText
                            deliverable_edit_button.innerText = "EDIT";
                            // set the readonly attribute to the input field so you can't edit
                            deliverable_input_element.setAttribute('readonly', true);
                            // NOW save the change to firebase
                            // NOW keep the edit in firebase
                            let updated = deliverable_input_element.value;
                            // test print
                            console.log(`The key value for this deliverable is: ${id}`);
                            console.log('The input value for this deliverable is now:', updated);
                             // NOW edit in firebase
                                // locate the firebase reference by each item id
                                    // apply the update function
                                        // it sets updated value with a new key
                                            // that is declared earlier in the data.push ['deliverable']
                            firebase.database().ref(`deliverables/${id}`).update({deliverable: updated});
                        }
                    }
                });

                // DELETE BUTTON
                    // this is where you:
                        // remove the input element from the display
                        // remove the data element from firebase
                deliverable_delete_button.addEventListener('click', (e) => {
                    // keep from bubbling up
                    e.stopPropagation();
                    // store the id in a variable that is the target of event
                    let id = e.target.id;
                    // test print the delete button
                    console.log("delete button pressed", id);
                    // remove the child input (DELIVERABLE ITEMS or CONTENT) from the (DELIVERABLES BLOCK)
                    deliverable_list_element.removeChild(deliverable_items);
                    // NOW to remove the data element from firebase
                    // test print the location in the db
                    console.log(`The key value for this deliverable is: ${id}`);
                    // NOW delete it in the firebase 
                    firebase.database().ref(`deliverables/${id}`).remove();
                });

                // CROSS OFF BUTTON

                // FIRST use the once method on the original DB reference 
                    // to get the boolean value of the deliverable item 'crossed'
                        // LATER it will be toggled to true or false 
                firebaseDeliverablesRef.once('value', getbool);

                            // NOW create a function to get the boolean value 
                                // of the arguement in the above method
                            function getbool(deliverablebool){
                                // print the value of the boolean
                                console.log(deliverablebool.val());
                                // store it in a variable
                                var delivbool = deliverablebool.val();
                                // test print
                                console.log('boolean ===', delivbool);
                                // create an empty array to push the booleans in
                                var bools = [];
                                // iterate through the booleans by their key
                                Object.keys(delivbool).forEach(element => {
                                    bools.push({
                                        // pushing the id #
                                        id: element,
                                        // pushin the boolean to 'crossed' item
                                        item: delivbool[element]['crossed']
                                    });
                                    // test print the boolean list
                                    console.log('bools ===', bools);
                                });
                                // // NOW iterate through and then 
                                //     // create a variable for the boolean value
                                //         // to compare to.
                                //         // dont forget to create the key value first
                                for (let b = 0; b < bools.length; b++){
                                    // store the iterations in a variable
                                    var crosseds = bools[i];
                                    // test print
                                    console.log('boolsall ===', crosseds);
                                    let crossv = crosseds.item;
                                    // store the item value in a variable
                                    console.log(crossv);
                                    // NOW if bool item === true set the css
                                        // textDecoration to line-through
                                    if (crossv === true){
                                        // change the css of the input
                                        deliverable_input_element.style.textDecoration = "line-through";
                                        // change the innerHTML of cross-off button
                                        deliverable_cross_button.innerText = "uncross";
                                        // make edit button dissapear
                                        deliverable_edit_button.style.display = "none";
                                    } else {
                                        // if bool item === false set the css
                                            // textDecoration to none
                                        if (crossv === false){
                                            // change the css of the input
                                            deliverable_input_element.style.textDecoration = "none";
                                            // change the innerHTML of cross-off button
                                            deliverable_cross_button.innerText = "cross-off";
                                            // make edit button dissapear
                                            deliverable_edit_button.style.display = "block";
                                        }
                                    }
                                }
                                    // this is where you:
                                    // I need to reference the input item by id
                                    // then change the 'crossed' item between true and false
                                    // first add an event listener
                                    deliverable_cross_button.addEventListener('click', (e) =>{
                                        // store the id in a variable that is the target of event
                                        let id = e.target.id;
                                        // read the innerText of the cross button
                                            // use an if statement to determine
                                        if (deliverable_cross_button.innerText.toLowerCase() === "cross-off"){
                                            // test print the cross button
                                            console.log("cross-off button pressed");
                                            // test print the location in the db
                                            console.log(`The key value for this cross-off deliverable is: ${id}`); 
                                            // print the crossed var
                                            console.log('CROSSEDS ===', crosseds);
                                            // NOW just apply an update to the crossed item
                                                // through the firebase db
                                            firebase.database().ref(`deliverables/${id}`).update({crossed: true});
                                        } else {
                                            // read the innerText of the cross button
                                                // use an if statement to determine
                                            if (deliverable_cross_button.innerText.toLowerCase() === "uncross"){
                                                // test print uncross button
                                                console.log("uncross button pressed");
                                                // test print the location in the db
                                                console.log(`The key value for this cross-off deliverable is: ${id}`);
                                                // print the crossed var
                                                console.log(crosseds);
                                                // NOW just apply an update to the crossed item
                                                    // through the firebase db
                                                firebase.database().ref(`deliverables/${id}`).update({crossed: false});
                                            }
                                        }

                                });
                            }
                    
                }
        }
});

// for Error handling
function errDeliverable(err){
    console.log(err);
}
