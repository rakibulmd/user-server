const express = require("express");
const {
    getRandomUser,
    getAllUser,
    saveUser,
    updateUser,
} = require("../../controllers/user.controller");
const { saveUserValidation } = require("../../middlewares/saveUserValidation");
const {
    updateUserValidation,
} = require("../../middlewares/updateUserValidation");

const router = express.Router();

router.route("/random").get(getRandomUser);
router.route("/all").get(getAllUser);
router.route("/save").post(saveUserValidation, saveUser);
router.route("/update").patch(updateUserValidation, updateUser);

module.exports = router;
