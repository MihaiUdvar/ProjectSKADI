class UI {
   constructor(){
      this.productsDiv = document.getElementById('products');
      this.tentProductsDiv = document.getElementById('tent-products')
      this.sleepingProductsDiv = document.getElementById('sleeping-products')
      this.title = document.getElementById('title');
      this.price = document.getElementById('price');
      this.image = document.getElementById('image');
      this.description = document.getElementById('description');
      this.category = document.getElementById('category');
   }

   
   showProducts(products) {
      let output = '';
      products.forEach((product) => {
         output += ` 
         <div class="card m-3 " style="width: 18rem;">
            <div class="card-body">
               <img src="${product.image}" class="card-img-top" alt="...">
               <h4 class="card-title">${product.name}</h4>
               <h6 class="card-title">${product.title} </h6>
               <h4 class="card-price">$ ${product.price}</h4>
               <button class="btn btn-outline-success details" onclick="location.href='https://google.com';" id="${product.id}">DETAILS</button>
            </div>
         </div>
         `;
         this.productsDiv.innerHTML = output;
      });
   }

   showTentProducts(products) {
      let output = '';
      products.forEach(function(product){ 
         if(product.category == "tent"){
         output += ` 
         <div class="card m-3 " style="width: 18rem;">
            <div class="card-body">
               <img src="${product.image}" class="card-img-top" alt="...">
               <h4 class="card-title">${product.name}</h4>
               <h6 class="card-title">${product.title} </h6>
               <h4 class="card-price">$ ${product.price}</h4>
               <button class="btn btn-outline-success details" onclick="location.href='https://google.com';" id="${product.id}">DETAILS</button>
            </div>
         </div>
         `;
         this.tentProductsDiv.innerHTML = output;
         }
         else if(product.category == "sleeping"){
            output += ` 
            <div class="card m-3 " style="width: 18rem;">
               <div class="card-body">
                  <img src="${product.image}" class="card-img-top" alt="...">
                  <h4 class="card-title">${product.name}</h4>
                  <h6 class="card-title">${product.title} </h6>
                  <h4 class="card-price">$ ${product.price}</h4>
                  <button class="btn btn-outline-success details" onclick="location.href='https://google.com';" id="${product.id}">DETAILS</button>
               </div>
            </div>
            `;
            this.sleepingProductsDiv.innerHTML = output;
            }
         else{
            console.log('this function works');
         }
      })
   }

   // showSleepingProducts(products) {
   //    let output = '';
   //    products.forEach((product) => {
   //       if(product.category == "sleeping"){
   //       output += ` 
   //       <div class="card m-3 " style="width: 18rem;">
   //          <div class="card-body">
   //             <img src="${product.image}" class="card-img-top" alt="...">
   //             <h4 class="card-title">${product.name}</h4>
   //             <h6 class="card-title">${product.title} </h6>
   //             <h4 class="card-price">$ ${product.price}</h4>
   //             <button class="btn btn-outline-success details" onclick="location.href='https://google.com';" id="${product.id}">DETAILS</button>
   //          </div>
   //       </div>
   //       `;
   //       this.productsDiv.innerHTML = output;
   //       }
   //    });
   // }

   showBackpackProducts(products) {
      let output = '';
      products.forEach((product) => {
         if(product.category == "backpack"){
         output += ` 
         <div class="card m-3 " style="width: 18rem;">
            <div class="card-body">
               <img src="${product.image}" class="card-img-top" alt="...">
               <h4 class="card-title">${product.name}</h4>
               <h6 class="card-title">${product.title} </h6>
               <h4 class="card-price">$ ${product.price}</h4>
               <button class="btn btn-outline-success details" onclick="location.href='https://google.com';" id="${product.id}">DETAILS</button>
            </div>
         </div>
         `;
         this.productsDiv.innerHTML = output;
         }
      });
   }
   showKitchenProducts(products) {
      let output = '';
      products.forEach((product) => {
         if(product.category == "kitchen"){
         output += ` 
         <div class="card m-3 " style="width: 18rem;">
            <div class="card-body">
               <img src="${product.image}" class="card-img-top" alt="...">
               <h4 class="card-title">${product.name}</h4>
               <h6 class="card-title">${product.title} </h6>
               <h4 class="card-price">$ ${product.price}</h4>
               <button class="btn btn-outline-success details" onclick="location.href='https://google.com';" id="${product.id}">DETAILS</button>
            </div>
         </div>
         `;
         this.productsDiv.innerHTML = output;
         }
      });
   }
   showLightsProducts(products) {
      let output = '';
      products.forEach((product) => {
         if(product.category == "light"){
         output += ` 
         <div class="card m-3 " style="width: 18rem;">
            <div class="card-body">
               <img src="${product.image}" class="card-img-top" alt="...">
               <h4 class="card-title">${product.name}</h4>
               <h6 class="card-title">${product.title} </h6>
               <h4 class="card-price">$ ${product.price}</h4>
               <button class="btn btn-outline-success details" onclick="location.href='https://google.com';" id="${product.id}">DETAILS</button>
            </div>
         </div>
         `;
         this.productsDiv.innerHTML = output;
         }
      });
   }
   showBikeProducts(products) {
      let output = '';
      products.forEach((product) => {
         if(product.category == "bike"){
         output += ` 
         <div class="card m-3 " style="width: 18rem;">
            <div class="card-body">
               <img src="${product.image}" class="card-img-top" alt="...">
               <h4 class="card-title">${product.name}</h4>
               <h6 class="card-title">${product.title} </h6>
               <h4 class="card-price">$ ${product.price}</h4>
               <button class="btn btn-outline-success details" onclick="location.href='https://google.com';" id="${product.id}">DETAILS</button>
            </div>
         </div>
         `;
         this.productsDiv.innerHTML = output;
         } 
      });
   }
}

export const ui = new UI();
