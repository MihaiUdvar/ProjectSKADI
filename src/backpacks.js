import { http } from "./http.js";
import { ui } from "./ui.js";

// Get Get Category ALL products on click
document.addEventListener("DOMContentLoaded", getBackpackProducts);

function getBackpackProducts() {
  http
    //  .get("http://localhost:3000/products")
    .get("https://6060b8b904b05d0017ba2dfb.mockapi.io/products")

    .then((data) => ui.showBackpackProducts(data));
}
