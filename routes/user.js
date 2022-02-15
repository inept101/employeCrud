const express = require("express");
const router = express.Router();

const { signIn, signUp } = require("../controller/users");

router.post("/signin", signIn());

router.post("/signup", signUp());

module.exports = router;
