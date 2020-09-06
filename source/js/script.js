window.addEventListener("load", function() {

  var navMain = document.querySelector(".main-nav");
  var navToggle = navMain.querySelector(".main-nav__toggle");
  var cartButtons = document.querySelectorAll(".open-cart");
  var popup = document.querySelector(".modal-cart");
  var closeCart = document.querySelector(".close-cart");

  navMain.classList.remove("main-nav--nojs");

  navToggle.addEventListener("click", function() {
    navMain.classList.toggle("main-nav--closed");
    navMain.classList.toggle("main-nav--opened");
  });

  if (cartButtons) {
    for (var i = 0; i < cartButtons.length; i++) {
      cartButtons[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        popup.classList.add("modal-cart--show");
      });
    }
  }

  if (closeCart) {
    closeCart.addEventListener("click", function(evt) {
      evt.preventDefault();
      popup.classList.remove("modal-cart--show");
    });
  }

  if (popup) {
    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27 && popup.classList.contains("modal-cart--show")) {
          evt.preventDefault();
          popup.classList.remove("modal-cart--show");
      }
    });
  }
});
