import { ui } from "./ui.js";

document.addEventListener("DOMContentLoaded", ui.updateNavCartIcon());

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
