const searchBarConatainerEl = document.querySelector(".search-bar-container");

const magnifierEl = document.querySelector(".magnifier")

magnifierEl.addEventListener("click", ()=>{
    searchBarConatainerEl.classList.toggle("active");
})