-- Users table seeds here (Example)
INSERT INTO users (name, phone_number, password) VALUES ('Brooklynn Perez', 999999999, 'password' ),
('Duncan Wilcox', 999436999, 'password'),
('Malik Rios', 916436579, 'password'),
('Miguel Stewart', 999436999, 'password'),
('Corinne Phillips', 999412321, 'password'),
('Greyson Carroll', 123642321, 'password'),
('Madison Smith', 123146521, 'password'),
('Hamza Richardson', 663446521, 'password'),
('Corbin Gillespie', 115436521, 'password'),
('Miah Gentry', 113253121, 'password'),
('Nylah Hall', 332553121, 'password'),
('Hayley Sanders', 113745121, 'password'),
('Sawyer Shepard', 342645443, 'password'),
('Elise Fowler', 118745443, 'password');

INSERT INTO categories (name) VALUES('sides');
INSERT INTO categories (name) VALUES('standard pizza');
INSERT INTO categories (name) VALUES('signature pizza');
INSERT INTO categories (name) VALUES('drink');
INSERT INTO categories (name) VALUES('dessert');

INSERT INTO food_items (name, photo_url, price, ingredients, category_id) VALUES ('margherita pizza', '/menu_photos/pizzas/margherita.png', 15.00, 'chesse', 2 ),
('pepperoni', '/menu_photos/pizzas/pepperoni.png', 15.00, 'pepperoni', 2 ),
('vegetarian', '/menu_photos/pizzas/veggie.png', 15.00, 'mushrooms, corn, asorted pepers, onions', 2 ),
('hawaiian', '/menu_photos/pizzas/hawaiian.png', 15.00, 'ham, pineapple', 2 ),
('chicken supreme', '/menu_photos/pizzas/chicken_supreme.png', 16.00, 'chicken, mushrooms', 3 ),
('supreme', '/menu_photos/pizzas/supreme.png', 16.00, 'beef, black olives, onions, asorted peppers', 3 ),
('bbq americano', '/menu_photos/pizzas/bbq_americano.png', 16.00, 'corn, chicken, bbq sauce', 3 ),
('meat feast', '/menu_photos/pizzas/meat_feast.png', 16.00, 'beef, chicken', 3 ),
('fries', '/menu_photos/sides/fries.png', 03.00, 'potatos', 1 ),
('cheese triangles', '/menu_photos/sides/cheese_triangles.png', 03.50, 'cheese', 1 ),
('chicken bites', '/menu_photos/sides/chicken_bites.png', 03.50, 'chicken', 1 ),
('onion rings', '/menu_photos/sides/onion_rings.png', 03.00, 'onion, potato', 1 ),
('chicken wings', '/menu_photos/sides/chicken_wings.png', 04.50, 'chicken, bbq sauce', 1 ),
('mini corn on the cob', '/menu_photos/sides/corn.png', 02.50, 'corn', 1 ),
('garlic bread', '/menu_photos/sides/garlic_bread.png', 01.50, 'bread, cheese, garlic powder', 1 ),
('jalapeno poppers', '/menu_photos/sides/jalapeno_poppers.png', 01.50, 'jalapenos, bread crumbs, cheese', 1 ),
('sothern fried nugets', '/menu_photos/sides/sothern_fried_nugets.png', 03.50, 'chicken', 1 ),
('black cherry cream soda', '/menu_photos/drinks/black_cherry_cream_soda.png', 02.50, 'ingredients on drink lable', 4 ),
('gingerella', '/menu_photos/drinks/gingerella.png', 02.50, 'ingredients on drink lable', 4 ),
('J20', '/menu_photos/drinks/j20.png', 02.00, 'ingredients on drink lable', 4 ),
('passion fruit martini', '/menu_photos/drinks/passion_fruit_martini.png', 04.50, 'ingredients on drink lable', 4 ),
('capachino', '/menu_photos/drinks/capachino.png', 01.50, 'coffe, milk', 4 ),
('hot chocolate brownie', '/menu_photos/dessert/hot_chocolate_brownie.png', 04.50, 'call for alergen information', 5 ),
('rasberry ice', '/menu_photos/dessert/rasberry_ice.png', 02.50, 'call for alergen information', 5 ),
('tripple chocolate cookie dough', '/menu_photos/dessert/tripple_chocolate_cookie_dough.png', 03.50, 'call for alergen information', 5 );

INSERT INTO orders (user_id, is_accepted, is_completed, is_picked_up) VALUES(1, true, false, false);
INSERT INTO orders (user_id, is_accepted, is_completed, is_picked_up) VALUES(2, true, true, false);
INSERT INTO orders (user_id, is_accepted, is_completed, is_picked_up) VALUES(3, true, true, true);
INSERT INTO orders (user_id, is_accepted, is_completed, is_picked_up) VALUES(4, false, false, false);
INSERT INTO orders (user_id, is_accepted, is_completed, is_picked_up) VALUES(1, false, false, false);
INSERT INTO orders (user_id, is_accepted, is_completed, is_picked_up) VALUES(1, true, true, false);
INSERT INTO orders (user_id, is_accepted, is_completed, is_picked_up) VALUES(7, true, true, false);
INSERT INTO orders (user_id, is_accepted, is_completed, is_picked_up) VALUES(8, true, true, true);
INSERT INTO orders (user_id, is_accepted, is_completed, is_picked_up) VALUES(9, true, false, false);
INSERT INTO orders (user_id, is_accepted, is_completed, is_picked_up) VALUES(10, true, true, true);

INSERT INTO order_items (food_item_id, quantity, order_id) VALUES(1, 2, 1);
INSERT INTO order_items (food_item_id, quantity, order_id) VALUES(2, 1, 1);
INSERT INTO order_items (food_item_id, quantity, order_id) VALUES(4, 1, 1);
INSERT INTO order_items (food_item_id, quantity, order_id) VALUES(5, 1, 2);
INSERT INTO order_items (food_item_id, quantity, order_id) VALUES(1, 1, 2);
INSERT INTO order_items (food_item_id, quantity, order_id) VALUES(6, 4, 5);
INSERT INTO order_items (food_item_id, quantity, order_id) VALUES(6, 4, 5);
