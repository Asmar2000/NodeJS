Markdown
# Contact Manager App

[![Node.JS](https://img.shields.io/badge/node-v-%5Env%20-%3Bgreen.svg)](https://nodejs.org/)
[![MongoDB version](https://img.shields.io/badge/mongodb-v-%3Bgreen.svg)](https://www.mongodb.com/)

**Description:**

This NodeJS/Express application implements a CRUD (Create, Read, Update, Delete) interface for managing contacts. It leverages:

* Express for server-side rendering
* nodemon for automatic restarts
* express-async-handler for cleaner error handling
* MongoDB for data persistence
* Mongoose for streamlined object modeling
* bcrypt for secure password hashing
* JsonWebToken (JWT) for authentication

**Key Features:**

* Create, read, update, and delete contacts.
* Secure user authentication with JWT.
* Robust error handling using express-async-handler.
* Automatic restarting of the server upon code changes with nodemon.
* Data persistence in MongoDB for scalability and reliability.
* Efficient object modeling and queries with Mongoose.
* Secure password hashing with bcrypt.

**Prerequisites:**

* Node.js and npm (or yarn) installed on your system.
* A MongoDB instance available.

**Setup Instructions:**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Asmar2000/NodeJS.git

2. **Install dependencies:**


cd NodeJS
npm install

3. **Configure environment variables:**

Create a .env file at the root of your project and add essential environment variables like database connection details and secret keys. Refer to the config.js file for guidance on required variables.

4. **Start the development server:**


npm run dev

The server will typically run on port 5000 (configurable in server.js).

Usage:

Authentication: Refer to the auth routes in routes/userRoutes.js for endpoints like registering, logging in, and refreshing tokens.
Contact Management: Use the CRUD endpoints in routes/contactRoutes.js to create, read, update, and delete contacts.
