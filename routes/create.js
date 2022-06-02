const express = require ("express");
const router = express.Router();
const postcontroller = require("../controllers/postcontroller");


router.get("/create-post",postcontroller.getInputForm);

router.post("/create-post",postcontroller.createNewPost);

module.exports=router;