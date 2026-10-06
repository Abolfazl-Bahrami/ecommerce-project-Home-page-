import { products } from '../data/products.js';
export function suggestCart() {
  let showCart = 12;
  const cartItems = () => {
    if (products.length <= showCart) {
      document.querySelector(".show-more").style.display = "none";
    } else {
      document.querySelector(".show-more").style.display = "inline-block";
    }

    if (showCart <= 12) {
      document.querySelector(".show-less").style.display = "none";
    } else {
      document.querySelector(".show-less").style.display = "inline-block";
    }
    let suggest = '';
    products.forEach((cart, index) => {
      if (index < showCart) {
        suggest += `
        <div class="suggeste-cart">
          <div class="img-cart-div">
            <img class="img-cart" src="${cart.image}"
              alt="${cart.name}">
          </div>
          <div class="cart-informaition">
            <p class="product-name">${cart.name}</p>
            <div class="rate">
              <p class="product-rate-count">${cart.rating.count}</p>
              <img class="product-rate-star" src="./assets/ratings/rating-${cart.rating.stars * 10}.png" alt="rat">
            </div>
            <p class="product-price">${cart.priceToman} تومان</p>
            <button class="add-to-cart-button">افزودن به سبد خرید</button>
          </div>
        </div>
      `
      }
    })

    document.querySelector(".suggest-carts").innerHTML = suggest;
  }
  cartItems();

  document.querySelector(".show-more").addEventListener("click", () => {
    showCart += 12;
    cartItems();
  })

  document.querySelector(".show-less").addEventListener("click", () => {
    showCart -= 12;
    cartItems();
  })
}