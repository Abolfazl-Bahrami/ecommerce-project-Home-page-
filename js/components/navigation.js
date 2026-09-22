export const setActive = ()=>{
  const item = localStorage.getItem("nav") || "home";
  document.querySelectorAll(".nav-items").forEach(navItem =>{
    navItem.classList.toggle("active" , navItem.classList.contains(item));
    navItem.addEventListener("click" , ()=>{
      const item = [...navItem.classList].find(cls => cls !== "nav-items" && cls !== "active" );
      localStorage.setItem("nav" , item);
    })
  })
}

