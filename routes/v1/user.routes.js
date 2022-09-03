const express = require("express");
const router = express.Router();

const {
    getRandomUser,
    getAllUser,
    saveUser,
    updateUser,
    updateBulkUser,
    deleteUser,
} = require("../../controllers/user.controller");
const {
    deleteUserValidation,
} = require("../../middlewares/deleteUserValidation");
const { saveUserValidation } = require("../../middlewares/saveUserValidation");
const {
    updateUsersValidation,
} = require("../../middlewares/updateUsersValidation");
const {
    updateUserValidation,
} = require("../../middlewares/updateUserValidation");

/**
 * @api {get} get user data
 * @apiDescription get single user data by Math.random method
 * @apiPersmission open
 * @apiSuccess {object} single user object
 */
router.route("/random").get(getRandomUser);

/**
 * @api {get} get all user data
 * @apiDescription Get all data in users
 * @apiPersmission open
 * @apiParam {number{N}} [limit=n] limit the users data count
 * @apiSuccess {object[]} all the data
 */
router.route("/all").get(getAllUser);
router.route("/save").post(saveUserValidation, saveUser);
router.route("/update").patch(updateUserValidation, updateUser);
router.route("/bulk-update").patch(updateUsersValidation, updateBulkUser);
router.route("/delete").delete(deleteUserValidation, deleteUser);

module.exports = router;
