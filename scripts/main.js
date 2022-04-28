function burgerMenu() {
    var x = document.getElementById("top-nav-menu");
    if (x.className === "top-nav") {
        x.className += " responsive";
    } else {
        x.className = "top-nav";
    }
}

var asc = document.getElementById("asc");
var dec = document.getElementById("dec");
var col_one = document.getElementById("col-one")
var order = 1;

function changeOrder(params) {
    col_one.style.order = 1 + order;
    order++;
    if (order > 3) {
        order = 1;
    }
}

const effortless_text = document.getElementById("effortless-text");
const effortless_img = document.getElementById("effortless-img");
const marketers_pos = document.getElementById("marketers");
const effortless = effortless_text.offsetTop;
const marketers = marketers_pos.offsetTop;

window.onscroll = function() {load_animation()};

function load_animation() {
  if (document.documentElement.scrollTop > effortless -150) {
    effortless_text.classList.add("toLeft");
    effortless_img.classList.add("toRight");
  }
  if (document.documentElement.scrollTop > marketers -150) {
    marketers_pos.classList.add("show");
  }
}