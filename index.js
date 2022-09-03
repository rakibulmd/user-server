const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const userRouter = require("./routes/v69/user.routes.js");

app.use("/api/v69/user", userRouter);

// Handle unknown routes
app.all("*", (req, res) => {
    res.send("Where did you get it? It doesn't exist!");
});

// Handle unhandled rejection
process.on("unhandledRejection", (error) => {
    console.log(error);
    app.close(() => {
        process.exit(1);
    });
});

app.listen(port, () => {
    console.log("server is running at port: ", port);
});
