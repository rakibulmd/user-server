module.exports.handleError = function handleError(err, req, res, next) {
    console.log(err);
    res.send("something wrong happened!");
};
