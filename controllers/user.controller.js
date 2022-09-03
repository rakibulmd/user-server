var fs = require("fs");

module.exports.getRandomUser = (req, res) => {
    const users = JSON.parse(fs.readFileSync("user.json"));
    var randomIndex = Math.floor(Math.random() * users.length);
    res.send(users[randomIndex]);
};
