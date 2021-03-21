export const headers = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDRmN2U2ZDdlNzE4NzAwMjBlMzhmODUiLCJpYXQiOjE2MTU4MjI0NDV9.AhmuLoC63fGM7MqquxOttu4vSRjOfItMIKhpj8b2VqA",
};

export const urlUser = "https://coding-challenge-api.aerolab.co/user/me";
export const urlCoins = "https://coding-challenge-api.aerolab.co/user/points";
export const urlProducts = "https://coding-challenge-api.aerolab.co/products";
export const urlRedeem = "https://coding-challenge-api.aerolab.co/redeem";
export const urlHistory =
  "https://coding-challenge-api.aerolab.co/user/history";

export const getSort = (products, sort) => {
  const productRef = [...products];
  switch (sort) {
    case "lowest":
      return productRef.sort((a, b) => a.cost - b.cost);

    case "highest":
      return productRef.sort((a, b) => b.cost - a.cost);

    default:
      return productRef.sort((a, b) =>
        a._id > b._id ? 1 : b._id > a._id ? -1 : 0
      );
  }
};
