DROP TABLE IF EXISTS result;
DROP TABLE IF EXISTS user_data;

CREATE TABLE user_data (
    user_id INT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(100) NOT NULL,
    school_name VARCHAR(100) NOT NULL,
    year_group INT NOT NULL,
    class VARCHAR(10) NOT NULL,
    email VARCHAR(150) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR (10) NOT NULL DEFAULT 'Student',
    PRIMARY KEY (user_id)

);

INSERT INTO user_data (name, school_name, year_group, class, email, password)
VALUES
 ('Oliver', 'Backwell School', 7 , '7C3', 'oliver@bjerg.co.uk', '3'); 


DROP TABLE IF EXISTS mql_question;

CREATE TABLE mql_question (
    id INT GENERATED ALWAYS AS IDENTITY,
    question_type VARCHAR(50) NOT NULL,
    question_body VARCHAR(255) NOT NULL,
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
 ('ooo', 'Which is the odd one out? (map directions)', 'Compass', 'North', 'South', 'East', 'Compass');



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
 ('Term 4', 'Def 4', 'The tests');



CREATE TABLE result (
    id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    streak INT NOT NULL,
    date TIMESTAMP NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES user_data(user_id)
);

