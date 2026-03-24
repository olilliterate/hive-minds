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

DROP TABLE IF EXISTS ooo_question;

CREATE TABLE ooo_question (
    ooo_id INT GENERATED ALWAYS AS IDENTITY,
    question_body VARCHAR(255) NOT NULL,
    answer INT NOT NULL,
    prompt_one VARCHAR(255) NOT NULL,
    prompt_two VARCHAR(255) NOT NULL,
    prompt_three VARCHAR (255) NOT NULL,
    prompt_four VARCHAR(255) NOT NULL,
    PRIMARY KEY (ooo_id)

);


INSERT INTO ooo_question (question_body, answer, prompt_one, prompt_two, prompt_three, prompt_four)
VALUES
 ('What is not a city in the UK?', 3, 'London', 'Bristol', 'Paris', 'Swansea');

DROP TABLE IF EXISTS mql_question;

CREATE TABLE mql_question (
    id INT GENERATED ALWAYS AS IDENTITY,
    question_body VARCHAR(255) NOT NULL,
    answer INT NOT NULL,
    prompt_one VARCHAR(255) NOT NULL,
    prompt_two VARCHAR(255) NOT NULL,
    prompt_three VARCHAR (255) NOT NULL,
    prompt_four VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)

);


INSERT INTO mql_question (question_body, answer, prompt_one, prompt_two, prompt_three, prompt_four)
VALUES
 ('What is the most populated part of the UK?', 1, 'England', 'Northern Ireland', 'Wales', 'Scotland'),
 ('What is not a city in the UK?', 3, 'London', 'Bristol', 'Paris', 'Swansea');

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

