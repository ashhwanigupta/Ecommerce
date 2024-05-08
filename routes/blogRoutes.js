const express = require("express");
const {createBlog} = require("../controller/blogController")

const router = express.Router();

// router.post("/", authMiddleware, isAdmin, createBlog);
router.post("/" , createBlog);

module.exports = router;