const createFoodList = function(itemsArr) {
  let itemList = '<ul>'
  for(const item of itemsArr) {
    itemList += ` <li>${item.food_name}</li>`
  }
  return itemList += '</ul>'
}

const createQuantityList = function(itemsArr) {
  let itemList = '<ul>'
  for(const item of itemsArr) {
    itemList += ` <li>${item.quantity}</li>`
  }
  return itemList += '</ul>'
}

const createPriceList = function(itemsArr) {
  let itemList = '<ul>'
  for(const item of itemsArr) {
    itemList += ` <li>${item.price}</li>`
  }
  return itemList += '</ul>'
}

const createHistoryItem = function(historyObj) {
  const order_id = historyObj.order_id
  const orderList = `<div class="individual-order">
  <div class="order-info">
    <span>${order_id}</span>
    <div class=order-right>
      <span>total price</span>
      <span>date</span>
    </div>
  </div>
  <div class="details-container">
    <footer class="order-details">
      <span>Items`
   const foodList =  createFoodList(historyObj.items)
   const span1 = `</span>
   <span>Quantity`
   const quantityList = createQuantityList(historyObj.items)
   const span2 = `</span>
   <span>Price`
   const priceList = createPriceList(historyObj.items)
   const span3 =`</span>
    </footer>
  </div>
</div>`

    return $(orderList+foodList+span1+quantityList+span2+priceList+span3)
}


const renderOrderItems = function(items) {
  for (item in items) {
  $(".history-body").prepend(createHistoryItem(items[item]))
}}





$(document).ready(function() {

  $.get("/history/reshaped", function(history){
    renderOrderItems(history)
  })

  $('.individual-order').click(function() {
    const $container = $(this).find(".details-container");
    console.log('its clicked')
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
