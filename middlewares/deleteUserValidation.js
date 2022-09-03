var fs = require("fs");

module.exports.deleteUserValidation = function (req, res, next) {
    const id = req?.body?.id || req?.query?.id || req?.params?.id;
    const users = JSON.parse(fs.readFileSync("user.json"));
    const exist = users.find((user) => user.id == id);
    if (exist) {
        next();
    } else {
        res.send("the user doesn't exist!");
    }
};
