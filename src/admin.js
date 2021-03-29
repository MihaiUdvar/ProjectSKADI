import { http } from "./http.js";
import { ui } from "./ui.js";

// Get products
document.addEventListener("DOMContentLoaded", getProductsAdmin);

function getProductsAdmin() {
  http
    // .get("http://localhost:3000/products")
    .get("https://6060b8b904b05d0017ba2dfb.mockapi.io/products")
    .then((data) => ui.showProductsAdmin(data));
}

// Add product to db
document.getElementById("add-product").addEventListener("click", addNewProduct);

function addNewProduct() {
  const codeValue = document.getElementById("code").value;
  const nameValue = document.getElementById("name").value;
  const titleValue = document.getElementById("title").value;
  const priceValue = document.getElementById("price").value;
  const stockValue = document.getElementById("stock").value;
  const categoryValue = document.getElementById("category").value;
  const imageValue = document.getElementById("image").value;
  const descriptionValue = document.getElementById("description").value;

  let product = {
    code: codeValue,
    name: nameValue,
    title: titleValue,
    price: priceValue,
    currency: "€",
    description: descriptionValue,
    stock: stockValue,
    category: categoryValue,
    image: imageValue,
  };

  http
    .post("http://localhost:3000/products", product)
    .then((data) => getProductsAdmin());

  ui.clearFields();
  ui.alertDivAdmin("Product added! Review at bottom of list.", "bg-success");
}

document
  .getElementById("admin-table-body")
  .addEventListener("click", deleteProduct);

// Delete productfrom DB
function deleteProduct(e) {
  if (e.target.classList.contains("delete")) {
    const id = e.target.id;
    e.target.parentElement.parentElement.remove(id);
    http
      .delete(`http://localhost:3000/products/${id}`)
      .then((data) => getProductsAdmin())
      .catch("Error on delete!");
  }
}
