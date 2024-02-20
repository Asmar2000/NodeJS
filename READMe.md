This project is a NodeJS/Express application that implements a CRUD (Create, Read, Update, Delete) interface for managing contacts. It leverages valuable tools and libraries like Express for server-side rendering, nodemon for automatic restarts, express-async-handler for cleaner error handling, MongoDB for data persistence, Mongoose for streamlined object modeling, bcrypt for secure password hashing, and JsonWebToken (JWT) for authentication.

Key Features:

Create, read, update, and delete contacts.
Secure user authentication with JWT.
Robust error handling using express-async-handler.
Automatic restarting of the server upon code changes with nodemon.
Data persistence in MongoDB for scalability and reliability.
Efficient object modeling and queries with Mongoose.
Secure password hashing with bcrypt.
Prerequisites:

Node.js and npm (or yarn) installed on your system.
A MongoDB instance available.
Setup Instructions:

Clone the repository:


git clone https://github.com/Asmar2000/NodeJS.git 
Use code with caution.
Install dependencies:

Bash
cd NodeJS
npm install

Configure environment variables:

Create a .env file at the root of your project and add essential environment variables like database connection details and secret keys. Refer to the config.js file for guidance on required variables.

Start the development server:

npm run dev
The server will typically run on port 5000 (configurable in server.js).

Usage:

Authentication: The app leverages JWT for authentication. Refer to the auth routes in routes/userRoutes.js for endpoints like registering, logging in, and refreshing tokens.
Contact Management: Use the CRUD endpoints in routes/contactRoutes.js to create, read, update, and delete contacts.