var fs = require("fs");

module.exports.getRandomUser = (req, res) => {
    const users = JSON.parse(fs.readFileSync("user.json"));
    var randomIndex = Math.floor(Math.random() * users.length);
    res.send(users[randomIndex]);
};
module.exports.getAllUser = (req, res) => {
    const limit = parseInt(req.query.limit);
    const users = JSON.parse(fs.readFileSync("user.json"));
    if (limit) {
        res.send(users.slice(0, limit));
    }
    res.send(users);
};
