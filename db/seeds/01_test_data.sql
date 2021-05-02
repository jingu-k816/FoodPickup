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

INSERT INTO food_items (name, photo_url, price, description, ingredients, category_id) VALUES ('cheese pizza', 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80', 15.00, 'cheese pizza', 'cheese, pizza, tomato sauce', 2 ),
('pepperoni pizza', 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80', 15.00, 'pepperoni pizza', 'pepperoni, pizza, tomato sauce', 2 ),
('vegetarian pizza', 'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1045&q=80', 15.00, 'vegetarian pizza', 'vegetables, pizza, tomato sauce', 2 ),
('meat lovers pizza', 'https://images.unsplash.com/photo-1590083745251-4fdb0b285c6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80', 15.50, 'meat lovers pizza', 'meat, pizza, tomato sauce', 3 ),
('love pizza', 'https://images.unsplash.com/photo-1589840700256-f78d6ed1ae21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80', 15.00, 'love pizza', 'love, pizza, tomato sauce', 2 ),
('fries', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.seriouseats.com%2Frecipes%2F2010%2F05%2Fperfect-french-fries-recipe.html&psig=AOvVaw1iIgI6ZpOfLPxwSn5so78G&ust=1619989881722000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjqkt6yqfACFQAAAAAdAAAAABAD', 03.00, 'fries', 'potato', 1 ),
('coleslaw', 'https://barefeetinthekitchen.com/wp-content/uploads/2018/05/memphis-coleslaw-reshoot-3-1-of-1.jpg', 01.50, 'coleslaw', 'mayoniese, vegetables', 1 ),
('onion rings', 'http://cooknshare.com/wp-content/uploads/2018/10/Snapshot_1160-800x450.png', 03.50, 'onion rings', 'onion, potato', 1 ),
('water', 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/06/glass-drinking-water-1296x728-header-1.jpg?w=1155&h=1528', 01.50, 'water', 'water', 4 ),
('coke', 'https://www.thedailymeal.com/sites/default/files/story/2019/New_Coke_Resized.jpg', 02.50, 'coke', 'coke', 4 ),
('7-up', 'https://img.prairiedogbrewing.ca/wp-content/uploads/2020/09/24013000/20200923-_MG_3218-scaled.jpg', 02.50, '7-up', '7-up', 4 ),
('cheese cake', 'https://natashaskitchen.com/wp-content/uploads/2020/05/Pefect-Cheesecake-7.jpg', 05.50, 'cheese cake', 'cheese, cake', 5 ),
('deep fried mars bars', 'https://truffle-assets.imgix.net/81133ca6-deepfried-marsbar_landscapeThumbnail_en.jpeg', 05.50, 'mars bar', 'lots of oil, mars bar', 5 );

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
