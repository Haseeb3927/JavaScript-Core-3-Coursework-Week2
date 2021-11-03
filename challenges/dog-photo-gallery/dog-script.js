////////================================================================///////////
// THIS CODE WILL ADD A RANDOM PICTURE TO THE LIST EVERY TIME WE CLICK THE BUTTON //
////////================================================================///////////

let buttonEL = document.getElementById("button1");

let ulElement = document.getElementById("display");

// Where src is can be any link given by the data
function CreateNewImage(AnySrc) {
  let newLi = document.createElement("li");
  ulElement.append(newLi);

  let imageEl = document.createElement("img");
  imageEl.src = AnySrc;
  newLi.append(imageEl);
}

function createDogPicture() {
  fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw `${response.status} ${response.statusText}`;
    })
    .then(function (data) {
      console.log(`Fetched data:`);
      console.log(data);
      let imageLink = data.message;
      CreateNewImage(imageLink);
    })
    .catch(function (error) {
      console.log("An error occurred:", error);
    });
}
function setUp() {
  buttonEL.addEventListener("click", createDogPicture);
}

window.onload = setUp;

////////================================================================///////////
// THIS CODE WILL SHOW A RANDOM PICTURE EVERY TIME AND REPLACE THE OLD ONE  //
////////================================================================///////////

// let buttonEL = document.getElementById("button1");

// let ulElement = document.getElementById("display");
// let newLi = document.createElement("li");
// ulElement.append(newLi);

// let imageEl = document.createElement("img");
// imageEl.src = "";
// newLi.append(imageEl);

// function createDogPicture() {
//   fetch(`https://dog.ceo/api/breeds/image/random`)
//     .then(function (response) {
//       if (response.ok) {
//         return response.json();
//       }
//       throw `${response.status} ${response.statusText}`;
//     })
//     .then(function (data) {
//       console.log(`Fetched data:`);
//       console.log(data);

//       imageEl.src = data.message;
//     })
//     .catch(function (error) {
//       console.log("An error occurred:", error);
//     });
// }
// function setUp() {
//   buttonEL.addEventListener("click", createDogPicture);
// }

// window.onload = setUp;
