const express = require("express");
const { getRandomUser } = require("../../controllers/user.controller");
const router = express.Router();

router.route("/random").get(getRandomUser);

module.exports = router;
