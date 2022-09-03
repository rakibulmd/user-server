const express = require("express");
const {
    getRandomUser,
    getAllUser,
    saveUser,
} = require("../../controllers/user.controller");
const { saveUserValidation } = require("../../middlewares/saveUserValidation");
const router = express.Router();

router.route("/random").get(getRandomUser);
router.route("/all").get(getAllUser);
router.route("/save").post(saveUserValidation, saveUser);

module.exports = router;

const a = {
    _id: "631349aaadaa5cf5da0d27ee",
    picture: "http://placehold.it/32x32",
    name: "Hallie Wagner",
    gender: "female",
    phone: "+1 (866) 584-2719",
    address: "968 Verona Place, Springdale, Nevada, 6968",
};
