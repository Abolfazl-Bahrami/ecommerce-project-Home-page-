import { products } from "../data/products.js";
import { popularCart } from "./popular-carts.js";

let sortpopularCart = [...products].sort((a,b)=>{
  if(a.rating.stars !== b.rating.stars){
    return b.rating.stars - a.rating.stars;
  }
  return b.rating.count - a.rating.count;
})



let carts = '';

sortpopularCart.forEach((cart , index) =>{
  if(index <= 10 ){
    carts += `
      <li>
        <div class="img-cart-div">
          <img class="img-cart" src="${cart.image}" alt="${cart.name}">
        </div>
        <div class="cart-informaition">
          <p class="product-name">${cart.name}</p>
          <div class="rate">
            <p class="product-rate-count">${cart.rating.count}</p>
            <img class="product-rate-star" src="./assets/ratings/rating-${cart.rating.stars * 10}.png" alt="${cart.rating.stars}">
          </div>
          <p class="product-price">${cart.priceToman} تومان</p>
          <button class="add-to-cart-button">افزودن به سبد خرید</button>
        </div>
      </li>
    `
  }
})

document.querySelector(".popular-carts").innerHTML = carts;
popularCart();