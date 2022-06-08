const express = require("express");
const path = require("path");
const blogcontroller = require('../controllers/blogcontroller');
const router = express.Router();
const isAuth = require("../middlewares/isAuth");

router.get("/blog", blogcontroller.getAllBlogs);

router.get("/singleblog/:id", blogcontroller.getSingleBlogs);
router.get("/blog/upvote/:id",isAuth, blogcontroller.getupvoteblog);
router.get("/blog/downvote/:id",isAuth, blogcontroller.getdownvotedblog);

router.post("/blog", blogcontroller.getAllBlogs);

router.get("/notice", blogcontroller.getAllNotices);

module.exports = router;