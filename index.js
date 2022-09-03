const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;
const userRouter = require("./routes/v1/user.routes.js");

// user api endPoints
app.use("/api/v1/user", userRouter);

// Handle unknown routes
app.all("*", (req, res) => {
    res.send("Where did you get it? It doesn't exist!");
});

// Handle unhandled rejection
process.on("unhandledRejection", (error) => {
    console.log(error);
});

app.listen(port, () => {
    console.log("server is running at port: ", port);
});
