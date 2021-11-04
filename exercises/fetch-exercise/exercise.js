/*
Use fetch to load a greeting from the API and display it 
in the HTML element with the id "greeting-text".

API: https://codeyourfuture.herokuapp.com/api/greetings
Response: A greeting in a random language

To learn more about fetch, refer to the doc:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


================
Expected result
================

Open index.html in your browser. Every time you refresh the page,
a different greeting should be displayed in the box.
*/

let greetingP = document.getElementById("greeting-text");

function createGreeting() {
  fetch("https://codeyourfuture.herokuapp.com/api/greetings")
    .then(function (response) {
      if (response.ok) {
        return response.text();
      }
    })
    .then(function (greeting) {
      console.log("Greeting is: ", greeting);
      greetingP.innerText = greeting;
    })
    .catch(function (error) {
      console.log(`An error occurred:, ${error}`);
    });
}
// Extra
// lets Create a button so we get a greeting every time we click the button.

let greetingBtn = document.getElementById("greetingBtn");

greetingBtn.addEventListener("click", createGreeting);
