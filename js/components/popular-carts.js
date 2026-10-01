export function popularCart() {
  const carts = document.querySelectorAll(".gallery li");
  let selecteCart = 0 ;
  chnageCart();
  let timerId;
  function startTimer(){
    clearInterval(timerId);

    timerId = setInterval(() => {
    selecteCart = (selecteCart + 1) % carts.length;
    chnageCart();
    }, 4000);
  }

  startTimer();
  function getSpace(index , selecteCart , length){
    let space = index - selecteCart ;
    if(space > length / 2 ){
      space -= length ;
    }

    if(space < -length /2 ){
      space += length ;
    }

    return space;
  }
  function chnageCart (){
    carts.forEach((cart , index)=>{
      const space = getSpace(index , selecteCart , carts.length);
      cart.style.transform = `
      translateX(${space * (Math.abs(space) <= 2 ? 265 : 255) }px)`
      cart.style.opacity = (Math.abs(space) <= 2 ? 1 : (Math.abs(space) <= 4 ? Math.abs(space/5) : 0));
      cart.style.transform += ` scale(${Math.abs(space) <= 2 ? 1 : 0.9})`
    })
  }
  document.querySelector(".next-cart")
    .addEventListener("click" , ()=>{
      selecteCart = (selecteCart + 1) % carts.length;
      clearInterval(timerId);
      chnageCart();
      startTimer();
  })

  document.querySelector(".before-cart")
    .addEventListener("click" , ()=>{
      selecteCart = (selecteCart - 1 + carts.length) % carts.length;
      clearInterval(timerId);
      chnageCart();
      startTimer();
    })
}