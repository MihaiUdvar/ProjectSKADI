import { http } from "./http.js";
import { ui } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  getProducts();
  initCart();
});

function getProducts() {
  http
    // .get("http://localhost:3000/products")
    .get("https://6060b8b904b05d0017ba2dfb.mockapi.io/api/db/databaseMockapi/")
    .then((data) => ui.showProducts(data));
}

export function initCart() {
  const cartProductList = JSON.parse(localStorage.getItem("cart"));
  if (!cartProductList) {
    localStorage.setItem("cart", JSON.stringify([]));
  }
}
