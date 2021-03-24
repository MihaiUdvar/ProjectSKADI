import { http } from "./http.js";
import { ui } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  http.get("http://localhost:3000/products").then((data) => {
    ui.showProductsInCart(data);
    updateCartTotal();
    deleteProductLocal();
  });
});

// Delete product from cart
document
  .getElementById("cart-table-products")
  .addEventListener("click", deleteProductLocal);

function deleteProductLocal(e) {
  if (e.target.classList.contains("btn-danger")) {
    e.target.parentElement.parentElement.remove();

    const id = e.target.id;
    //console.log(id);
    const cartProductList = JSON.parse(localStorage.getItem("cart"));
    for (let i = 0; i < cartProductList.length; i++) {
      if (cartProductList[i] === id) {
        cartProductList.splice(i, 1);
        localStorage.setItem("cart", JSON.stringify(cartProductList));
      }
    }
  }
  updateCartTotal();
}
function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName("cart-table")[0];
  let cartRows = cartItemContainer.getElementsByClassName("table-row-cart");
  var total = 0;

  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    let priceElement = cartRow.getElementsByClassName("product-price")[0];
    let quantityElement = cartRow.getElementsByClassName("quantity-input")[0];
    //console.log(priceElement, quantityElement);
    let price = parseFloat(priceElement.innerText.replace("€", ""));
    var quantity = quantityElement.value;
    //console.log(price * quantity);
    total = total + price * quantity;
  }

  document.getElementById("sub-total-price").innerText = total + " " + "€";
  let subTotal = parseFloat(
    document.getElementById("sub-total-price").innerText.replace("€", "")
  );
  let postage = parseFloat(
    document.getElementById("shipping").innerText.replace("€", "")
  );
  document.getElementById("total-price").innerText =
    subTotal + postage + " " + "€";
  updateQuantity();
}

function updateQuantity() {
  let quantityInputs = document.getElementsByClassName("quantity-input");
  for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  function quantityChanged(e) {
    let input = e.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
  }
}
