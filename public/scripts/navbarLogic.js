$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > window.innerHeight * 0.65) {
      $("nav").addClass("nav-change-color");
    }
    if ($(window).scrollTop() < window.innerHeight * 0.65 + 1) {
      $("nav").removeClass("nav-change-color");
    }
  });
});
