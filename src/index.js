// import { ui } from "./ui";

let adminLogin = document.getElementById("admin-login");

adminLogin.addEventListener("click", function (e) {
  let password = document.getElementById("password").value;
  let username = document.getElementById("username").value;
  if (username === "admin" && password === "1234") {
    window.location.href = "admin.html";
  }
});

let customerLogin = document.getElementById("customer-login");

customerLogin.addEventListener("click", function (e) {
  let password = document.getElementById("password").value;
  let username = document.getElementById("username").value;
  if (username === "customer" && password === "1234") {
    window.location.href = "products_all.html";
  }
});
updateNavCartIcon();
function updateNavCartIcon() {
  let cartIcon = document.getElementsByClassName("cart-basket")[0];
  const productsIdArr = JSON.parse(localStorage.getItem("cart"));
  console.log(productsIdArr);
  let counter = 0;
  for (let i = 0; i < cart.length; i++) {
    if (productsIdArr[i].status === "0") counter++;
  }
  console.log(counter);
}
