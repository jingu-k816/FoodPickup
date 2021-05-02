// const createMenuItem = function(foodObj) {

// }




$(document).ready(function() {
  $.get("/foods", function(foods){
    console.log(foods)
  })
})
