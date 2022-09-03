var fs = require("fs");

module.exports.updateUserValidation = function (req, res, next) {
    const userObject = req.body;
    const users = JSON.parse(fs.readFileSync("user.json"));
    const exist = users.find((user) => user.id === userObject.id);
    if (exist) {
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
        next();
    } else {
        res.status(404).send({ message: "The user doesn't exist!" });
    }
};
