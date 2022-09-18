// Start Image Carousel
const imgs = [
  {
      id : 1,
      img : 'images/img0._SX3000_.webp',
  },
  {
      id : 2,
      img : 'images/img2._SX3000_.webp',
  },
  {
      id : 3,
      img : 'images/img3._SX3000_.webp',
  },
  {
      id : 4,
      img : 'images/img4._SX3000_.webp',
  },
]
const mainImg  = document.querySelector('.main-img')
const leftClickCarousel = document.querySelector('.img-btn #left');
const rightClickCarousel = document.querySelector('.img-btn #right');
const  section = document.querySelector(".first-section");

var timer;
window.addEventListener('DOMContentLoaded', ()=> {
  myImg()
})
// remove border for right and left when click outside hem
section.addEventListener('click', ()=> {
  rightClickCarousel.classList.remove('add-border')
  leftClickCarousel.classList.remove('add-border')
})

let cont = 0;
// When Click left (decrease)
leftClickCarousel.addEventListener('click', ()=> {
  cont--
  if(cont < 0){
      cont = imgs.length -1
  }
  myImg()
  leftClickCarousel.classList.add('add-border')
  rightClickCarousel.classList.remove('add-border')

})
// When click right (increase)
rightClickCarousel.addEventListener('click', ()=> {
  cont++
  if(cont > imgs.length -1){
      cont = 0;
  }
  myImg()
  rightClickCarousel.classList.add('add-border')
  leftClickCarousel.classList.remove('add-border')

})
// Function Slider
function myImg(){
  const img= imgs[cont]
  let sect = `
  <img src="${img.img}" alt="">
  `
  mainImg.innerHTML = sect
}

// End Image Carousel


const input = document.querySelector("input");
const allSearch = document.getElementById("all-search");
const main = document.querySelector("main");
const searchBtn = document.querySelector(".fa-magnifying-glass");

// Add outline for All Search
input.addEventListener("click", () => {
    allSearch.classList.toggle("search-out");
});
// Add outline for Search icon
searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("out-show");
});
// click main for remove outline
main.addEventListener("click", () => {
  allSearch.classList.remove("search-out");
});

// Add and remove hover for language
const langHover = document.getElementById("lang");
const langShow = document.querySelector(".lang-setting");
const mybackhover = document.querySelector('.mybackhover')
langHover.addEventListener("mouseenter", () => {
  langShow.style.display = "block";
  mybackhover.style.display = "block"
});
langHover.addEventListener("mouseleave", () => {
  langShow.style.display = "none";
  mybackhover.style.display = "none"
});
// Add and remove hover for Account
const accountHover = document.getElementById("account");
const accountShow = document.querySelector(".account-setting");
accountHover.addEventListener("mouseenter", () => {
  accountShow.style.display = "flex";
  mybackhover.style.display = "block"
});
accountHover.addEventListener("mouseleave", () => {
    accountShow.style.display = "none";
    mybackhover.style.display = "none"
});

// Back to top
const backTop = document.querySelector(".back")
backTop.addEventListener('click', ()=> {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})

// Show NavBar 
const all = document.getElementById('all')
const navBar = document.querySelector('.nav-bar')
const mybackhover2 = document.querySelector('.mybackhover2')
const exite = document.getElementById('exite')
all.addEventListener('click', ()=> {
  navBar.style.display = 'block'
  document.body.style.overflow = "hidden"
  mybackhover2.style.display = "block"
})
exite.addEventListener('click', ()=> {
  navBar.style.display = 'none'
  document.body.style.overflow = "auto"
  mybackhover2.style.display = "none"
})
mybackhover2.addEventListener('click', ()=> {
  navBar.style.display = 'none'
  document.body.style.overflow = "auto"
  mybackhover2.style.display = "none"
})