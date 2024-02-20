/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - user_id
 *         - name
 *         - email
 *         - phone
 *       properties:
 *         user_id:
 *           type: string
 *           description: The ID of the user
 *         name:
 *           type: string
 *           description: The name of the user
 *         email:
 *           type: string
 *           description: The email of the user
 *         phone:
 *           type: string
 *           description: The phone number of the user
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the user was created
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the user was last updated
 *     
 */



/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API endpoints for managing users
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Successful response with the created user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad request, missing or invalid data
 * /users/login:
 *   post:
 *     summary: Login a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Successful response with the logged in user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized, invalid credentials
 * /users/current:
 *   get:
 *     summary: Get the current user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful response with the current user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized, missing or invalid token
 */

const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getCurrentUser } = require("../controllers/userController");
const { validateToken } = require("../middleware/validateTokenHandler")

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/current", validateToken, getCurrentUser);

module.exports = router;