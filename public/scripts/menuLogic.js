const createMenuItem = function(foodObj) {
  const image = foodObj.photo_url
  const name = foodObj.name
  const price = foodObj.price
  const desc = foodObj.description
  const menuItem = $(`<article class = "menu-container">
      <img class = "item-img" src = "${image}"/>
        <div class = "item-text">
          <div class = "item-name">${name}</div>
          <div class = "price">${price}</div>
          <div class = "description">Description: ${desc}
          </div>
        </div>
    </article>`)

    return menuItem
}


const renderMenuItems = function(items) {
  for (let item of items) {
    if (item.category === 'standard pizza'){
    $('#all-std-items').prepend(createMenuItem(item))
    }
    if (item.category === 'signature pizza'){
    $('#all-sig-items').prepend(createMenuItem(item))
    }
    if (item.category === 'sides'){
    $('#all-side-items').prepend(createMenuItem(item))
    }
    if (item.category === 'drink'){
    $('#all-drink-items').prepend(createMenuItem(item))
    }
    if (item.category === 'dessert'){
    $('#all-dessert-items').prepend(createMenuItem(item))
    }
}
}

$(document).ready(function() {
  $.get("/foods", function(foods){
    renderMenuItems(foods)
  })
})
