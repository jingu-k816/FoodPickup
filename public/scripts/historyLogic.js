$(document).ready(function() {

  $('.individual-order').click(function() {
    const $container = $(this).find(".details-container");
    // console.log('its clicked')
    if (!$container.hasClass("hidden")) {
      $container.slideUp(400, function() {
      $(this).addClass("hidden");
      })
    } else {
      $container.slideDown(400, function() {
      $(this).removeClass("hidden");
     });
    }
  });

});
