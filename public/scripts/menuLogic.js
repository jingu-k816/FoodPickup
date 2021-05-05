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

    return menuItem;
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
  let navIndex = 1;
  let shoppingCartIndex = 1;
  let initialPrice = 0;
    $(".menu-container").click(function () {
      console.log("Menu container triggered");
      const cartNumber = $(this).parent().parent().parent().parent().parent().find('.cart-badge');
      const navCartNumber = $(this).parent().parent().parent().parent().parent().find('.badge');
      navCartNumber.text(navIndex++);
      cartNumber.text(shoppingCartIndex++);

      const image = $(this).children(".item-img").attr('src');
      const name = $(this).children().children()[0].innerText;
      const price = $(this).children().children()[1].innerText;
      const menuItem = $(`
      <li class="clearfix">
        <img src="${image}" alt="item1" />
        <span class="item-name">${name}</span>
        <span class="item-price">$${price}</span>
        <button class="item-remove-${navIndex}" type="click"> <i class="far fa-trash-alt"></i> </button>
      </li>
      `);

      $('.shopping-cart-items').prepend(menuItem);

      const totalPrice = $(this).parent().parent().parent().parent().parent().find(".main-color-text");
      const priceToDecimal = parseFloat(price);

      totalPrice.text(initialPrice+=priceToDecimal);

      $(`.item-remove-${navIndex}`).click(function() {
        console.log("item remove triggered from line 68");
        const totalPrice = parseFloat($("#total-price")[0].innerText);
        console.log("WHAT IS TOTAL PRICE", {totalPrice, price});
        $("#total-price")[0].innerText = totalPrice - price;
        navCartNumber.text(navIndex--);
        cartNumber.text(shoppingCartIndex--);
        $(this).parent().remove();
      })

    })
}


$(document).ready(function() {
  $.get("/foods", function(foods){
    renderMenuItems(foods);
  })

  $(".item-remove").click(function() {
    console.log("this gets triggered from line 76");
  })

  $("#search_form").click(function(){
    const query = document.getElementById('search').value;
    window.find(query);
    return true;
})
  const target = $('.toc')
  target.after('<div class="affix" id="affix"></div>')

  const affix = $('.affix')
  affix.append(target.clone(true))

  // Show affix on scroll.
  const element = document.getElementById('affix')
  if (element !== null) {
    const position = target.position()
    window.addEventListener('scroll', function () {
      const height = $(window).scrollTop()
      if (height > position.top - 120) {
        target.css('visibility', 'hidden')
        affix.css('display', 'block')
      } else {
        affix.css('display', 'none')
        target.css('visibility', 'visible')
      }
    })
  }
})
