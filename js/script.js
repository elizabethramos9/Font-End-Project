
//slides down confirmation of submission of form for a brief moment upon clicking on Submit button
const clickFunc = function() {
  $("#panel").slideToggle("slow").delay(1500).slideToggle("slow");
  $('#log-entries')[0].reset();
}

//button waits for click
$(document).ready(function() {
  $( "#formButton" ).click(clickFunc);
});
