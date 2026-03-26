# Beat the Hive

Can you best the hive and rise to queen bee in this fun educational geography game?

## Features:

- An api to fetch fun geography games of various types
- User authentication and authorization so users accounts and information is safe and secure
- A collection of educational microgames which allows you to build up a streak
- A leader board of streaks so you can aim to be the smartest bee in the hive!

## Installation

### Requirements

In order to install and run this project you need the following prerequisites:

- Node version of `24.13` upwards

### Steps:

1. Find a location on your computer you want to store the project the `git clone` our repository
2. Navigate to the repository on your computer and run `npm i` to install dependencies
3. Create a postgresql database and copy your transaction pooler link into a .env file with the key `DB_URL`
4. Find an open port and add that to your .env file with a key of `PORT`
5. In order for the application to work your .env file require 2 more variables

```
BCRYPT_SALT_ROUNDS=10
SECRET_TOKEN=<secret token>
```

6. Run `npm run setup-db` to set up the database
7. Run `npm run dev` to open the express application
8. Open `index.html` in the client folder to get started

### Using docker

## Endpoints

| Method | Endpoint       | Result/Usage                                                                                                                                    |
| ------ | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /games/random  | This endpoint fetches a random game from the database. Passing in the clusters of flashcards or ids of mcq games will remove them from the pool |
| GET    | /mcq           | Fetches a random mcq game.                                                                                                                      |
| GET    | /result        | Fetches all results sorted in the results table                                                                                                 |
| POST   | /result        | Posts a new result to the results table. Pass in your user_id and the streak number                                                             |
| POST   | /user/register | Posts a new user to the user_data table. Pass in your first                                                                                     |

name, last name, email, password, school, year group and role
|POST|/user/login| Used to authenticate a user and obtain an access token.
|GET|/user/me| Used to verify the token and retrieve the currently logged-in user’s information.
|GET|/user/students| Returns a list of students. Authentication required and authorization teachers only

## Planned functionality

- Adding a ordering game type
- Interactive effect on streak extension and streak failure

## Known issues

It is a bit buggy in general
