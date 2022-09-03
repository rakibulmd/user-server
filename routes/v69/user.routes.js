const express = require("express");
const {
    getRandomUser,
    getAllUser,
    saveUser,
    updateUser,
    updateBulkUser,
    deleteUser,
} = require("../../controllers/user.controller");
const { saveUserValidation } = require("../../middlewares/saveUserValidation");
const {
    updateUsersValidation,
} = require("../../middlewares/updateUsersValidation");
const {
    updateUserValidation,
} = require("../../middlewares/updateUserValidation");

const router = express.Router();

router.route("/random").get(getRandomUser);
router.route("/all").get(getAllUser);
router.route("/save").post(saveUserValidation, saveUser);
router.route("/update").patch(updateUserValidation, updateUser);
router.route("/bulk-update").patch(updateUsersValidation, updateBulkUser);
router.route("/delete").delete(deleteUser);

module.exports = router;
