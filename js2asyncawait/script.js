async function getDogImage() {
  const h1 = document.createElement("h1");
  document.body.appendChild(h1);
  h1.innerText = "LOADING";

  const dogUrl = `https://dog.ceo/api/breeds/image/random`;

  const response = await fetch(dogUrl);
  const { message } = await response.json();

  console.log(message);

  displayImage(message);
  h1.remove();
  return message;
}

console.log("före efter getDogImage anropas");
// getDogImage().then((dogUrl) => {
///   displayImage(dogUrl);
// });
getDogImage();
console.log("efter getDogImage anropas");

function displayImage(imgUrl) {
  const img = document.createElement("img");
  document.body.appendChild(img);
  img.src = imgUrl;
}
