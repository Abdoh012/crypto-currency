// Variables
const bitcoinPrice = document.querySelector(".one .price"); // Bitcoin price
const ethereumPrice = document.querySelector(".two .price"); // Ethereum price
const dogecoinPrice = document.querySelector(".three .price"); // Dogecoin price
// End of variables

// Functions
// Get ryptourrenies prices from coingeko api
async function getData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": "CG-MihbWNyP2nAPgZVUMMGu2YoC",
    },
  };
  const response = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin%2Cethereum%2Cdogecoin",
    options
  );
  // Try this block of code
  try {
    // If response is not ok
    if (!response.ok) {
      console.log("Error");
    }
    const data = await response.json();
    // Set coins prices
    bitcoinPrice.textContent = `$${data.bitcoin.usd}`;
    ethereumPrice.textContent = `$${data.ethereum.usd}`;
    dogecoinPrice.textContent = `$${data.dogecoin.usd}`;

    // Catch the error if found
  } catch (reason) {
    console.log(reason);
  }
}
// End of functions

getData();
