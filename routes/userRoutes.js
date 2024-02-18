const express = require("express");
const router = express.Router();
const {registerUser,
    getUsers,
    getCurrentUser} = require("../controllers/userController");





router.post("/register",registerUser) 
router.post("/login", getUsers)
router.get("/current", getCurrentUser)




module.exports = router;