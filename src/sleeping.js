import { http } from "./http.js";
import { ui } from "./ui.js";

// Get Get Category ALL products on click
document.addEventListener("DOMContentLoaded", getSleepingProducts);

function getSleepingProducts() {
  http
    //  .get("http://localhost:3000/products")
    .get("https://6060b8b904b05d0017ba2dfb.mockapi.io/products")
    .then((data) => ui.showSleepingProducts(data));
}
