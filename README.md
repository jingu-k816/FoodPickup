Pizza Tent
=========

## Welcome

Welcome to Pizza Tent! A full-stack restaurant web app inspired by Pizza Hut. This app was created using PostgreSQL Express, Node.js, SCSS, HTML and the Twilio API. 
This app is also deployed on Heroku which you can access with the URL: https://pizza-tent.herokuapp.com/ (The site works best with laptops and desktops and was not built with responsive web design)

## Features

1. Functional menu display complete with a table of contents, categories and a search feature.
2. The ability to add items to the cart as well as to checkout.
3. Upon checkout the resturant will receive an SMS informing them of the items the User has ordered.
4. Upon checkout the /orders page will update with the new order of the user.
5. Restaurants will be able to access the /orders page where they can send updates to the user regarding their order.
6. Logged in users will be able to view their own past orders for quick and easy decision making.

## Screenshots

- Main Menu and Cart
![Main Menu and Cart](https://github.com/jingu-k816/FoodPickup/blob/master/AppScreens/Screenshot%20from%202021-05-07%2009-12-36.png?raw=true "Main Menu and Cart")
- Order History
![Order History](https://github.com/jingu-k816/FoodPickup/blob/master/AppScreens/Screenshot%20from%202021-05-07%2009-14-03.png?raw=true "Order History")
- Login Page
![Login Page](https://github.com/jingu-k816/FoodPickup/blob/master/AppScreens/Screenshot%20from%202021-05-07%2009-14-48.png?raw=true "Login Page")
- Orders Page
![Orders Page](https://github.com/jingu-k816/FoodPickup/blob/master/AppScreens/Screenshot%20from%202021-05-07%2009-15-55.png?raw=true "Orders Page")

## Dependencies

- body-parser
- chalk
- cookie-session
- dotenv
- ejs
- express
- morgan
- node-sass-middleware
- pg
- pg-native
- twilio

## Getting Started

- run "npm install" in the command line to download all the dependencies
- type "npm start" or "npm run local" to run the server.
