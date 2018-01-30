"use strict";

console.log("reading");

// store form fields in variables
var setting =document.f.setting.value;
var character1 = document.f.character1.value;
var character2 =document.f.character2.value;
var teacher =document.f.teacher.value;
var grade =document.f.grade.value;
var exclamation =document.f.exclamation.value;
var results = document.getElementById("results");
var myMsg = document.getElementById("myMsg");

// capture the submit event
document.f.onsubmit = processForm;

// prompt1: capture the reset event and send it a callback function named resetForm
document.f.onreset = resetForm;

// define process function
function processForm() {
  var setting =document.f.setting.value;
  var character1 = document.f.character1.value;
  var character2 =document.f.character2.value;
  var teacher =document.f.teacher.value;
  var grade =document.f.grade.value;
  var exclamation =document.f.exclamation.value;

  myMsg.innerHTML =
    "Setting: This scene takes place in " + setting + " class." + "<br> (<em>Enter " +character1 +
    " obviously late for class. Out of breath, breathing heavily, " +teacher +" gives " +character1 +
    " a look of disgust. " +character1 +" sits by " + character2 +".</em>) <br>" + character2 + "<br> Why are you late "
    +character1 +". <br>" + character1 + "<br> I couldn't find parking!<br>" +teacher + "<br>" + character1 +
    " because you were late today, your grade is now an " +grade +".<br>" +character1 + "<br>" + exclamation +
    "<br> END SCENE"
  results.setAttribute("class","show");

  //prevent page from reloading
  return false;
}

function resetForm(){
  myMsg.innerHTML = "";
  results.setAttribute("class", "hide");
  console.log("resetForm");

}
