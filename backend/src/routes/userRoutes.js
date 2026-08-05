const express = require("express");

const {
    registerUser,
    getUser,
    searchUser
} = require("../controllers/userController");

const router = express.Router();

// Register
router.post("/register", registerUser);

// Get User by ID
router.get("/user/:id", getUser);

// Search User
router.get("/search", searchUser);

module.exports = router;