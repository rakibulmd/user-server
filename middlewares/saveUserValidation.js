var fs = require("fs");

module.exports.saveUserValidation = function (req, res, next) {
    const userObject = req.body;
    const users = JSON.parse(fs.readFileSync("user.json"));
    const exist = users.find((user) => user.id === userObject.id);
    if (exist) {
        res.send("this id already exist!");
    } else if (typeof userObject !== "object") {
        res.send("data is not object");
    } else if (
        userObject.id === undefined ||
        userObject.gender === undefined ||
        userObject.name === undefined ||
        userObject.contact === undefined ||
        userObject.address === undefined ||
        userObject.photoUrl === undefined
    ) {
        res.send("not a valid object");
    } else {
        next();
    }
};
