import { btnAddToCart } from "./details.js";

class UI {
  constructor() {
    this.productsDiv = document.getElementById("products");
    this.title = document.getElementById("title");
    this.price = document.getElementById("price");
    this.image = document.getElementById("image");
    this.description = document.getElementById("description");
    this.category = document.getElementById("category");
    this.adminTable = document.getElementById("admin-table-body");
    this.tableRowCart = document.getElementById("table-row-cart");
    this.detailsDiv = document.getElementById("detailsDiv");
    this.cartTable = document.getElementById("cart-table-products");
    this.cartIcon = document.getElementById("cart-basket");
  }

  showProducts(products) {
    let output = "";
    products.forEach((product) => {
      output += ` 
         <div class="card m-3 " style="width: 18rem;">
            <div class="card-body">
               <img src="${product.image}" class="card-img-top" alt="...">
               <h4 class="card-title">${product.name}</h4>
               <h6 class="card-title">${product.title} </h6>
               <h4 class="card-price">$ ${product.price}</h4>
               <button class="btn btn-outline-success details" onclick="location.href='details.html?id=${product.id}';" id="${product.id}">DETAILS</button>
            </div>
         </div>
         `;
      this.productsDiv.innerHTML = output;
    });
  }

  showTentProducts(products) {
    let output = "";
    products.forEach((product) => {
      if (product.category == "tent") {
        output += ` 
         <div class="card m-3 " style="width: 18rem;">
            <div class="card-body">
               <img src="${product.image}" class="card-img-top" alt="...">
               <h4 class="card-title">${product.name}</h4>
               <h6 class="card-title">${product.title} </h6>
               <h4 class="card-price">$ ${product.price}</h4>
               <button class="btn btn-outline-success details" onclick="location.href='details.html?id=${product.id}';" id="${product.id}">DETAILS</button>
            </div>
         </div>
         `;
        this.productsDiv.innerHTML = output;
      }
    });
  }

  showSleepingProducts(products) {
    let output = "";
    products.forEach((product) => {
      if (product.category == "sleeping") {
        output += ` 
         <div class="card m-3 " style="width: 18rem;">
            <div class="card-body">
               <img src="${product.image}" class="card-img-top" alt="...">
               <h4 class="card-title">${product.name}</h4>
               <h6 class="card-title">${product.title} </h6>
               <h4 class="card-price">$ ${product.price}</h4>
               <button class="btn btn-outline-success details" onclick="location.href='details.html?id=${product.id}';" id="${product.id}">DETAILS</button>
            </div>
         </div>
         `;
        this.productsDiv.innerHTML = output;
      }
    });
  }

  showBackpackProducts(products) {
    let output = "";
    products.forEach((product) => {
      if (product.category == "backpack") {
        output += ` 
         <div class="card m-3 " style="width: 18rem;">
            <div class="card-body">
               <img src="${product.image}" class="card-img-top" alt="...">
               <h4 class="card-title">${product.name}</h4>
               <h6 class="card-title">${product.title} </h6>
               <h4 class="card-price">$ ${product.price}</h4>
               <button class="btn btn-outline-success details" onclick="location.href='details.html?id=${product.id}';" id="${product.id}">DETAILS</button>
            </div>
         </div>
         `;
        this.productsDiv.innerHTML = output;
      }
    });
  }
  showKitchenProducts(products) {
    let output = "";
    products.forEach((product) => {
      if (product.category == "kitchen") {
        output += ` 
         <div class="card m-3 " style="width: 18rem;">
            <div class="card-body">
               <img src="${product.image}" class="card-img-top" alt="...">
               <h4 class="card-title">${product.name}</h4>
               <h6 class="card-title">${product.title} </h6>
               <h4 class="card-price">$ ${product.price}</h4>
               <button class="btn btn-outline-success details" onclick="location.href='details.html?id=${product.id}';" id="${product.id}">DETAILS</button>
            </div>
         </div>
         `;
        this.productsDiv.innerHTML = output;
      }
    });
  }
  showLightsProducts(products) {
    let output = "";
    products.forEach((product) => {
      if (product.category == "light") {
        output += ` 
         <div class="card m-3 " style="width: 18rem;">
            <div class="card-body">
               <img src="${product.image}" class="card-img-top" alt="...">
               <h4 class="card-title">${product.name}</h4>
               <h6 class="card-title">${product.title} </h6>
               <h4 class="card-price">$ ${product.price}</h4>
               <button class="btn btn-outline-success details" onclick="location.href='details.html?id=${product.id}';" id="${product.id}">DETAILS</button>
            </div>
         </div>
         `;
        this.productsDiv.innerHTML = output;
      }
    });
  }
  showBikeProducts(products) {
    let output = "";
    products.forEach((product) => {
      if (product.category == "bike") {
        output += ` 
         <div class="card m-3 view " style="width: 18rem;">
            <div class="card-body">
               <img src="${product.image}" class="card-img-top " alt="...">
               <h4 class="card-title">${product.name}</h4>
               <h6 class="card-title">${product.title} </h6>
               <h4 class="card-price">$ ${product.price}</h4>
               <button class="btn btn-outline-success details" onclick="location.href='details.html?id=${product.id}';" id="${product.id}">DETAILS</button>
            </div>
         </div>
         `;
        this.productsDiv.innerHTML = output;
      }
    });
  }
  showProductsAdmin(products) {
    let output = "";
    products.forEach((product) => {
      output += ` 
                  <tr id="table-row">
                     <th scope="row">${product.id}</th>
                     <td>${product.code}</td>
                     <td>${product.name}</td>
                     <td>${product.price}</td>  
                     <td>${product.stock}</td>
                     <td>${product.category}</td>
                     <td><button type="button" class="btn btn-dark delete" id="${product.id}" data-toggle="modal" data-target="#deleteModal" >Delete</button></td>
                  </tr>
                  `;
      this.adminTable.innerHTML = output;
    });
  }
  clearFields() {
    document.getElementById("code").value = "";
    document.getElementById("name").value = "";
    document.getElementById("title").value = "";
    document.getElementById("price").value = "";
    document.getElementById("stock").value = "";
    document.getElementById("category").value = "";
    document.getElementById("image").value = "";
    document.getElementById("description").value = "";
  }

