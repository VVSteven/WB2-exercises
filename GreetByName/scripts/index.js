"use strict"
window.onload = init;

function init(){
    let greetingButton = document.getElementById("greetingButton");
    greetingButton.onclick = onGreetingButtonClicked; 
}
function onGreetingButtonClicked() {
    let greetingNameField= document.getElementById("greetingNameField")
    alert("Hello "+ greetingNameField.value);
   }