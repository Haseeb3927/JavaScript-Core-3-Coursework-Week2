let buttonEl = document.getElementById("button1");
let mainEl = document.getElementById("main");

let image = document.createElement("img");
image.src = "";
mainEl.appendChild(image);

function makeHumor() {
  fetch(`https://xkcd.now.sh/?comic=latest`)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw `${response.status} ${response.statusText}`;
    })
    .then(function (data) {
      console.log(`Fetched data:`);
      console.log(data);
      image.src = data.img;
    })
    .catch(function (error) {
      console.log("An error occurred:", error);
    });
}
function setUp() {
  buttonEl.addEventListener("click", makeHumor);
}

window.onload = setUp;
