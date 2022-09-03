const { response } = require("express");
var fs = require("fs");

// Get a single Random User
module.exports.getRandomUser = (req, res) => {
    const users = JSON.parse(fs.readFileSync("user.json"));
    var randomIndex = Math.floor(Math.random() * users.length);
    res.send(users[randomIndex]);
};

// Get all the User
module.exports.getAllUser = (req, res) => {
    const limit = parseInt(req.query.limit);
    const users = JSON.parse(fs.readFileSync("user.json"));
    if (limit) {
        res.send(users.slice(0, limit));
    }
    res.send(users);
};

//save user
module.exports.saveUser = async (req, res) => {
    const newUser = req.body;
    const users = JSON.parse(fs.readFileSync("user.json"));
    users.push(newUser);
    fs.writeFile("user.json", JSON.stringify(users), (err) => {
        if (err) {
            res.send("failed to save the data");
        } else {
            res.send(users);
        }
    });
};

// update user
module.exports.updateUser = async (req, res) => {
    const updateUser = req.body;
    const users = JSON.parse(fs.readFileSync("user.json"));
    let userIndex = users.findIndex((obj) => obj.id == updateUser.id);
    const props = Object.keys(updateUser);
    for (let prop of props) {
        users[userIndex][prop] = updateUser[prop];
    }
    fs.writeFile("user.json", JSON.stringify(users), (err) => {
        if (err) {
            res.send("failed to save the data");
        } else {
            res.send(users[userIndex]);
        }
    });
};

module.exports.updateBulkUser = async (req, res) => {
    const updateUsers = req.body;
    const users = JSON.parse(fs.readFileSync("user.json"));
    for (let updateUser of updateUsers) {
        let userIndex = users.findIndex((obj) => obj.id == updateUser.id);
        const props = Object.keys(updateUser);
        for (let prop of props) {
            users[userIndex][prop] = updateUser[prop];
        }
    }
    fs.writeFile("user.json", JSON.stringify(users), (err) => {
        if (err) {
            res.send("failed to save the data");
        } else {
            res.send(`updated ${updateUsers.length} users`);
        }
    });
};
