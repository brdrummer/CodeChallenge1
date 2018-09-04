console.log( 'js' );

$(document).ready(onReady);




function onReady() {
  $('#generateButton').on('click', displayDiv);
  $('#divAppend').on('click', '.deleteButton', handleDelete);


}
let countClicks = 0;

function displayDiv() {




  countClicks++;

  console.log( countClicks );



  $('#divAppend').append(
    `<div>
    <p>` + countClicks + `</p>

    </div>`);

  }



function myFunction() {
  console.log('working');
    let element = document.getElementById("divAppend");
    element.classList.toggle("mystyle");
}

function handleDelete(){
   $(this).parent().remove();


  }
