import { http } from "./http.js";
import { ui } from "./ui.js";
import { initCart } from "./app.js";

const id = window.location.search.split("=")[1];
window.onload = () => {
  if (window.location.search !== "") {
    // console.log(id);
    http
      // .get("http://localhost:3000/products/:" + id)
      .get(
        "https://6060b8b904b05d0017ba2dfb.mockapi.io/api/db/databaseMockapi/:" +
          id
      )
      .then((data) => ui.showProductDetails(data));
  }
};

// Adding to local storage
export function btnAddToCart() {
  document.getElementById(`${id}`).addEventListener(
    "click",
    function (e) {
      if (e.target.id == id) {
        // alert('Product added');
        addToCart(id);
      }
      ui.alertDivAdmin("Product added!", "bg-success");
      addQuantityToCart();
    },
    { once: true }
  );

  document.getElementById("buy-now").addEventListener(
    "click",
    function (e) {
      addToCart(id);
      addQuantityToCart();
    },
    { once: true }
  );
}

function addToCart(id) {
  const cartProductList = JSON.parse(localStorage.getItem("cart"));
  cartProductList.push(id);
  localStorage.setItem("cart", JSON.stringify(cartProductList));
}

export function addQuantityToCart() {
  const quantityToCart = document.getElementById(`quantity`).value;
  console.log(quantityToCart);
}

export function btnBuyNow() {
  addToCart(id);
  addQuantityToCart();
}
