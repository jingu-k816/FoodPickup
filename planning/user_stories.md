# The user stories

> - As a customer 
> >  I should be able to see the menu with pictures and prices upon opening the app
> >  Because I want to order food

- As a customer 
> >  I should be able to add food items into my cart
> >  Because everything will be in one place when I check out

- As a customer
> >  I should be able to click hyper links to get to different parts of the menu
> >  Because this way I can get to the items I want faster

- As a customer
> >  I should be able to search for different food items
> >  Because this way I can get to the items I want faster

- As a customer
> >  I should be able to log in with my phone number
> >  Because I want to be able receive automated text messages from the restaurant when my food is ready

- As a customer 
> >  I want to see the address and the business hours, phone number and other informations about the resturant
> >  Because I want to know where to go for pick up and be able to contact them if somethiing goes wrong

- As a customer 
> >  I want to be able to see my past order history and be able reorder the exact same order
> >  Because this will make ordering faster

- As the restaurant
> >  I should be have the restaurant phone number linked to the website
> >  Because I want to know when someone orders

- As the restaurant
> >  I want to be able to update the customer on the status of our preperation
> >  Because I want there to be clear communication between the two parties


#####
# Routes
1. GET ‘/‘
- We should have the root directory of ‘/‘ which will display the home page, 
- having a nav bar that displays a register and login page, when a user is logged in it will display a logout button as well as a menu. 

2. GET and POST ‘/register’
- If a user presses on the register button from the root directory it will take them to ‘/register’ directory 
- where they can input their name phone number and password to create an account.

3. GET and POST ‘/login’
- If an individual presses the login button it will send a http request to the ‘/login’ page where a user can login if they have an account

4. GET ‘/restaurant’
- If a user who is associated with the restaurant logs in it will redirect them to ‘/restaurant’ 
- where it will display the incoming orders and they can choose to start the order (is_processing) and 
- when the order is complete press another button for completion (is_complete)

- If the user is not associated with the restaurant they are considered a customer. 
- After logging in they will be redirected to the ‘/‘ directory where they can place orders. 
- Placing an order will send a http POST request with the items in their order to the ‘/restaurant’ directory where restaurant users can update the status of the order.

5. GET ad POST '/cart'
- Placing an order from the cart page will send a http POST requeset with the items in user's order to the '/restaurant' directory
- where restaurant users can update the status of the order. 
