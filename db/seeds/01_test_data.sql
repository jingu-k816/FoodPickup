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
('Elise Fowler', 118745443, 'password'),
('Elise Fowler', 118745443, 'password');

INSERT INTO categories (name) VALUES('sides');
INSERT INTO categories (name) VALUES('pizza');
INSERT INTO categories (name) VALUES('most popular');
INSERT INTO categories (name) VALUES('drink');
INSERT INTO categories (name) VALUES('dessert');

INSERT INTO food_items (name, photo_url, price, description, ingredients, category_id) VALUES ('cheese pizza', 'url', 15.00, 'cheese pizza', 'cheese, pizza, tomato sauce', 2 ),
('pepperoni pizza', 'url', 15.00, 'pepperoni pizza', 'pepperoni, pizza, tomato sauce', 2 ),
('vegetarian pizza', 'url', 15.00, 'vegetarian pizza', 'vegetables, pizza, tomato sauce', 2 ),
('meat lovers pizza', 'url', 15.50, 'meat lovers pizza', 'meat, pizza, tomato sauce', 3 ),
('love pizza', 'url', 15.00, 'love pizza', 'love, pizza, tomato sauce', 2 ),
('fries', 'url', 03.00, 'fries', 'potato', 1 ),
('coleslaw', 'url', 01.50, 'coleslaw', 'mayoniese, vegetables', 1 ),
('onion rings', 'url', 03.50, 'onion rings', 'onion, potato', 1 ),
('water', 'url', 01.50, 'water', 'water', 4 ),
('coke', 'url', 02.50, 'coke', 'coke', 4 ),
('7-up', 'url', 02.50, '7-up', '7-up', 4 ),
('cheese cake', 'url', 05.50, 'cheese cake', 'cheese, cake', 5 ),
('deep fried mars bars', 'url', 05.50, 'mars bar', 'lots of oil, mars bar', 5 );

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
