var fs = require("fs");

module.exports.updateUsersValidation = function (req, res, next) {
    const usersObject = req.body;
    const users = JSON.parse(fs.readFileSync("user.json"));
    if (!Array.isArray(usersObject)) {
        res.send("provide an array of user data");
    } else {
        for (let userObject of usersObject) {
            const exist = users.find((user) => user.id == userObject.id);
            if (!exist) {
                res.status(404).send({ message: "user not found to update!" });
                return;
            }
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
        }
    }
    next();
};
