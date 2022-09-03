var fs = require("fs");
const { handleError } = require("../Error/handleErrror");

module.exports.deleteUserValidation = function (req, res, next) {
    try {
        const id = req?.body?.id || req?.query?.id || req?.params?.id;
        const users = JSON.parse(fs.readFileSync("user.json"));
        const exist = users.find((user) => user.id == id);
        if (exist) {
            next();
        } else {
            res.status(404).send({ message: "The user doesn't exist!" });
        }
    } catch (error) {
        handleError(error);
    }
};
