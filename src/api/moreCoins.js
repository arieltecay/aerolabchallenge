import { urlCoins, headers } from "./api";

async function postCoins(amount) {
  try {
    const response = await fetch(urlCoins, {
      method: "POST",
      headers,
      body: JSON.stringify({ amount: amount }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default postCoins;