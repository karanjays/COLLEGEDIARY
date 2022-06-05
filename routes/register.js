const express = require ("express");
const router = express.Router();
const logincontroller = require("../controllers/logincontroller");


router.get("/login",logincontroller.getlogin);

router.post("/login",logincontroller.postlogin);

router.get("/sign-up",logincontroller.getsignup);

router.post("/sign-up",logincontroller.makesignup);

router.get("/logout",logincontroller.getlogout);

module.exports=router;