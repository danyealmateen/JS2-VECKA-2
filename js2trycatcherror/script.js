const val = 3;
try {
  val = 5;
} catch (error) {
  console.log(error);
}

console.log("logga detta");

async function getBeerInfo() {
  const url = `https://api.punkapi.com/v2/beers/random`;

  try {
    const response = await fetch(url);
    console.log(response);
    if (response.ok) {
      const [beerObj] = await response.json();
      console.log(beerObj);
    } else {
      throw "Anropet misslyckades";
    }

    return beerObj;
  } catch (error) {
    console.log(error);
  }
}
getBeerInfo();
