"use strict";

console.log("reading js");



var startButton = document.getElementById("startButton");
var cameron = document.getElementById("cameron");
var next = document.getElementById("next");
var bag = document.getElementById("bag");
var items = document.getElementById("items");
var tape = document.getElementById("tape");
var glowOver = document.getElementById("glowOver");
var closeTape = document.getElementById("closeTape");
var charger = document.getElementById("charger");
var chargeOver = document.getElementById("chargeOver");
var closeCharge = document.getElementById('closeCharge');
var phone = document.getElementById("phone");
var phoneOver = document.getElementById("phoneOver");
var closePhone = document.getElementById("closePhone");


startButton.addEventListener('click', function(){
  // console.log("clicked on person");
  cameron.style.display = "block";
  startButton.style.display = "none";
} );

//person.addEventListener('click', function(){
  //overlay.style.display='block';
//} );

next.addEventListener('click', function(){
  console.log('bag will appear');
  bag.style.display = "block";
} );

bag.addEventListener('click', function(){
  console.log('show items');
  items.style.display = "inline-block";
})

charger.addEventListener('click', function(){
  chargeOver.style.display='block';
});

closeCharge.addEventListener('click', function(){
  chargeOver.style.display='none';
});

tape.addEventListener('click', function(){
  glowOver.style.display='block';
});

closeTape.addEventListener('click', function(){
  glowOver.style.display='none';
});

phone.addEventListener('click', function(){
  phoneOver.style.display='block';
});

closePhone.addEventListener('click', function(){
  phoneOver.style.display='none';
});
