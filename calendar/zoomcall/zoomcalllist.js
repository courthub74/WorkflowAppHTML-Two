// JS for zoom calls list

// create a variable that stores the firebase db configuration
const firebaseConfig = {
    apiKey: "AIzaSyATc5lxId7q3aWvm2bTy2oVjX3JzqJJszE",
    authDomain: "workflowapp-c191d.firebaseapp.com",
    databaseURL: "https://workflowapp-c191d-default-rtdb.firebaseio.com",
    projectId: "workflowapp-c191d",
    storageBucket: "workflowapp-c191d.appspot.com",
    messagingSenderId: "205004352373",
    appId: "1:205004352373:web:89d233c2cdc4e4ccbf413c"
};

// initialize firebase to that configuration
firebase.initializeApp(firebaseConfig);

// create a reference for your database (give it a name to id by in firebase)
    // access the fb db
    // name it (set it's reference)
    // store that all in a variable
var firebaseZoomcallsRef = firebase.database().ref("zooms");

// test print
// console.log("Here is the DB for the firebaseZooms");

// NOW lets set up the page through the DOM

// event listener for the elements of the WHOLE PAGE
window.addEventListener('load', () => {
    // Once the page is loaded
    // queryselect the whole form by id
        // you will add the event listener to this

    // query the 'zooms' div
    const zooms = document.querySelector(".zooms");
    // test print
    console.log('query of zooms ===', zooms);

    // FROM DATABASE
    // utilize the on function on the db reference
        // based on value
        // pass getProject and errProject functions
            // getProject locates fb db
            // errProject test for errors
                // i.e. permissions, other blocks
    firebaseZoomcallsRef.on('value', getZoom, errZoom);

    // get project
    function getZoom(zoomitem){
        var zooms = zoomitem.val();
        console.log('zooms ===', zooms);

        // NOW get the keys and items entered 
                // to push them to an array 
                    // this is for rendering each zoomcall item
        // let's create an empty array called data
        var data = [];
        // NOW loop through the zooms and push them into the 
                // data array by Object ids
        // Object.keys(zooms).forEach();
        Object.keys(zooms).forEach(element => {
            // test print the todo item with it's key
                console.log('item key and text ===', element, zooms[element]);
                // NOW push the id (element-keys) and item (project)
                    // to the data array
            data.push({
                id: element,
                item: zooms[element]
            });
            // test print the data array
            console.log('data ===', data);
        });
        // clear the zoom_items each entry so no double up
            // Need to study this one
        // NOW let's iterate through the zoomitems pushed to the data array
        for (let i = 0; i < data.length; i++){
            // store them in a variable
            var zoomsall = data[i];
            // test print
            console.log('zoomsall ===', zoomsall);

            //THE ELEMENT CREATION PART
        // so each time the form is submitted 
            // a separate zoomcall element is created 
                // so it can be manipulated individually
    
            // BELOW is for EACH zoomcall item that gets populated
            // ZOOM-ITEMS DIV

            const zooms = document.querySelector(".zooms");

            // create the 'zoom_items' div
            const zoom_items = document.createElement('div');

            // test print it
            console.log("ZOOM ITEM:",zoom_items);

            // give it the id zoom_items 
            zoom_items.id = "zoom_items";

            // append to the zooms div
            zooms.appendChild(zoom_items);

            // test print
            console.log(zooms);

            // create the 'content' div
            const zoomcontent = document.createElement("div");

            // test print it
            // console.log(content);

            // assign it the id content
            zoomcontent.id = "content";

            // append to 'zoom_items'
            zoom_items.appendChild(zoomcontent);

            // THE CONTENT ITEMS

            // NAME ELEMENT
            // create the NAME element that's going to be inside of the content
            const zoomname = document.createElement('input');

            // test print
            console.log('zoomname ===', zoomname);

            // add it's class
            zoomname.classList.add('text');
            // set it's type
            zoomname.type = "text";
            // set it's id
            zoomname.id = "zoomname";

            // set the value
                // take the value from zoomsall 4 loop
            zoomname.value = zoomsall.item.name;
            // test print
            // console.log(zoomsall.item);

            // set the attribute to readonly
            zoomname.setAttribute('readonly', true);

            // append to the content div
            zoomcontent.appendChild(zoomname);

            /////////////////////////////////////

            // DATE ELEMENT
            // create the DATE element that's going to be inside of the content
            const zoomdate = document.createElement('input');
            // test print
            console.log('zoomdate ===', zoomdate);
            // add it's class
            zoomdate.classList.add('text');
            // set it's type
            zoomdate.type = "text";
            // set it's id
            zoomdate.id = "zoomdate";

            // set the value
                // take the value from zoomsall 4 loop
            zoomdate.value = zoomsall.item.date;

            // set the attribute to readonly
            zoomdate.setAttribute('readonly', true);

            // append to the content div
            zoomcontent.appendChild(zoomdate);

            /////////////////////////////////////

            // TIME ELEMENT
            // create the TIME element that's going to be inside of the content
            const zoomtime = document.createElement('input');
            // test print
            console.log('zoomtime ===', zoomtime);
            // add it's class
            zoomtime.classList.add('text');
            // set it's type
            zoomtime.type = "text";
            // set it's id
            zoomtime.id = "zoomtime";

            // set the value
                // take the value from zoomsall 4 loop
            zoomtime.value = zoomsall.item.time;

            // set the attribute to readonly
            zoomtime.setAttribute('readonly', true);

            // append to the content div
            zoomcontent.appendChild(zoomtime);

            /////////////////////////////////////

            // PHONE NUMBER ELEMENT
            // create the TIME element that's going to be inside of the content
            const zoomnumber = document.createElement('input');
            // test print
            console.log('zoomnumber ===', zoomnumber);
            // add it's class
            zoomnumber.classList.add('text');
            // set it's type
            zoomnumber.type = "text";
            // set it's id
            zoomnumber.id = "zoomnumber";

            // set the value
                // take the value from zoomsall 4 loop
            zoomnumber.value = zoomsall.item.phone;

            // set the attribute to readonly
            zoomnumber.setAttribute('readonly', true);

            // append to the content div
            zoomcontent.appendChild(zoomnumber);

            /////////////////////////////////////

            // TOPIC ELEMENT
            // create the TOPIC element that's going to be inside of the content
            const zoomtopic = document.createElement('input');
            // test print
            console.log('zoomtopic ===', zoomtopic);
            // and it's class
            zoomtopic.classList.add('text');
            // set it's type
            zoomtopic.type = "text";
            // set it's id
            zoomtopic.id = "zoomtopic";

            // set the value
                // take the value from zoomsall 4 loop
            zoomtopic.value = zoomsall.item.topic;
            // set the attribute to readonly
            zoomtopic.setAttribute('readonly', true);

            // append to the content div
            zoomcontent.appendChild(zoomtopic);

             /////////////////////////////////////

            // LINK ELEMENT
            // create the LINK element that's going to be inside of the content
            const zoomlink = document.createElement('input');

            // test print
            console.log('zoomlink ===', zoomlink);
            // and it's class
            zoomlink.classList.add('text');
            // set it's type
            zoomlink.type = "text";
            // set it's id
            zoomlink.id = "zoomlink";

            // set the value
                // take the value from zoomsall 4 loop
            zoomlink.value = zoomsall.item.link;
            // set the attribute to readonly
            zoomlink.setAttribute('readonly', true);

            // append to the content div
            zoomcontent.appendChild(zoomlink);

            // NOW FOR THE BUTTONS

            // FIRST create the BUTTONS div
            const zoom_buttons_div = document.createElement('div');

            // test print
            console.log(zoom_buttons_div);

            // set it's class
            zoom_buttons_div.classList.add('buttons');

            // append the buttons div to the zoom_items div
            zoom_items.appendChild(zoom_buttons_div);

            

            // EDIT BUTTON

            // create the button
            const zoom_edit_button = document.createElement('button');

            // test print
            console.log(zoom_edit_button);

            // set it's class
            zoom_edit_button.classList.add('edit');

            // set it's name for later toggling
            zoom_edit_button.setAttribute('name', 'edit');

            // set the id (for the key of the firebase item)
                // the id is the actual key
            zoom_edit_button.setAttribute('id', zoomsall.id);

            // set the edit icon
            zoom_edit_button.style.background = "url('/img/editwhite.png')";

            // set the icon size
            zoom_edit_button.style.backgroundSize = "29px";

            // append to the buttons div
            zoom_buttons_div.appendChild(zoom_edit_button);

            // DELETE BUTTON

            // create the button
            const zoom_delete_button = document.createElement('button');

            // test print
            console.log(zoom_delete_button);

            // set it's class
            zoom_delete_button.classList.add('delete');

            // set the id (for the key of the firebase item)
                // the id is the actual key
            zoom_delete_button.setAttribute('id', zoomsall.id);

            // set the style background
            zoom_delete_button.style.background = "url('/img/deletewhite.png')";

            // set the img size
            zoom_delete_button.style.backgroundSize = "29px"

            // append to the buttons div
            zoom_buttons_div.appendChild(zoom_delete_button);

            // EVENT LISTENER TIME

            // DELETE BUTTON
            // this is where you:
                // remove the input element from the display
                    // remove the data element from firebase
            zoom_delete_button.addEventListener('click', (e) =>{
                // keep from bubbling up
                e.stopPropagation();
                // store the id in a variable that is the target of event
                let id = e.target.id;
                // test print the delete button
                console.log(`delete button pressed for: ${id}`);
                // remove the child input (ZOOM ITEM (zoom_items)) from the (ZOOMS) parent
                zooms.removeChild(zoom_items);
                console.log('DATABASE REF ===', firebase.database().ref(id));
                // NOW delete it in the firebase 
                firebase.database().ref(`zooms/${id}`).remove();
            });

            // EDIT BUTTON
                // this is where you:
                    // set the innertext change on the button
                    // toggle the readonly attribute
                    // edit the changes in firebase
            zoom_edit_button.addEventListener('click', (e) =>{
                // store the id in a variable that is the target of event (the key)
                let id = e.target.id;
                // check the text in order to change it
                if (zoom_edit_button.name === 'edit'){
                    // test print text with the id
                    console.log(`zoom_edit_button: ${id}`);
                    // set an id for the button for later toggle purpose
                    zoom_edit_button.setAttribute('name', 'editing');
                    // test print
                    console.log(zoom_edit_button);

                    // NAME FIELD
                    // remove the readonly attribute from the input field so you can edit the field
                    zoomname.removeAttribute('readonly', true);
                    // place the cursor inside the field to be edited
                    zoomname.focus();
                    // change the color of the name field
                    zoomname.style.color = "#DEE36D";

                    // DATE FIELD
                    // remove the readonly attribute from the input field so you can edit the field
                    zoomdate.removeAttribute('readonly', true);
                    // place the cursor inside the field to be edited
                    zoomdate.focus();
                    // change the color of the name field
                    zoomdate.style.color = "#DEE36D";

                    // TIME FIELD
                    // remove the readonly attribute from the input field so you can edit the field
                    zoomtime.removeAttribute('readonly', true);
                    // place the cursor inside the field to be edited
                    zoomtime.focus();
                    // change the color of the name field
                    zoomtime.style.color = "#DEE36D";

                    // PHONE FIELD
                    // remove the readonly attribute from the input field so you can edit the field
                    zoomnumber.removeAttribute('readonly', true);
                    // place the cursor inside the field to be edited
                    zoomnumber.focus();
                    // change the color of the name field
                    zoomnumber.style.color = "#DEE36D";

                    // TOPIC FIELD
                    // remove the readonly attribute from the input field so you can edit the field
                    zoomtopic.removeAttribute('readonly', true);
                    // place the cursor inside the field to be edited
                    zoomtopic.focus();
                    // change the color of the name field
                    zoomtopic.style.color = "#DEE36D";

                    // ZOOMLINK FIELD
                    // remove the readonly attribute from the input field so you can edit the field
                    zoomlink.removeAttribute('readonly', true);
                    // place the cursor inside the field to be edited
                    zoomlink.focus();
                    // change the color of the name field
                    zoomlink.style.color = "#DEE36D";

                } else {
                    if (zoom_edit_button.name === "editing"){
                        // test print text with the id
                        console.log(`zoom_edit_button: ${id}`);
                        // set an id for the button for later toggle purpose
                        zoom_edit_button.setAttribute('name', 'edit');
                        // test print
                        console.log(zoom_edit_button);

                        // NAME FIELD
                        // remove the readonly attribute from the input field so you can edit the field
                        zoomname.setAttribute('readonly', true);
                        // change the color of the name field
                        zoomname.style.color = "#ffffff";

                        // DATE FIELD
                        zoomdate.setAttribute('readonly', true);
                        // change the color of the date field
                        zoomdate.style.color = "#ffffff";

                        // TIME FIELD
                        zoomtime.setAttribute('readonly', true);
                        zoomtime.style.color = "#ffffff";

                        // PHONE FIELD
                        zoomnumber.setAttribute('readonly', true);
                        zoomnumber.style.color = "#FEFC00";

                        // TOPIC FIELD
                        zoomtopic.setAttribute('readonly', true);
                        zoomtopic.style.color = "#6cce63";

                        // ZOOM LINK FIELD
                        zoomlink.setAttribute('readonly', true);
                        zoomlink.style.color = "#ffffff";

                        // Get the Values of each field
                        // NAME FIELD
                        let updatename = zoomname.value;
                        // DATE FIELD
                        let updatedate = zoomdate.value;
                        // TIME FIELD
                        let updatetime = zoomtime.value;
                        // PHONE FIELD
                        let updatephone = zoomnumber.value;
                        // TOPIC FIELD
                        let updatetopic = zoomtopic.value;
                        // LINK FIELD
                        let updatelink = zoomlink.value;

                        // NOW edit in firebase
                            // locate the firebase reference by each item id
                                // apply the update function
                                    // it sets updated value with a new key
                                        // that is declared earlier in the data.push ['project']
                            // you will place every input into the update library
                            // key is the where you want to replace it
                            // name is what you want to send
                        firebase.database().ref(`zooms/${id}`).update({
                            name: updatename, 
                            date: updatedate, 
                            time: updatetime, 
                            phone: updatephone, 
                            topic: updatetopic, 
                            link: updatelink});
                    }
                }
            });
        }

    };
        
        // errZoom
        function errZoom(err){
            console.log(err);
        }
});

