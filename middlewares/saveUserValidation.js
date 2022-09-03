var fs = require("fs");

module.exports.saveUserValidation = function (req, res, next) {
    const userObject = req.body;
    const users = JSON.parse(fs.readFileSync("user.json"));
    const exist = users.find((user) => user.id === userObject.id);
    const props = Object.keys(userObject);
    for (let prop of props) {
        const match = [
            "id",
            "name",
            "gender",
            "address",
            "contact",
            "photoUrl",
        ].includes(prop);
        if (!match) {
            res.status(409).send({ message: "Invalid property name" });
            return;
        }
    }
    if (exist) {
        res.status(409).send({ message: "this id already exist!" });
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
        res.status(409).send({
            message: "Object is not valid! Missing property!",
        });
    } else {
        next();
    }
};
