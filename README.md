# Social Network API
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This application simulates the backend of a social network. It uses MongoDB and Mongoose to create a database of users, thoughts, and reactions. The user can create, update, and delete users, thoughts, and reactions. The user can also add and remove friends from a user's friend list.



## Installation

Install the dependencies by running the following command:

```npm install```

This application uses MongoDB to handle data storage. Make sure you have it installed on your local machine. For more information on how to install MongoDB, visit [MongoDB's website](https://docs.mongodb.com/manual/installation/).

It is recommended to use a program such as [Insomnia](https://insomnia.rest/) to test the routes of this application.

## Usage

In order to run the application, run the following command:

```npm start```

This will start the server and sync the Mongoose models to the MongoDB database. From there, the user can test the routes using a program such as Insomnia.

In Insomnia, using the base URL of `http://localhost:3001/api`, the user can test the following routes:

* `/users`
  - GET all users
  - POST a new user
    - Provide `username` and `email` in the request body

* `/users/:userId`
  - GET a single user by ID
  - PUT to update a user by ID
  - DELETE to remove a user by ID

* `/users/:userId/friends/:friendId`
    - POST to add a new friend to a user's friend list
      - No request body is needed
    - DELETE to remove a friend from a user's friend list

* `/thoughts`
    - GET all thoughts
    - POST a new thought
      - Provide `thoughtText`, `username`, and `userId` in the request body

* `/thoughts/:thoughtId`
    - GET a single thought by ID
    - PUT to update a thought by ID
    - DELETE to remove a thought by ID

* `/thoughts/:thoughtId/reactions`
    - POST to create a reaction stored in a single thought's reactions array
      - No request body is needed

*`/thoughts/:thoughtId/reactions/:reactionId`
    - DELETE to pull and remove a reaction by the reaction's reactionId value

## Walkthrough Video
You can view a walkthrough video of the application [here](https://drive.google.com/file/d/13sInYdjs9szs_eEidzVNVPtY1WgTTP8e/view?usp=sharing).

## License

    MIT License

    Copyright (c) 2023 Travis Miller

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Questions

If you have any questions, comments, or concerns, contact the developer using the email provided below

Email: [traviscmiller01@gmail.com](mailto:traviscmiller01@gmail.com);

Check out the developer's other projects on GitHub by cicking the link below

GitHub Username: [tcmiller30](https://github.com/tcmiller30)
