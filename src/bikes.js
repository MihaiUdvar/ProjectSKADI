import { http } from './http.js';
import { ui } from './ui.js';

// Get Get Category ALL products on click
document.addEventListener('DOMContentLoaded', getBikeProducts);

function getBikeProducts() {
   http.get('http://localhost:3000/products').then((data) => ui.showBikeProducts(data));
}


