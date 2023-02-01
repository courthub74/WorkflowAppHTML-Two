//  // Lets query the date data
//  const datedata = document.querySelector("#first");

//  // test print
//  console.log(datedata.innerHTML);

//  // check if it has the attribute
//  let target = datedata.hasAttribute('value');
//  console.log(target);

//  // NOW get the attribute
//  let datevalue = datedata.getAttribute('value');
//  console.log(datevalue);

console.log("The first date set by local storage here");
// Get the 1st of June and store it in a variable
var first = localStorage.getItem("DATE1");
// test print
console.log('The first Date:', first);
document.getElementById("show").innerHTML = first;