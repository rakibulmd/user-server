module.exports.saveUserValidation = function (req, res, next) {
    const userObject = req.body;
    if (typeof userObject !== "object") {
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
