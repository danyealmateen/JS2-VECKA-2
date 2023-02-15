const baseUrl =
  "https://hobbit-town-default-rtdb.europe-west1.firebasedatabase.app/";

async function getAll() {
  const url = baseUrl + "weapons.json";

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

getAll();

// //Delete
async function deleteNode() {
  const url = baseUrl + "weapons/axe.json";

  const response = await fetch(url, { method: "DELETE" });
  const data = await response.json();
}
deleteNode();

//Post
async function post(obj) {
  const url = baseUrl + "weapons/axe.json";

  const init = {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  const response = await fetch(url, init);
  const data = await response.json();
  console.log(data);
}
const newAxe = {
  axe: "Balinar",
};

post(newAxe);

//PUT
async function put(obj) {
  const url =
    "https://hobbit-town-default-rtdb.europe-west1.firebasedatabase.app/weapons.json";

  const init = {
    method: "PUT",
    body: JSON.stringify(obj),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  const response = await fetch(url, init);
  const data = await response.json();
  console.log(data);
}

const putObj = {
  axe: "New Balinar",
  twoHandedSword: "Edge",
};
put(putObj);
