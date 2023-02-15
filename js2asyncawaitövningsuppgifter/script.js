// **************ASYNC AWAIT************

// let button = document.getElementById("button");

// button.addEventListener("click", (event) => {
//   event.preventDefault();
//   getDogImages();
// });

// async function getDogImages() {
//   let inputText = document.getElementById("inputText").value;
//   let inputNumber = document.getElementById("inputNumber").value;
//   const url = `https://dog.ceo/api/breed/${inputText}/images/random/${inputNumber}`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     if (response.ok) {
//       const { message } = data;
//       message.forEach((msg) => {
//         let img = document.createElement("img");
//         img.src = msg;
//         document.body.appendChild(img);
//         console.log(msg);
//       });

//     } else {
//       throw "Anropet funkade ej";
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

//*******PROMISES*/

// const myPromise = new Promise((resolve, reject) => {
//   const rand = Math.round(Math.random() * 10);

//   if (rand % 2 === 0) {
//     resolve(rand);
//   } else {
//     reject("Numret är udda!");
//   }
// });

// myPromise
//   .then((theValue) => {
//     let header = document.createElement("h1");
//     header.innerHTML = `The promise is fullfilled, the value is : ${theValue}`;
//     document.body.appendChild(header);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//**************SET TIMEOUT*/
const randy = Math.round(Math.random() * 50);
const bestPromise = new Promise((resolve, reject) => {
  if (randy < resolve) {
    setTimeout(() => {
      console.log(randy);
    }, 3000);
  } else {
    console.log("Else");
  }
});
