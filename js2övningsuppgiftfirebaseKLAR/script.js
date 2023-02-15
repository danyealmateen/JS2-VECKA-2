const baseUrl =
  "https://produkter1-e7839-default-rtdb.europe-west1.firebasedatabase.app/";

async function getProducts() {
  const url = baseUrl + ".json";

  const response = await fetch(url);
  const data = await response.json();

  let objKeys = Object.keys(data);
  let objValue = Object.values(data);

  objValue.forEach((ele, index) => {
    let productCard = document.createElement("div");
    productCard.innerHTML = ` ${ele.name} ${objKeys[index]}  ${ele.description} : ${ele.price} <img src="${ele.url}" />`;
    document.body.appendChild(productCard);
    console.log(objKeys[index]);
  });

  console.log(data);
}
getProducts();
