const express = require("express");
const path = require("path");
const blogcontroller = require('../controllers/blogcontroller');
const router = express.Router();


router.get("/blog", blogcontroller.getAllBlogs);

router.post("/blog", blogcontroller.getAllBlogs);

router.get("/notice", blogcontroller.getAllNotices);

module.exports = router;