  alertDivAdmin(message, className) {
    let messageDiv = document.querySelector(".messageDiv");
    messageDiv.innerHTML = `<h5 class="${className}" class="u-full-width" style="opacity:0.6;">${message}</h5>`;
    console.log(messageDiv);

    setTimeout(() => (messageDiv.innerHTML = ""), 3000);
  }

  showProductDetails(product) {
    let output = "";
    output += `<div class="messageDiv"></div> 
               <div class="card card-details ">
                  <div class="row ">
                     <div class="col-md-5 border-right">
                        <article class="gallery-wrap"> 
                           <div class="img-big-wrap">
                           <div><a href="#"><img src="${product[0].image}" class="img-fluid" id="prod-img"></a></div>
                           </div> 
                        </article> 
                     </div>
                     <aside class="col-md-7">
                        <article class="card-body p-5">
                           <h3 class="title mb-3 product-name">${product[0].name}</h3>
                           <h5 class="title mb-3 product-title">${product[0].title}</h5>
                           <p class="price-detail-wrap"> 
                           <span class="price h3 text-warning"> 
                           <span class="currency">$</span><span class="num">${product[0].price}</span>
                           </span> 
                           </p>
                           <dl class="item-property">
                           <dt>Description</dt>
                           <dd><p>${product[0].description}</p></dd>
                           </dl>
                           <dl class="param param-feature">
                           <dt>Model#</dt>
                           <dd>${product[0].code}</dd>
                           </dl>           
                           <hr>
                           <div class="row">
                           <div class="col-sm-5">
                              <dl class="param param-inline">
                                 <dt>Quantity: </dt>
                                 <dd>
                                 <div class="field-product">
                                    <input class="quantity field-product--input" id="quantity" min="0" max="20" name="quantity" value="1" type="number">
                                 </div>                  
                                 </dd>
                              </dl>  
                           </div> 
                           <div class="col-sm-7 text-right ">Stock: ${product[0].stock} pcs.</div>
                           </div> 
                           <hr>
                           <a href="cart.html" class="btn btn-lg btn-primary text-uppercase" id="buy-now" onclick="location.href='cart.html'"> Buy now </a>
                           <a  class="btn btn-lg btn-outline-primary text-uppercase addCart" id="${product[0].id}"> <i class="fas fas-shopping-cart"></i> Add to cart </a>
                        </article>
                     </aside>
                  </div> 
               </div> 
               `;
    this.detailsDiv.innerHTML = output;
    btnAddToCart();
  }

  showProductsInCart(products) {
    let output = "";
    const productsIdArr = JSON.parse(localStorage.getItem("cart"));
    console.log(productsIdArr);
    let productId = "";
    for (let i = 0; i <= productsIdArr.length - 1; i++) {
      productId = productsIdArr[i];
      products.forEach((product) => {
        if (productId == product.id) {
          output += ` <tr class="table-row-cart">
                        <td><img src="${product.image}" width="42" height="42"/> </td>
                        <td><a href='details.html?id=${product.id}'>${product.name}</a></td>
                        <td>Stock: ${product.stock}</td>
                        <td><input class="form-control quantity-input" type="number" value="1" /></td>
                        <td class="text-right product-price">${product.price} €</td>
                        <td class="text-right">
                        <button class="btn btn-sm btn-danger" id="${product.id}"><i class="fa fa-trash"></i> </button> </td>
                        </tr>`;
          this.cartTable.innerHTML = output;
        }
      });
    }
  }

  updateNavCartIcon() {
    const productsIdArr = JSON.parse(localStorage.getItem("cart"));
    let counter = 0;
    for (let i = 0; i < productsIdArr.length + 1; i++) {
      this.cartIcon.innerHTML = counter++;
    }
    // console.log(counter);
  }
}

export const ui = new UI();
