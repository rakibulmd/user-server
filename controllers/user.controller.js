const { response } = require("express");
var fs = require("fs");
const { handleError } = require("../Error/handleErrror");

// Get a single Random User
module.exports.getRandomUser = async (req, res) => {
    try {
        const users = await JSON.parse(fs.readFileSync("user.json"));
        var randomIndex = Math.floor(Math.random() * users.length);
        res.status(200).send({
            status: "successful",
            count: 1,
            data: users[randomIndex],
        });
    } catch (error) {
        handleError(error);
    }
};

// Get all the User
module.exports.getAllUser = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit);
        const users = await JSON.parse(fs.readFileSync("user.json"));
        if (limit) {
            res.send(users.slice(0, limit));
        }
        res.status(200).send({
            status: "successful",
            count: `${users.length}`,
            data: users,
        });
    } catch (error) {
        handleError(error);
    }
};

//save user
module.exports.saveUser = async (req, res) => {
    try {
        const newUser = req?.body;
        const users = await JSON.parse(fs.readFileSync("user.json"));
        users.push(newUser);
        fs.writeFile("user.json", JSON.stringify(users), (err) => {
            if (err) {
                res.send("failed to save the data");
            } else {
                res.status(200).send({
                    status: "successful",
                    insertCount: 1,
                    insertId: newUser?.id,
                });
            }
        });
    } catch (error) {
        handleError(error);
    }
};

// update user
module.exports.updateUser = async (req, res) => {
    try {
        const updateUser = req?.body;
        const users = await JSON.parse(fs.readFileSync("user.json"));
        let userIndex = users.findIndex((obj) => obj.id == updateUser.id);
        const props = Object.keys(updateUser);
        for (let prop of props) {
            users[userIndex][prop] = updateUser[prop];
        }
        fs.writeFile("user.json", JSON.stringify(users), (err) => {
            if (err) {
                res.send("failed to save the data");
            } else {
                res.status(200).send({
                    status: "successful",
                    modifiedCount: 1,
                    modifiedId: updateUser?.id,
                });
            }
        });
    } catch (error) {
        handleError(error);
    }
};

// update multiple data
module.exports.updateBulkUser = async (req, res) => {
    try {
        const updateUsers = req.body;
        const users = await JSON.parse(fs.readFileSync("user.json"));
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
                res.status(200).send({
                    status: "successful",
                    modifiedCount: `${updateUsers?.length}`,
                });
            }
        });
    } catch (error) {
        handleError(error);
    }
};

// delete a user data
module.exports.deleteUser = async (req, res) => {
    try {
        const id = req?.body?.id || req?.query?.id || req?.params?.id;
        const users = await JSON.parse(fs.readFileSync("user.json"));
        let userIndex = users.findIndex((obj) => obj.id == id);
        users.splice(userIndex, 1);
        fs.writeFile("user.json", JSON.stringify(users), (err) => {
            if (err) {
                res.send("failed to delete!");
            } else {
                res.status(200).send({
                    status: "successful",
                    deleteCount: 1,
                    deleteId: `deleted ${id}`,
                });
            }
        });
    } catch (error) {
        handleError(error);
    }
};
