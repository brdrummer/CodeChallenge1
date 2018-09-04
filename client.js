console.log( 'js' );

$(document).ready(onReady);




function onReady() {
  $('#generateButton').on('click', displayDiv);


}
let countClicks = 0;

function displayDiv() {




countClicks++;

console.log( countClicks );



// $('#divAppend').append(
//   `<div>
//   <p>` + $('#generateButton') + `</p>
//
//   </div>`);

}
