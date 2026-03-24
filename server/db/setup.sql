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

