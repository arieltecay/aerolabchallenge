import { urlRedeem, headers } from "./api";

async function postRedeem(productId) {
  try {
    const response = await fetch(urlRedeem, {
      method: "POST",
      headers,
      body: JSON.stringify({ productId: productId }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default postRedeem;
