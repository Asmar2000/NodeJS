const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const swaggerjsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Contact Keeper API",
      version: "1.0.0",
      description: "This NodeJS/Express application implements a CRUD (Create, Read, Update, Delete) interface for managing contacts.",
      contact: {
        name: "Mahmoud Lotfy",
        url: "https://github.com/Asmar2000/",
        email: "mahmoudlotfy3799@gmail.com"
      },
    },
    servers: [
      {
        url: "http://localhost:5001",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const specs = swaggerjsdoc(options)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});