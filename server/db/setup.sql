DROP TABLE IF EXISTS result;
DROP TABLE IF EXISTS user_data;

CREATE TABLE user_data (
  user_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  school VARCHAR(100) NOT NULL,
  year_group INT NOT NULL,
  role VARCHAR(10) NOT NULL DEFAULT 'Student'
);

INSERT INTO user_data (first_name, last_name, school, year_group, email, password)
VALUES
 ('Oliver','Backwell', 'Backwell School', 7 , 'oliver@bjerg.co.uk', '34567890'); 


DROP TABLE IF EXISTS mql_question;

CREATE TABLE mql_question (
    id INT GENERATED ALWAYS AS IDENTITY,
    question_type VARCHAR(50) NOT NULL,
    question_body VARCHAR(500) NOT NULL,
    answer VARCHAR(1000) NOT NULL,
    prompt_one VARCHAR(1000) NOT NULL,
    prompt_two VARCHAR(1000) NOT NULL,
    prompt_three VARCHAR (1000) NOT NULL,
    prompt_four VARCHAR(1000) NOT NULL,
    PRIMARY KEY (id)

);


INSERT INTO mql_question (question_type, question_body, answer, prompt_one, prompt_two, prompt_three, prompt_four)
VALUES
 ('mcq', 'What is the most populated part of the UK?', 'England', 'England', 'Northern Ireland', 'Wales', 'Scotland'),
 ('ooo', 'What is not a city in the UK?', 'Paris', 'London', 'Bristol', 'Paris', 'Swansea'),
 ('mcq', 'What is the capital of France?', 'Paris', 'Paris', 'Rome', 'Madrid', 'Berlin'),
 ('mcq', 'What is the capital of France?', 'Paris', 'Paris', 'Rome', 'Madrid', 'Berlin'),
 ('mcq', 'Which continent is Nigeria in?', 'Africa', 'Asia', 'Europe', 'Africa', 'Australia'),
 ('mcq', 'Which is a renewable energy source?', 'Wind', 'Coal', 'Oil', 'Gas', 'Wind'),
 ('mcq', 'Which ocean is the largest?', 'Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'),
 ('mcq', 'Which country is in Europe?', 'Germany', 'Brazil', 'Germany', 'India', 'China'),
 ('mcq', 'What is the capital of Japan?', 'Tokyo', 'Seoul', 'Beijing', 'Tokyo', 'Bangkok'),
 ('mcq', 'Which is a human feature?', 'City', 'Mountain', 'River', 'City', 'Forest'),
 ('mcq', 'Which is a natural feature?', 'River', 'School', 'Bridge', 'River', 'Road'),
 ('mcq', 'Which country is in Africa?', 'Kenya', 'France', 'Kenya', 'USA', 'Spain'),
 ('mcq', 'Which is the Equator?', '0 degrees latitude', '90 degrees north', '0 degrees latitude', '45 degrees south', '180 degrees'),
 ('mcq', 'Which direction is opposite North?', 'South', 'East', 'West', 'South', 'Up'),
 ('mcq', 'Which is a desert?', 'Sahara', 'Amazon', 'Sahara', 'Alps', 'Thames'),
 ('mcq', 'Which continent is the UK in?', 'Europe', 'Asia', 'Europe', 'Africa', 'South America'),
 ('mcq', 'What do we use to find direction?', 'Compass', 'Thermometer', 'Compass', 'Clock', 'Camera'),
 ('mcq', 'Which is a river?', 'Nile', 'Everest', 'Nile', 'Sahara', 'Amazon rainforest'),
 ('ooo', 'Which is the odd one out? (continents)', 'France', 'Africa', 'Asia', 'Europe', 'France'),
 ('ooo', 'Which is the odd one out? (UK countries)', 'Ireland', 'England', 'Scotland', 'Wales', 'Republic of Ireland'),
 ('ooo', 'Which is the odd one out? (types of rainfall)', 'Evaporation', 'Relief rainfall', 'Convectional rainfall', 'Frontal rainfall', 'Evaporation'),
 ('ooo', 'Which is the odd one out? (layers of the Earth)', 'Atmosphere', 'Crust', 'Mantle', 'Core', 'Atmosphere'),
 ('ooo', 'Which is the odd one out? (map skills)', 'Temperature', 'Latitude', 'Longitude', 'Grid reference', 'Temperature'),
 ('ooo', 'Which is the odd one out? (types of rock)', 'Water', 'Igneous', 'Sedimentary', 'Metamorphic', 'Water'),
 ('ooo', 'Which is the odd one out? (weather elements)', 'Mountain', 'Temperature', 'Rainfall', 'Wind', 'Mountain'),
 ('ooo', 'Which is the odd one out? (river features)', 'Crater', 'Source', 'Mouth', 'Tributary', 'Crater'),
 ('ooo', 'Which is the odd one out? (human geography)', 'Volcano', 'City', 'Town', 'Village', 'Volcano'),
 ('ooo', 'Which is the odd one out? (economic sectors)', 'Forest', 'Primary', 'Secondary', 'Tertiary', 'Forest'),
 ('ooo', 'Which is the odd one out? (types of energy)', 'Coal', 'Solar', 'Wind', 'Hydroelectric', 'Coal'),
 ('ooo', 'Which is the odd one out? (natural hazards)', 'City', 'Earthquake', 'Volcano', 'Tsunami', 'City'),
 ('ooo', 'Which is the odd one out? (climate zones)', 'River', 'Tropical', 'Polar', 'Temperate', 'River'),
 ('ooo', 'Which is the odd one out? (coastal features)', 'Mountain', 'Cliff', 'Beach', 'Stack', 'Mountain'),
 ('ooo', 'Which is the odd one out? (map directions)', 'Compass', 'North', 'South', 'East', 'Compass'),
 ('image', 'Which image shows a meander in a river?', 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Meander_on_River_Axe_-_geograph.org.uk_-_440544.jpg', 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Jiuzhaigou_Pearl_Waterfall_2005-08-21.jpeg', 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Meander_on_River_Axe_-_geograph.org.uk_-_440544.jpg', 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Coastal_delta_on_Kodiak_Island.jpg', 'https://upload.wikimedia.org/wikipedia/commons/0/01/Parque_estatal_Chugach%2C_Alaska%2C_Estados_Unidos%2C_2017-08-22%2C_DD_52.jpg'),
 ('image', 'Which image shows a river delta?', 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Coastal_delta_on_Kodiak_Island.jpg', 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Coastal_delta_on_Kodiak_Island.jpg', 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Seven_Sisters_3.jpg', 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Jiuzhaigou_Pearl_Waterfall_2005-08-21.jpeg', 'https://upload.wikimedia.org/wikipedia/commons/8/82/Mount_Shasta%2C_Lake_Siskiyou%2C_SW_view.jpg'),
 ('image', 'Which image shows a waterfall?', 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Jiuzhaigou_Pearl_Waterfall_2005-08-21.jpeg', 'https://upload.wikimedia.org/wikipedia/commons/2/27/Wey_source_farringdon.jpg', 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Jiuzhaigou_Pearl_Waterfall_2005-08-21.jpeg', 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Coastal_delta_on_Kodiak_Island.jpg', 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Cala_de_la_Granadella%2C_J%C3%A1vea%2C_Espa%C3%B1a%2C_2014-07-01%2C_DD_37.JPG'),
 ('image', 'Which image shows coastal cliffs?', 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Seven_Sisters_3.jpg', 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Beach_in_Town_Albufeira%2C_Portugal.jpg', 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Seven_Sisters_3.jpg', 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Coastal_delta_on_Kodiak_Island.jpg', 'https://upload.wikimedia.org/wikipedia/commons/3/34/Spruce_forest_at_Holma.jpg'),
 ('image', 'Which image shows a beach?', 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Beach_in_Town_Albufeira%2C_Portugal.jpg', 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Seven_Sisters_3.jpg', 'https://upload.wikimedia.org/wikipedia/commons/8/89/Wilkin_River_close_to_its_confluence_with_Makarora_River%2C_Otago%2C_New_Zealand.jpg', 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Beach_in_Town_Albufeira%2C_Portugal.jpg', 'https://upload.wikimedia.org/wikipedia/commons/0/01/Parque_estatal_Chugach%2C_Alaska%2C_Estados_Unidos%2C_2017-08-22%2C_DD_52.jpg'),
 ('image', 'Which image shows a glacier?', 'https://upload.wikimedia.org/wikipedia/commons/0/01/Parque_estatal_Chugach%2C_Alaska%2C_Estados_Unidos%2C_2017-08-22%2C_DD_52.jpg', 'https://upload.wikimedia.org/wikipedia/commons/8/82/Mount_Shasta%2C_Lake_Siskiyou%2C_SW_view.jpg', 'https://upload.wikimedia.org/wikipedia/commons/0/01/Parque_estatal_Chugach%2C_Alaska%2C_Estados_Unidos%2C_2017-08-22%2C_DD_52.jpg', 'https://upload.wikimedia.org/wikipedia/commons/8/89/Wilkin_River_close_to_its_confluence_with_Makarora_River%2C_Otago%2C_New_Zealand.jpg', 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Caravan_in_the_desert.jpg'),
 ('image', 'Which image shows a volcano erupting?', 'https://upload.wikimedia.org/wikipedia/commons/1/13/An_aerial_view_of_the_towering_volcanic_peak_of_Mt._Nyiragongo.jpg', 'https://upload.wikimedia.org/wikipedia/commons/8/82/Mount_Shasta%2C_Lake_Siskiyou%2C_SW_view.jpg', 'https://upload.wikimedia.org/wikipedia/commons/1/13/An_aerial_view_of_the_towering_volcanic_peak_of_Mt._Nyiragongo.jpg', 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Seven_Sisters_3.jpg', 'https://upload.wikimedia.org/wikipedia/commons/0/01/Parque_estatal_Chugach%2C_Alaska%2C_Estados_Unidos%2C_2017-08-22%2C_DD_52.jpg'),
 ('image', 'Which image shows an earthquake hazard scene?', 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Earthquake_damage%2C_4-64._Anchorage_-_Fourth_Ave._Graben._See_photos_527%2C882%2C301A%2C_621_%28looking_east%29_%2824822219172%29_%28cropped%29.jpg', 'https://upload.wikimedia.org/wikipedia/commons/2/24/Flood_23.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Earthquake_damage%2C_4-64._Anchorage_-_Fourth_Ave._Graben._See_photos_527%2C882%2C301A%2C_621_%28looking_east%29_%2824822219172%29_%28cropped%29.jpg', 'https://upload.wikimedia.org/wikipedia/commons/1/13/An_aerial_view_of_the_towering_volcanic_peak_of_Mt._Nyiragongo.jpg', 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Dry_land_%28cracked%29_7.jpg'),
 ('image', 'Which image shows flooding?', 'https://upload.wikimedia.org/wikipedia/commons/2/24/Flood_23.jpg', 'https://upload.wikimedia.org/wikipedia/commons/8/89/Wilkin_River_close_to_its_confluence_with_Makarora_River%2C_Otago%2C_New_Zealand.jpg', 'https://upload.wikimedia.org/wikipedia/commons/2/24/Flood_23.jpg', 'https://upload.wikimedia.org/wikipedia/commons/1/17/Lake_Geneva_from_Chillon_Castle.jpg', 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Beach_in_Town_Albufeira%2C_Portugal.jpg'),
 ('image', 'Which image shows drought?', 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Dry_land_%28cracked%29_7.jpg', 'https://upload.wikimedia.org/wikipedia/commons/2/24/Flood_23.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Amazonian_rainforest_2.JPG', 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Dry_land_%28cracked%29_7.jpg', 'https://upload.wikimedia.org/wikipedia/commons/8/89/Wilkin_River_close_to_its_confluence_with_Makarora_River%2C_Otago%2C_New_Zealand.jpg'),
 ('image', 'Which image shows a rainforest biome?', 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Amazonian_rainforest_2.JPG', 'https://upload.wikimedia.org/wikipedia/commons/3/34/Spruce_forest_at_Holma.jpg', 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Caravan_in_the_desert.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Amazonian_rainforest_2.JPG', 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Grassland_Near_The_Burf_-_geograph.org.uk_-_1400554.jpg'),
 ('image', 'Which image shows a hot desert biome?', 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Caravan_in_the_desert.jpg', 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Grassland_Near_The_Burf_-_geograph.org.uk_-_1400554.jpg', 'https://upload.wikimedia.org/wikipedia/commons/9/97/Northwest_Territories_tundra_stones.jpg', 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Caravan_in_the_desert.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Amazonian_rainforest_2.JPG'),
 ('image', 'Which image shows an urban area?', 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Lower_Manhattan_from_Jersey_City_July_2014_002.jpg', 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Guarda_Air2.JPG', 'https://upload.wikimedia.org/wikipedia/commons/6/69/Catoctin_Mountain_and_farm_MD1.jpg', 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Lower_Manhattan_from_Jersey_City_July_2014_002.jpg', 'https://upload.wikimedia.org/wikipedia/commons/3/34/Spruce_forest_at_Holma.jpg'),
 ('image', 'Which image shows a rural settlement?', 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Guarda_Air2.JPG', 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Lower_Manhattan_from_Jersey_City_July_2014_002.jpg', 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Wedgwood_Factory_-_geograph.org.uk_-_383594.jpg', 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Guarda_Air2.JPG', 'https://upload.wikimedia.org/wikipedia/commons/a/af/M6_motorway_-_geograph.org.uk_-_7929774.jpg'),
 ('image', 'Which image shows deforestation?', 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Mount_St_Helens-summer_2003.jpg', 'https://upload.wikimedia.org/wikipedia/commons/3/34/Spruce_forest_at_Holma.jpg', 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Mount_St_Helens-summer_2003.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Amazonian_rainforest_2.JPG', 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Grassland_Near_The_Burf_-_geograph.org.uk_-_1400554.jpg');



DROP TABLE IF EXISTS flashcard;

CREATE TABLE flashcard (
    fc_id INT GENERATED ALWAYS AS IDENTITY,
    term VARCHAR(50) NOT NULL,
    def VARCHAR(1000) NOT NULL,
    cluster VARCHAR(40) NOT NULL,
    PRIMARY KEY (fc_id)
);

INSERT INTO flashcard (term, def, cluster)
VALUES
 ('Term 1', 'Def 1', 'The tests'),
 ('Term 2', 'Def 2', 'The tests'),
 ('Term 3', 'Def 3', 'The tests'),
 ('Term 4', 'Def 4', 'The tests'),
 ('river', 'a river is a flowing body of water that moves towards the sea', 'rivers'),
 ('source', 'the place where a river begins', 'rivers'),
 ('mouth', 'the place where a river meets the sea or another river', 'rivers'),
 ('tributary', 'a smaller river that joins a larger river', 'rivers'),
 ('weather', 'the day to day conditions of the atmosphere', 'weather'),
 ('climate', 'the average weather conditions over a long period of time', 'weather'),
 ('precipitation', 'water that falls from the sky such as rain or snow', 'weather'),
 ('temperature', 'how hot or cold the air is', 'weather'),
 ('population', 'the number of people living in a place', 'population'),
 ('urban', 'an area with a high number of buildings and people', 'population'),
 ('rural', 'an area with few people and lots of open space', 'population'),
 ('migration', 'the movement of people from one place to another', 'population'),
 ('map', 'a drawing of an area showing features and locations', 'map skills'),
 ('compass', 'a tool used to find direction', 'map skills'),
 ('scale', 'shows how distances on a map relate to real life', 'map skills'),
 ('grid reference', 'a way of finding exact locations on a map', 'map skills');




CREATE TABLE result (
    id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    streak INT NOT NULL,
    date TIMESTAMP NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES user_data(user_id)
);

