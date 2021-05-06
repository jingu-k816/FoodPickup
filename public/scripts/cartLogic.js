const cartSlide = function() {
  $("#cart-btn").on("click", function() {
    $("#shopping-submit").fadeToggle( "slow");
  });
}

$( document ).ready(function() {
  cartSlide();
});
