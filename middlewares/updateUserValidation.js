var fs = require("fs");

module.exports.updateUserValidation = function (req, res, next) {
    const userObject = req.body;
    const users = JSON.parse(fs.readFileSync("user.json"));
    const exist = users.find((user) => user.id === userObject.id);
    if (exist) {
        next();
    } else {
        res.send("the user doesn't exist!");
    }
};
