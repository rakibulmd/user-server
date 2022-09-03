const express = require("express");
const {
    getRandomUser,
    getAllUser,
} = require("../../controllers/user.controller");
const router = express.Router();

router.route("/random").get(getRandomUser);
router.route("/all").get(getAllUser);

module.exports = router;
