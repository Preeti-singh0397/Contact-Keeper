const express = require("express");
const router = express.Router();

// @router GET api/auth
// @desc   Get the User logged in
// @access Private
router.get("/", (req, res) => {
  res.send("Get the User logged");
});

// @router POST api/auths
// @desc   Auth user and get token
// @access Public
router.post("/", (req, res) => {
  res.send("Logged in user");
});

module.exports = router;
