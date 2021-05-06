const createMenuItem = function (foodObj) {
  const image = foodObj.photo_url
  const name = foodObj.name
  const price = foodObj.price
  const ing = foodObj.ingredients
  const foodId = foodObj.id
  const menuItem = $(`<article class = "menu-container" data-id="${foodId}">
  <div class = "item-text">
  <div class = "item-name">${name}</div>
  <div class = "price">${price}</div>
  <div class = "description">Ingredients: ${ing}
  <img class = "item-img" src = "${image}"/>
          </div>
        </div>
    </article>`)
  return menuItem;
}

const renderMenuItems = function (items) {
  for (let item of items) {
    if (item.category === 'standard pizza') {
      $('#all-std-items').prepend(createMenuItem(item))
    }
    if (item.category === 'signature pizza') {
      $('#all-sig-items').prepend(createMenuItem(item))
    }
    if (item.category === 'sides') {
      $('#all-side-items').prepend(createMenuItem(item))
    }
    if (item.category === 'drink') {
      $('#all-drink-items').prepend(createMenuItem(item))
    }
    if (item.category === 'dessert') {
      $('#all-dessert-items').prepend(createMenuItem(item))
    }
  }

  let navIndex = 0;
  let numItems = 0;
  let total = 0;
  $(".menu-container").click(function () {
    numItems += 1;
    navIndex += 1;
    const cartNumber = $(this).parent().parent().parent().parent().parent().find('.cart-badge');
    const navCartNumber = $(this).parent().parent().parent().parent().parent().find('.badge');
    navCartNumber.text(navIndex);
    cartNumber.text(numItems);

    const image = $(this).children(".item-img").attr('src');
    const name = $(this).children().children()[0].innerText;
    const price = $(this).children().children()[1].innerText;
    const foodId = this.getAttribute('data-id');
    const menuItem = $(`
      <li class="clearfix" data-id="${foodId}">
        <input type="hidden" name="price" value="${price}">
        <input type="hidden" name="foodId" value="${foodId}">
        <img src="${image}" alt="item1" />
        <span class="item-name">${name}</span>
        <span class="item-price">$${price}</span>
        <button class="item-remove" type="click"> <i class="far fa-trash-alt"></i> </button>
      </li>
      `);

    $(menuItem.children()[5]).click(function () {
      numItems -= 1;
      navIndex--;
      total -= price;
      $("#total-price")[0].innerText = total;
      navCartNumber.text(navIndex);
      cartNumber.text(numItems);
      $(this).parent().remove();
    })

    $('.shopping-cart-items').prepend(menuItem);
    if (cartNumber.val() !== 0) {
      $('.badge').css("background-color", 'red');

      setTimeout(function () {
        $('.badge').css("background-color", '#6394F8');
      }, 1000);
    }

    const totalPrice = $(this).parent().parent().parent().parent().parent().find(".main-color-text");
    const priceToDecimal = parseFloat(price);

    totalPrice.text((total += priceToDecimal));
  })
}


$(document).ready(function () {
  $.get("/foods", function (foods) {
    renderMenuItems(foods);
  })

  $("#shopping-submit").submit(function (event) {
    event.preventDefault();
    const itemsInCart = [];
    for (const item of this.elements) {
      const cartItem = {};
      if (item.name === "foodId") {
        cartItem.foodId = item.value;
        cartItem.quantity = 1;
        itemsInCart.push(cartItem);
      }
    }


    $.ajax({
      type: "POST",
      url: "/orders",
      data: { itemsInCart }
    }).done((response) => {
      setTimeout(() => {
        window.location.replace("/");
        //alert("Order submitted!");
      }, 1);
      //$.redirect("/", response);
      //return response;
      // window.location.href = '/'
    }).fail((err) => {
      console.log(err);
    });
  });


  $("#search_form").click(function () {
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
