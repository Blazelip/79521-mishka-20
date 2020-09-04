document.addEventListener("DOMContentLoaded", function() {

  var navMain = document.querySelector(".main-nav");
  console.log(navMain);
  var navToggle = navMain.querySelector(".main-nav__toggle");
  console.log(navToggle);
  var openCart = document.querySelectorAll(".open-cart");
  console.log(openCart);
  var popup = document.querySelector(".modal-cart");
  console.log(popup);
  var closeCart = popup.querySelector(".close-cart");
  console.log(closeCart);

  navMain.classList.remove("main-nav--nojs");

  navToggle.addEventListener("click", function() {
    navMain.classList.toggle("main-nav--closed");
    navMain.classList.toggle("main-nav--opened");
  });

  for (i = 0; i < openCart.length; i++) {
    openCart[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.add("modal-cart--show");
    });
  }

  closeCart.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-cart--show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27 && popup.classList.contains("modal-cart--show")) {
        evt.preventDefault();
        popup.classList.remove("modal-cart--show");
    }
  });
});
