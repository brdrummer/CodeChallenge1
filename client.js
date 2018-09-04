$(document).ready(onReady);


function onReady() {
  $('#generateButton').on('click', displayDiv);
  $('#divAppend').on('click', '.deleteButton', handleDelete);

} //end click events

let countClicks = 0;

function displayDiv() {

countClicks++;

  $('#divAppend').append(`
    <div>
    <p>` + countClicks + `</p>
    <button class="deleteButton">Delete</button>
    <button onclick="myFunction()" id = "swapButton">Swap</button>
    </div>
    `);
}// end appending info

function myFunction() {
  console.log('working');
    let element = document.getElementById("divAppend");
    element.classList.toggle("mystyle");
}//end swap button functionality
//Well, it works. But it seems there is something right infront of my face that I can't see, which will allow the whole <p> to be yellow. I couldn't figure out how to do this within the context of the .classlist.toggle.

function handleDelete(){
   $(this).parent().remove();
}//end delete functionality

//I'm proud of myself for even making it this far.
