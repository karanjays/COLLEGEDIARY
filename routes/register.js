const express = require ("express");
const router = express.Router();
const logincontroller = require("../controllers/logincontroller");


router.get("/login",logincontroller.getlogin);

router.get("/sign-up",logincontroller.getsignup);


module.exports=router;