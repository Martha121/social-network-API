# Social-Media-API
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)' 


## Description

This project is a social media network web application. It allows users to create or delete : users, share their thoughts, react to friend's thoughts and create a friends list.

## User Story

As a social media startup, I want an API for my social network that uses a NoSQL database so that my website can handle large amounts of unstructured data.

## Technologies
- Javascript
- Node.js
- MongoDB
- Mongoose
- Express.js
- Moment

## Usage

- Make sure you have MongoDB installed on your machine (if you don't, follow the instructions on the MongoDB Website)
- Clone the repo
- Install dependencies with npm -i
- Run npm start to run the server and make the API live
- Use your browser or an app like Insomnia to test the REST API.

## Endpoints

###User

- Get all users: GET /api/users
- Create a user: POST /api/users
- Get user by ID: GET /api/users/:id
- Update a user: PUT /api/users/:id
- Delete a user: DELETE /api/users/:id
- Add a friend: PUT /api/users/:userId/friends/:friendId
- Delete a friend: DELETE /api/users/:userId/friends/:friendId

###Thought

- Get all thoughts: GET /api/thoughts
- Create a thought: POST /api/thoughts
- Get thought by ID: GET /api/thoughts/:id
- Update a thought: PUT /api/thoughts/:id
- Delete a thought: DELETE /api/thoughts/:id
- Add a reaction: PUT /api/thoughts/:id/reactions
- Delete a reaction: DELETE /api/thoughts/:id/reaction_id

## Demo
Here is the link for the demonstration video:
Video of GET, POST, PUT and DELETE routes for Users and Thoughts tested in insomnia :https://drive.google.com/file/d/1IV4JhVzvlzuvFJJCqOfS7FKnXRGfrEUj/view
Video of  POST and DELETE routes for reactions and friends:https://drive.google.com/file/d/1V3GaMLwnBin4wKOIRkZuPvnQ3FFeUMFp/view

