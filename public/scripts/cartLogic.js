// coaddToCart = function() {
//   $(".menu-container").click(function () {
//     console.log("clicked");
//     $(".menu-container").css("background-color","yellow");
//   })
// }
const cartSlide = function() {
  $("#cart-btn").on("click", function() {
    $(".shopping-cart").fadeToggle( "slow");
  });
}

$( document ).ready(function() {
  cartSlide();
  //addToCart();
  console.log("this file is loaded");

});
