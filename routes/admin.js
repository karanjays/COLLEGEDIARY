const express = require("express");
const router = express.Router();

router.get("/admin", (req, res) => {
    res.send("welcome to admin page");
});

module.exports = router;